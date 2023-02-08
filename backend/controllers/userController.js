import User from "../models/user.js";

//  Get User by ID

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* --------------------------------------------       */
/*                    User Profile Data               */
/* --------------------------------------------       */

export const editProfile = async (req, res, next) => {
  //destructure frontend request
  const { nickname, quote } = req.body;
  console.log(req.body);
  console.log(req.params.id, "test");
  //create the new data
  const newData = await User.findByIdAndUpdate(
    req.params.id,
    {
      quote,
      nickname,
      userBanner: "/uploads/images/" + req.file.filename,
    },
    { new: true }
  );

  // newData.update();
  // newData.save();
  res.send({ message: "create new Profile Data", data: newData });
};
