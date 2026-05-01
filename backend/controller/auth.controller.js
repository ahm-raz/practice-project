import User from "../models/user.js";


export const register = async (req,res)=> {
    try {

        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            return res.json({ message: "All fields are required" });
        }

        const ifEmailExists = await User.findOne({email});

        if (ifEmailExists) {
            return res.json({
                message: "Email already exists",
            });
        }

        const newUser = new User({
            name,
            email,
            password,
        });

        await newUser.save();

        return res.json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const login = async (req,res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        return res.status(200).json({
            message: "Login successful"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};