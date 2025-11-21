import { createAuth } from 'better-auth';
import { prisma } from '@/lib/db';
import { compare, hash } from 'bcryptjs';

// Basic Better Auth configuration using Prisma as user store.
// This is a simplified example; you can extend with sessions, providers, etc.

export const auth = createAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },
  async createUser(data: { name?: string | null; email: string; password: string }) {
    const passwordHash = await hash(data.password, 10);
    return prisma.user.create({
      data: {
        name: data.name ?? null,
        email: data.email,
        password: passwordHash
      }
    });
  },
  async verifyPassword(user: { password: string }, password: string) {
    return compare(password, user.password);
  }
});

export async function signUp(name: string | null, email: string, password: string) {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new Error('User already exists');
  }
  return auth.createUser({ name, email, password });
}

export async function signIn(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');
  const valid = await compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');
  // In a real Better Auth setup, you would create a session / JWT here.
  return user;
}

export async function signOut() {
  // Placeholder - session handling depends on how you integrate Better Auth with Next.js.
  return true;
}

export async function getCurrentUser() {
  // For now, this is a stub. You would normally read from cookies/headers.
  return null;
}

export function protectRoute() {
  // Middleware stub - to be integrated with Next.js middleware or route handlers.
  // You can expand this to check auth headers/cookies and throw if unauthorized.
}
