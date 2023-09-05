import { Skeleton } from "@/components/ui/shadcn/skeleton";
import Card from "../ui/card";

export function ProfileCardSkeleton({ card = false }: { card?: boolean }) {
	return (
		<div
			className={`flex items-center mb-4 gap-2 ${
				card && "border border-slate-200 px-4 py-2 shadow-sm rounded"
			}`}
		>
			<Skeleton className="w-[50px] h-[50px] rounded-full" />

			<div className="flex flex-col gap-2">
				<Skeleton className="w-[220px] h-[18px] rounded-full" />

				<Skeleton className="w-[180px] h-[16px] rounded-full" />
			</div>
		</div>
	);
}
