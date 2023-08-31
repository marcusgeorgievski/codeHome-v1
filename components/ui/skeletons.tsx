import { Skeleton } from "@/components/ui/skeleton";

export function UserSkeleton() {
	return (
		<div className="flex items-center gap-2 mb-4">
			<Skeleton className="w-[50px] h-[50px] rounded-full" />

			<div className="flex flex-col gap-2">
				<Skeleton className="w-[220px] h-[18px] rounded-full" />

				<Skeleton className="w-[180px] h-[16px] rounded-full" />
			</div>
		</div>
	);
}

export function ProjectSkeleton() {
	return (
		<div className="flex items-center gap-2 mb-4">
			<Skeleton className="w-[50px] h-[50px] rounded-full" />

			<div className="flex flex-col gap-2">
				<Skeleton className="w-[250px] h-[18px] rounded-full" />

				<Skeleton className="w-[180px] h-[16px] rounded-full" />
			</div>
		</div>
	);
}
