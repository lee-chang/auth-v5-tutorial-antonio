import NextAuth, { type DefaultSession } from "next-auth";

type Role = "USER" | "ADMIN";

export type ExtendedUser = DefaultSession["user"] & {
  role: "USER" | "ADMIN";
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}