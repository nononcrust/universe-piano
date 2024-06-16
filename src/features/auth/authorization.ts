import { Role } from "@prisma/client";

export const getAuthorization = (role?: Role) => {
  const isUser = role && (role === Role.USER || role === Role.CREW || role === Role.ADMIN);

  const isCrew =
    role &&
    (role === Role.CREW ||
      role === Role.MENTOR_CREW ||
      role === Role.TUTOR_CREW ||
      role === Role.ADMIN);

  const isAdmin = role && role === Role.ADMIN;

  return {
    isUser,
    isCrew,
    isAdmin,
  };
};
