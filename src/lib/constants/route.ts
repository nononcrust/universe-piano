export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
};

export type Route = (typeof ROUTE)[keyof typeof ROUTE];
