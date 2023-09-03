"use client";
import Card from "@/components/ui/card";
import Link from "next/link";
import { TbFaceIdError } from "react-icons/tb";
import { SiHomeadvisor } from "react-icons/si";
export default function ProfileError() {
	return (
		<div className="inline-flex items-center w-full flex-col gap-8 pt-16">
			<h2 className="font-bold text-3xl flex gap-3 items-center justify-center">
				<TbFaceIdError /> Page not found!
			</h2>

			<Link
				href={"/"}
				className="flex items-center gap-2 shadow border border-slate-100 hover:bg-slate-100 bg-white p-2 py-1 text-sm font-medium rounded"
			>
				<SiHomeadvisor className="mr-1 text-lg" />
				Go back home
			</Link>
		</div>
	);
}
