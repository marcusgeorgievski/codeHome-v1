"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Loading from "../ui/loading";
import UserDropdown from "../ui/user-dropdown";
import { User } from "@/lib/types";

export function SignInButton() {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <Loading />;
	}

	if (status === "authenticated") {
		return <UserDropdown user={session.user as User} />;
	}

	return (
		<button
			onClick={() => signIn()}
			className="w-full font-semibold text-slate-700"
		>
			Sign in
		</button>
	);
}

export function SignOutButton() {
	return <button onClick={() => signOut()}>Sign Out</button>;
}
