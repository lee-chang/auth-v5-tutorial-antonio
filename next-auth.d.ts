import NextAuth, { type DefaultSession } from "next-auth";

type Role = "USER" | "ADMIN";

export type ExtendedUser = DefaultSession["user"] & {
  role: "USER" | "ADMIN";
};

declare module "@auth/core/types" {
  interface Session {
    user: ExtendedUser
  }
}