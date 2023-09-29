export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  ABOUT: "/about",
};

export type Route = (typeof ROUTE)[keyof typeof ROUTE];
