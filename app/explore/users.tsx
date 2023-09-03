"use client";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
import { Suspense } from "react";
import { ProfileCardSkeleton } from "@/components/ui/skeletons";
import { UserCard } from "@/components/ui/user-cards";

export const dynamic = "force-dynamic";

export default function Users({ users }: { users: User[] }) {
	if (users.length === 0)
		return (
			<div className="pt-8 font-semibold text-slate-600/70">
				No users exist yet, join to be the first!
			</div>
		);

	return (
		<div className="grid grid-cols-1 sm:gap-4 gap-2 sm:grid-cols-2 lg:grid-cols-3">
			{users.map((user: User, index: number) => (
				<div key={index}>
					<UserCard user={user} />
				</div>
			))}
		</div>
	);
}
