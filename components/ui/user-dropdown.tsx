"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";
import { LiaUserFriendsSolid, LiaBrainSolid } from "react-icons/lia";
import { CgFeed } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";
import { SiHomeadvisor } from "react-icons/si";
import { PiSignOutLight } from "react-icons/pi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { signOut } from "next-auth/react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/lib/types";
import CodeHome from "./codehome";

export default function UserDropdown({ user }: { user: User }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center gap-2 px-2 py-1 transition-colors border rounded shadow-sm outline-none border-slate-200 hover:outline-none hover:bg-slate-100">
					<Image
						src={user.image ?? "fake"}
						width={28}
						height={28}
						alt="alt text"
						className="rounded-full"
						priority
					/>
					<p className="text-xs text-slate-700 ">{user.name}</p>
					<div className="flex flex-col items-center justify-center text-[10px] -translate-y-[1px] font-bold">
						<HiChevronUp className="translate-y-[3px]" />
						<HiChevronDown />
					</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<div className="w-[140px] ">
					<DropdownMenuLabel>
						<span className="text-blue-800">My Account</span>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href={"/dashboard"} className="flex w-full">
							<HiOutlineUser className="mr-1 text-lg" />
							Dashboard
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href={"/activity"} className="flex w-full">
							<CgFeed className="mr-1 text-lg" />
							Activity
						</Link>
					</DropdownMenuItem>
					{/* <DropdownMenuItem>
						<Link href={"/friends"} className="flex w-full">
							<LiaUserFriendsSolid className="mr-1 text-lg" />
							Friends
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href={"/settings"} className="flex w-full">
							<HiOutlineCog className="mr-1 text-lg" />
							Settings
						</Link>
					</DropdownMenuItem> */}
					<DropdownMenuItem>
						<button
							onClick={() => signOut()}
							className="flex w-full text-slate-500"
						>
							<PiSignOutLight className="mr-1 text-lg " />
							Sign Out
						</button>
					</DropdownMenuItem>

					<div className="sm:hidden">
						<DropdownMenuSeparator />
						<DropdownMenuLabel>
							<CodeHome className="font-bold" icon={false} />
						</DropdownMenuLabel>
						<DropdownMenuSeparator />

						<DropdownMenuItem>
							<Link href={"/"} className="flex w-full">
								<SiHomeadvisor className="mr-1 text-lg" />
								Home
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href={"/explore"} className="flex w-full">
								<BsCodeSlash className="mr-1 text-lg" />
								Explore
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href={"/about"} className="flex w-full">
								<LiaBrainSolid className="mr-1 text-lg" />
								About
							</Link>
						</DropdownMenuItem>
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
