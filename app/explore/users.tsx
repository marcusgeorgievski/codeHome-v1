"use client";
import Link from "next/link";
import Image from "next/image";
import { User } from "@/lib/types";

export default function Users({ users }: { users: User[] }) {
	return (
		<div className="grid grid-cols-3">
			{users.map((user: User, index: number) => (
				<div key={index}>
					<UserCard user={user} />
				</div>
			))}
		</div>
	);
}

function UserCard({ user }: { user: User }) {
	return (
		<Link
			href={"/users" + user.id}
			className="flex gap-2 flex-col px-2 py-1 border rounded shadow outline-none border-slate-100 hover:outline-none hover:scale-[1.01] transition-all"
		>
			<div className="flex items-center gap-2">
				<Image
					src={user.image ?? "fake"}
					width={28}
					height={28}
					alt="alt text"
					className="rounded-full"
				/>
				<p className=" text-slate-800">{user.name}</p>
			</div>

			{/* Hidden right now */}
			<div className="hidden pl-8 text-sm text-slate-600">
				<p>Projects: 3</p>
				<p>Likes: 3</p>
			</div>
		</Link>
	);
}
