"use client";
import Card from "@/components/ui/card";
import Link from "next/link";
import { TbFaceIdError } from "react-icons/tb";
import { SiHomeadvisor } from "react-icons/si";
export default function ProfileError() {
	return (
		<div className="inline-flex flex-col items-center w-full gap-8 pt-16">
			<h2 className="flex items-center justify-center gap-3 text-3xl font-bold">
				<TbFaceIdError /> Error!
			</h2>

			<Link
				href={"/"}
				className="flex items-center gap-2 p-2 py-1 text-sm font-medium bg-white border rounded shadow border-slate-100 hover:bg-slate-100"
			>
				<SiHomeadvisor className="mr-1 text-lg" />
				Go back home
			</Link>
		</div>
	);
}
