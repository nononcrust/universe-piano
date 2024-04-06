import { JwtPayload, SocialData, jwtPayloadSchema, socialDataSchema } from "@/services/auth";
import * as jose from "jose";
import { z } from "zod";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export const jwt = {
  signUser: (user: JwtPayload) => {
    return new jose.SignJWT({ user })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(secret);
  },
  signRegisterToken: (socialData: SocialData) => {
    return new jose.SignJWT({ socialData })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secret);
  },
  verify: (token: string) => {
    try {
      return jose.jwtVerify(token, secret);
    } catch (error) {
      return null;
    }
  },
};

export const registerTokenSchema = z.object({
  socialData: socialDataSchema,
  iat: z.number(),
  exp: z.number(),
});

export const accessTokenSchema = z.object({
  user: jwtPayloadSchema,
  iat: z.number(),
  exp: z.number(),
});

export type Jwt = z.infer<typeof accessTokenSchema>;
