import User from '../models/user.js'
import createError from 'http-errors'
//  Get User by ID

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const { posts } = req.query

    const query = User.findById(id)
    if (posts === 'full') {
      query.populate({
        path: 'posts',
        select: 'username desc userPic likes comments -userId',
      })
    }
    const user = await query
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// get all users

export const getAllUsers = async (req, res, next) => {
  const allUsers = await User.find({})

  res
    .status(200)
    .json({ status: 'success', length: allUsers.length, data: allUsers })
}

/* --------------------------------------------       */
/*                    User Profile Data               */
/* --------------------------------------------       */

export const editProfile = async (req, res, next) => {
  //destructure frontend request
  const { id } = req.params
  const { username, nickname, quote, friends, email } = req.body
  //create the new data
  if (!id) {
    return next(createError(401, 'Invalid user ID.'))
  }

  const foundUser = await User.findById(id).orFail(
    createError(401, 'Invalid user ID.')
  )

  if (foundUser._id.toString() !== req.user._id.toString()) {
    return next(
      createError(403, "ID doesn't belong to the current logged in user.")
    )
  }
  // username, nickname, quote, friends
  if (typeof username === 'string') foundUser.username = username
  if (typeof email === 'string') foundUser.email = email
  if (typeof nickname === 'string') foundUser.nickname = nickname
  if (typeof quote === 'string') foundUser.quote = quote
  if (Array.isArray(friends)) foundUser.friends = friends
  if (req.file && req.file.filename)
    foundUser.userBanner = '/uploads/images/'.concat(req.file.filename)
  await foundUser.populate({ path: 'friends' })
  await foundUser.validate()
  const data = await foundUser.save()

  res.status(200).json({
    status: 'success',
    data,
  })
}

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    )

    const formattedFriends = friends.map(
      ({ _id, username, userPic, quote, userBanner, nickname }) => {
        return { _id, username, userPic, quote, userBanner, nickname }
      }
    )
    res.status(200).json(formattedFriends)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

//Update

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params
    const user = await User.findById(friendId)
    const friend = await User.findById(friendId)

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId)
      friend.friends = friend.friends.filter((id) => id !== id)
    } else {
      user.friends.push(friendId)
      friend.friends.push(id)
    }

    await user.save()
    await friend.save()

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    )

    const formattedFriends = friends.map(
      ({ _id, username, userPic, quote, userBanner, nickname }) => {
        return { _id, username, userPic, quote, userBanner, nickname }
      }
    )

    res.status(200).json(formattedFriends)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
