"use client";

export default function Loading({ text }: { text?: string }) {
	return (
		<div className="flex items-center justify-center mx-auto gap-2">
			<span
				className="inline-block h-4 w-4 animate-spin  border-2 rounded-full border-slate-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
				role="status"
			/>
			<span className="font-sans text-xs text-slate-600">
				{text || "Loading..."}
			</span>
		</div>
	);
}
