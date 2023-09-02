"use client";
import Link from "next/link";
import { useState } from "react";

// Tabs
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/shadcn/tabs";

// Dropdown menu
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

/** Components
 *
 *      ProfileTabs
 *      TabBar
 *      TabDropdown
 *      Icon
 */

export default function ProfileTabs({ self = true }: { self?: boolean }) {
	const [tab, setTab] = useState("profile");
	return (
		<>
			<div className="hidden sm:block">
				<TabBar tab={tab} setTab={setTab} />
			</div>
			<div className="pt-4 sm:hidden">
				<TabDropdown tab={tab} setTab={setTab} />
			</div>
		</>
	);
}

export function TabBar({ tab, setTab }: { tab: string; setTab: any }) {
	return (
		<Tabs defaultValue="profile" className="">
			{/* Tabs */}
			<TabsList>
				<TabsTrigger
					value="profile"
					asChild
					onClick={() => setTab("profile")}
				>
					<Link href={"/dashboard"} className="flex w-full gap-2">
						<HiOutlineUser className="mr-1" />
						Profile
					</Link>
				</TabsTrigger>
				<TabsTrigger
					value="projects"
					asChild
					onClick={() => setTab("projects")}
				>
					<Link
						href={"/dashboard/projects"}
						className="flex w-full gap-2"
					>
						<BsCode className="mr-1" />
						Projects
					</Link>
				</TabsTrigger>
				<TabsTrigger
					value="activity"
					asChild
					onClick={() => setTab("activity")}
				>
					<Link
						href={"/dashboard/activity"}
						className="flex w-full gap-2"
					>
						<CgFeed className="mr-1" />
						Activity
					</Link>
				</TabsTrigger>
				<TabsTrigger
					value="social"
					asChild
					onClick={() => setTab("social")}
				>
					<Link
						href={"/dashboard/social"}
						className="flex w-full gap-2"
					>
						<PiUsers className="mr-1" />
						Social
					</Link>
				</TabsTrigger>

				<TabsTrigger
					value="saved"
					asChild
					onClick={() => setTab("saved")}
				>
					<Link
						href={"/dashboard/saved"}
						className="flex w-full gap-2"
					>
						<IoMdHeartEmpty className="mr-1" />
						Saved
					</Link>
				</TabsTrigger>

				<TabsTrigger
					value="settings"
					asChild
					onClick={() => setTab("settings")}
				>
					<Link
						href={"/dashboard/settings"}
						className="flex w-full gap-2"
					>
						<HiOutlineCog className="mr-1" />
						Settings
					</Link>
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}

export function TabDropdown({ tab, setTab }: { tab: string; setTab: any }) {
	function capitalize(text: string): string {
		return text[0].toUpperCase() + text.slice(1);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center px-2 py-1 font-medium border rounded-md bg-slate-100 text-slate-500">
					<Icon tab={tab} />
					{capitalize(tab)}{" "}
					<GoChevronDown className=" ml-6 translate-y-[1px]" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem asChild onClick={() => setTab("profile")}>
					<Link href={"/dashboard"} className="flex w-full gap-2">
						<HiOutlineUser className="mr-1" />
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild onClick={() => setTab("projects")}>
					<Link
						href={"/dashboard/projects"}
						className="flex w-full gap-2"
					>
						<BsCode className="mr-1" />
						Projects
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild onClick={() => setTab("activity")}>
					<Link
						href={"/dashboard/activity"}
						className="flex w-full gap-2"
					>
						<CgFeed className="mr-1" />
						Activity
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild onClick={() => setTab("social")}>
					<Link
						href={"/dashboard/social"}
						className="flex w-full gap-2"
					>
						<PiUsers className="mr-1" />
						Social
					</Link>
				</DropdownMenuItem>

				<DropdownMenuItem asChild onClick={() => setTab("saved")}>
					<Link
						href={"/dashboard/saved"}
						className="flex w-full gap-2"
					>
						<IoMdHeartEmpty className="mr-1" />
						Saved
					</Link>
				</DropdownMenuItem>

				<DropdownMenuItem asChild onClick={() => setTab("settings")}>
					<Link
						href={"/dashboard/settings"}
						className="flex w-full gap-2"
					>
						<HiOutlineCog className="mr-1" />
						Settings
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function Icon({ tab }: { tab: string }) {
	switch (tab) {
		case "profile":
			return <HiOutlineUser className="mr-1" />;
		case "projects":
			return <BsCode className="mr-1" />;
		case "activity":
			return <CgFeed className="mr-1" />;
		case "social":
			return <PiUsers className="mr-1" />;
		case "saved":
			return <IoMdHeartEmpty className="mr-1" />;
		case "settings":
			return <HiOutlineCog className="mr-1" />;
		default:
			break;
	}
}

import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";
import { BsCode } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
