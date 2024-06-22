import { Role } from "@prisma/client";

export const rolePermissions: Record<Role, readonly Role[]> = {
  [Role.USER]: [Role.USER, Role.CREW, Role.MENTOR_CREW, Role.TUTOR_CREW, Role.ADMIN],
  [Role.MENTOR_CREW]: [Role.TUTOR_CREW, Role.CREW, Role.MENTOR_CREW, Role.ADMIN],
  [Role.CREW]: [Role.CREW, Role.TUTOR_CREW, Role.ADMIN],
  [Role.TUTOR_CREW]: [Role.TUTOR_CREW, Role.ADMIN],
  [Role.ADMIN]: [Role.ADMIN],
} as const;

export const canAccess = (requiredRole: Role, userRole: Role) => {
  return rolePermissions[requiredRole].includes(userRole);
};

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
