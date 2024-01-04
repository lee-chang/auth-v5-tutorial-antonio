import { db } from "@/lib/db";

export const getuserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getuserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const createUser = async (email: string, password: string, name: string) => {
  try {
    const user = await db.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}