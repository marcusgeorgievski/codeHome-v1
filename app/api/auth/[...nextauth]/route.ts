import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const authOptions: NextAuthOptions = {
	// @ts-ignore: Unreachable code error
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async session({ session, token }) {
			// Send properties to the client, like an access_token and user id from a provider.

			if (!session || !session.user) return session;

			// Fetch user from db
			const dbUser = await prisma.user.findUnique({
				where: { email: session.user?.email! },
			});

			// Add username + id from db to client session
			if (dbUser) {
				session.user.username = dbUser?.username;
				session.user.id = dbUser?.id;
			}

			return session;
		},
		async signIn({ user }) {
			// Do something on signin
			// Maybe create some table/data on sign in (for first sign in)

			return true;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
