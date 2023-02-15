import User from '../models/user.js'

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
  const { username, nickname, quote, friends } = req.body
  console.log(req.body)
  console.log(req.params.id, 'test')
  //create the new data
  const newData = await User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      quote,
      nickname,
      friends,
      userBanner:
        '/uploads/images/' + (req?.file?.filename ? req.file.filename : ''),
    },
    { new: true, runValidators: true }
  ).populate({
    path: 'friends',
  })

  // newData.update();
  // newData.save();
  res.send({ message: 'success', data: newData })
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
