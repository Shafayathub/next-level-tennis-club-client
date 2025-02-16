export { default } from "next-auth/middleware"

export const config = { matcher: [
    "/members(/.*)?", // Matches /members, /members/add, /members/update, /members/delete
    "/profile",
  ], }