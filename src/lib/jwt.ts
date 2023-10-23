import { UserInfo, userInfoSchema } from "@/features/auth";
import jsonwebtoken from "jsonwebtoken";
import { z } from "zod";

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
  sign: (user: UserInfo) => {
    return jsonwebtoken.sign({ user }, secret, {
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

export const jwtSchema = z.object({
  user: userInfoSchema,
  iat: z.number(),
  exp: z.number(),
});

export type Jwt = z.infer<typeof jwtSchema>;
