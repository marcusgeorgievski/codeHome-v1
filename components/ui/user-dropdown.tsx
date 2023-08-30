"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";
import { LiaUserFriendsSolid, LiaBrainSolid } from "react-icons/lia";
import { CgFeed } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";
import { SiHomeadvisor } from "react-icons/si";
import { PiSignOutLight } from "react-icons/pi";
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

export default function UserDropdown({ user }: { user: User }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center gap-2 px-2 py-1 border rounded outline-none border-slate-300 hover:outline-none">
					<Image
						src={user.image ?? "fake"}
						width={28}
						height={28}
						alt="alt text"
						className="rounded-full"
					/>
					<p className="text-xs text-slate-700 ">{user.name}</p>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<div className="w-[140px] ">
					<DropdownMenuLabel>
						<span className="text-blue-800">My Account</span>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<HiOutlineUser className="mr-1 text-lg" />
						<Link href={"/dashboard"}>Dashboard</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CgFeed className="mr-1 text-lg" />
						<Link href={"/dashboard"}>Activity</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<LiaUserFriendsSolid className="mr-1 text-lg" />
						<Link href={"/dashboard"}>Friends</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<HiOutlineCog className="mr-1 text-lg" />
						<Link href={"/settings"}>Settings</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<PiSignOutLight className="mr-1 text-lg" />
						<button onClick={() => signOut()}>Sign Out</button>
					</DropdownMenuItem>

					<div className="sm:hidden">
						<DropdownMenuSeparator />
						<DropdownMenuLabel>
							<div className="font-bold ">
								<span className="text-blue-800">code</span>
								<span>Home</span>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />

						<DropdownMenuItem>
							<SiHomeadvisor className="mr-1 text-lg" />
							<Link href={"/settings"}>Home</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<BsCodeSlash className="mr-1 text-lg" />
							<Link href={"/settings"}>Explore</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LiaBrainSolid className="mr-1 text-lg" />
							<Link href={"/settings"}>About</Link>
						</DropdownMenuItem>
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
