import { Suspense } from "react";
import Image from "next/image";
import { UserSkeleton } from "./skeletons";
import { User } from "@/lib/types";

export async function UserCard({ user }: { user: User }) {
	return (
		<>
			<Suspense fallback={<UserSkeleton />}>
				<div className="flex items-center gap-2 mb-4">
					<Image
						src={user?.image!}
						height={50}
						width={50}
						alt={"image"}
						className="rounded-full"
					/>

					<div>
						<p>{user?.name}</p>
						<p className="text-sm text-slate-500">{user?.email}</p>
					</div>
				</div>
			</Suspense>
		</>
	);
}
