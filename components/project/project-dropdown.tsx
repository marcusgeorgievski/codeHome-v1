"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function ProjectDropwdown({ self }: { self: boolean }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<AiFillHeart />
		</>
	);
}

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

function A() {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="border border-slate-400 rounded-full flex items-center justify-center text-sm p-1 hover:bg-slate-200 transition-all">
						<FiChevronDown className="text" />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Like</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
