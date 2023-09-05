import { Skeleton } from "@/components/ui/shadcn/skeleton";
import Card from "../ui/card";

export function ProjectCardSkeleton() {
	return (
		<Card className="p-3 transition-all shadow bg-slate-50/50 border-slate-200/50  h-[130px] mb-2 w-[440px]">
			<h3 className="text-xl font-bold text-slate-800 mb-2 flex justify-between items-center">
				<Skeleton className="w-[150px] h-6" />
			</h3>
			{/* Tags here */}
			<div className="inline-flex mb-2 gap-1">
				<Skeleton className="w-16 h-5" />
				<Skeleton className="w-10 h-5" />
				<Skeleton className="w-12 h-5" />
			</div>

			<Skeleton className="w-full h-[calc(130px-84px)]" />
		</Card>
	);
}
