import User from '../models/user.js'

//  Get User by ID

/**
 *  {
            "_id": "63e5015c38443395a5b03cf9",
            "userId": {
                "_id": "63e24c2ed759faf1397031fd",
                "username": "denis",
                "email": "denimcardle@gmail.com",
                "password": "$2b$12$8zluylc7FzQDjNFdSOQkk.kxEBhunL6qdY3C/2KM6Jq.FX8kkit52",
                "userPic": "/uploads/images/1675775022449_den_snowballed.JPG",
                "__v": 1,
                "nickname": "monnface",
                "quote": "when you're smilng the whole world laughs at you",
                "userBanner": "/uploads/images/1676295689325_fireworks1.gif",
                "friends": [],
                "id": "63e24c2ed759faf1397031fd"
            },
            "username": "denis",
            "desc": "denny wake up",
            "userPic": "/uploads/images/1675775022449_den_snowballed.JPG",
            "likes": {},
            "comments": [],
            "createdAt": "2023-02-09T14:21:16.064Z",
            "updatedAt": "2023-02-09T14:21:16.064Z",
            "__v": 0
        },
 */

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
  const { username, nickname, quote } = req.body
  console.log(req.body)
  console.log(req.params.id, 'test')
  //create the new data
  const newData = await User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      quote,
      nickname,
      userBanner: '/uploads/images/' + req.file.filename,
      // userPic: "/uploads/images/" + req.file.filename,
    },
    { new: true }
  )

  // newData.update();
  // newData.save();
  res.send({ message: 'create new Profile Data', data: newData })
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
