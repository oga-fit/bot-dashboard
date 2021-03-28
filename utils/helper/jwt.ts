import jwt from "next-auth/jwt";

const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const token = await jwt.getToken({ req, secret });
  res.end();
};
