"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Loading from "../ui/loading";

export function SignInButton() {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <Loading />;
	}

	if (status === "authenticated") {
		return (
			<div className="flex items-center gap-2 ">
				<Image
					src={session.user?.image ?? "fake"}
					width={28}
					height={28}
					alt="alt text"
					className="rounded-full"
				/>
				<p className="text-xs text-slate-700 ">{session.user?.name}</p>
			</div>
		);
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
