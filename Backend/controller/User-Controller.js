const UserModal = require("../modal/User");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModal.findOne({ email: email });
        if (user) {
            return res.status(400).json({ message: "alredy exists" });
        }
        const hashpassword = await bcryptjs.hash(password, 10);
        const createdUser = new UserModal({
            name: name, email: email, password: hashpassword
        });
        await createdUser.save();
       return res.status(201).json({
            message: "User registered successfully",
            user: {
              id: createdUser._id,
              name: createdUser.name,
              email: createdUser.email
            }
          });
    } catch (error) {
        res.status(500).json(error);
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModal.findOne({ email });
        const checkpass = await bcryptjs.compare(password, user.password);
        if (!user || !checkpass) {
            return res.status(400).json({ message: "invalid User" });
        }
        else {
            res.status(201).json({
                message: "Successfully Login", user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            });

        }

    } catch (error) {
        res.status(500).json(error);

    }
}

module.exports = { signup, login };
