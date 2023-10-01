import jsonwebtoken from "jsonwebtoken";

const secret = process.env.JWT_SECRET!;

export const jwt = {
  decode: (token: string) => {
    try {
      const payload = token.split(".")[1];

      return JSON.parse(atob(payload));
    } catch (error) {
      return null;
    }
  },
  sign: (userId: string) => {
    return jsonwebtoken.sign({ id: userId }, secret, {
      algorithm: "HS256",
      expiresIn: "30d",
    });
  },
  verify: (token: string) => {
    try {
      return jsonwebtoken.verify(token, secret);
    } catch (error) {
      return null;
    }
  },
};
