"use client";

import { useSession } from "next-auth/react";
import { SignInButton } from "./AuthButtons";
import Loading from "../ui/loading";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
	const { data: session, status } = useSession();

	if (status === "authenticated") {
		return <>{children}</>;
	} else if (status === "loading") {
		return (
			<div>
				<Loading />
			</div>
		);
	} else {
		return (
			<div className="flex flex-col items-center justify-center py-8 gap-4">
				<p className="font-mono text-sm text-slate-600">
					Sign in to see this content
				</p>
				<div className="inline-block px-2 py-1 border rounded border-slate-300">
					<SignInButton />
				</div>
			</div>
		);
	}
}
