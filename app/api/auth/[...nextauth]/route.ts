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
		async session({ session, user }) {
			// Send properties to the client, like an access_token and user id from a provider.

			if (!session || !session.user) return session;

			const userData = await prisma.user.findUnique({
				where: { email: session.user?.email! },
			});

			session.user.username = userData?.username;

			console.log(session);

			return session;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
