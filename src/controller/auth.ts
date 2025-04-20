import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../schema/User";

const SALT_ROUND = 12;

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const salt = bcrypt.genSaltSync(SALT_ROUND);

  const hash = bcrypt.hashSync(password, salt);

  const user = await User.create({ ...req.body, password: hash });

  res.json({ success: true, user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res
      .status(404)
      .json({ success: false, error: "username or password not found" });
    return;
  }

  const isCompare = bcrypt.compareSync(password, user.password);

  if (!isCompare) {
    res
      .status(401)
      .json({ success: false, error: "username or password is wrong" });
  }

  res.status(200).json({ success: true, user });
};
