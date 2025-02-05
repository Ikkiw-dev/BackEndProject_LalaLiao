import {user} from "../models/userModels";

export const userController = {
  getUser: async (req, res) => {
    const { id } = req.params;
    const user = await User.getById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  },

  createUser: async (req, res) => {
    const { name, email, role } = req.body;
    const userId = await User.create(name, email, role);
    res.status(201).json({ userId, message: "User created" });
  }
};