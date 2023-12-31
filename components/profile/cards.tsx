import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
import Card from "../ui/card";

export function ProfileCard({ user }: { user: User }) {
	return (
		<div className="flex items-center mb-4 gap-2">
			<Image
				src={user?.image!}
				height={50}
				width={50}
				alt={"image"}
				className="rounded-full"
			/>

			<div>
				<p className="font-medium">{user?.name}</p>
				<p className="text-sm text-slate-500">
					<span className="mr-[2px]">@</span>
					{user?.username}
				</p>
			</div>
		</div>
	);
}

export function UserCard({ user }: { user: User }) {
	return (
		<Link href={"/" + user.username}>
			<Card className="px-4 py-2 border-slate-300 hover:bg-slate-100 transition-colors">
				<div className="flex items-center gap-2">
					<Image
						src={user?.image!}
						height={50}
						width={50}
						alt={"image"}
						className="rounded-full"
					/>

					<div>
						<p className="font-medium">{user?.name}</p>
						<p className="text-sm text-slate-500">
							<span className="mr-[2px]">@</span>
							{user?.username}
						</p>
					</div>
				</div>
			</Card>
		</Link>
	);
}
