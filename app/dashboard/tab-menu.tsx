"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";
import { BsCode } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import Settings from "./pages/settings";

export default function DashboardTabs() {
	const [tab, setTab] = useState("profile");

	return (
		<>
			<div className="mb-8">
				<span className="hidden sm:block">
					<TabBar tab={tab} setTab={setTab} />
				</span>
				<span className="sm:hidden">
					<TabDropdown tab={tab} setTab={setTab} />
				</span>
			</div>

			<div>
				<Page tab={tab} />
			</div>
		</>
	);
}

function Page({ tab }: { tab: string }) {
	switch (tab) {
		case "settings":
			return <Settings />;

		default:
			<h1>hi</h1>;
	}
}

function TabBar({ tab, setTab }: { tab: string; setTab: any }) {
	return (
		<Tabs defaultValue="projects" className="">
			{/* Tabs */}
			<TabsList>
				<TabsTrigger
					value="profile"
					asChild
					onClick={() => setTab("profile")}
				>
					<button className="flex w-full gap-2">
						<HiOutlineUser className="mr-1" />
						Profile
					</button>
				</TabsTrigger>
				<TabsTrigger
					value="projects"
					asChild
					onClick={() => setTab("projects")}
				>
					<button className="flex w-full gap-2">
						<BsCode className="mr-1" />
						Projects
					</button>
				</TabsTrigger>
				<TabsTrigger
					value="activity"
					asChild
					onClick={() => setTab("activity")}
				>
					<button className="flex w-full gap-2">
						<CgFeed className="mr-1" />
						Activity
					</button>
				</TabsTrigger>
				<TabsTrigger
					value="social"
					asChild
					onClick={() => setTab("social")}
				>
					<button className="flex w-full gap-2">
						<PiUsers className="mr-1" />
						Social
					</button>
				</TabsTrigger>

				<TabsTrigger
					value="saved"
					asChild
					onClick={() => setTab("saved")}
				>
					<button className="flex w-full gap-2">
						<IoMdHeartEmpty className="mr-1" />
						Saved
					</button>
				</TabsTrigger>

				<TabsTrigger
					value="settings"
					asChild
					onClick={() => setTab("settings")}
				>
					<button className="flex w-full gap-2">
						<HiOutlineCog className="mr-1" />
						Settings
					</button>
				</TabsTrigger>
			</TabsList>

			{/* Content */}
			{/* <TabsContent value="account">
				Make changes to your account here.
			</TabsContent>
			<TabsContent value="password">
				Change your password here.
			</TabsContent>
			<TabsContent value="settings">
				<Settings />
			</TabsContent> */}
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
					<button className="flex w-full gap-2">
						<HiOutlineUser className="mr-1" />
						Profile
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem asChild onClick={() => setTab("projects")}>
					<button className="flex w-full gap-2">
						<BsCode className="mr-1" />
						Projects
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem asChild onClick={() => setTab("activity")}>
					<button className="flex w-full gap-2">
						<CgFeed className="mr-1" />
						Activity
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem asChild onClick={() => setTab("social")}>
					<button className="flex w-full gap-2">
						<PiUsers className="mr-1" />
						Social
					</button>
				</DropdownMenuItem>

				<DropdownMenuItem asChild onClick={() => setTab("saved")}>
					<button className="flex w-full gap-2">
						<IoMdHeartEmpty className="mr-1" />
						Saved
					</button>
				</DropdownMenuItem>

				<DropdownMenuItem asChild onClick={() => setTab("settings")}>
					<button className="flex w-full gap-2">
						<HiOutlineCog className="mr-1" />
						Settings
					</button>
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
