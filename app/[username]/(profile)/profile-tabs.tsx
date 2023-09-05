"use client";
import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
interface Tab {
	text: string;
	icon: React.ReactNode;
	route: string;
	selfOnly: boolean; // Show if self page
}

const tabs: Tab[] = [
	{
		text: "Profile",
		icon: <HiOutlineUser className="mr-1" />,
		route: "",
		selfOnly: false,
	},
	{
		text: "Projects",
		icon: <BsCode className="mr-1" />,
		route: "/projects",
		selfOnly: false,
	},
	{
		text: "Activity",
		icon: <CgFeed className="mr-1" />,
		route: "/activity",
		selfOnly: false,
	},
	{
		text: "Social",
		icon: <PiUsers className="mr-1" />,
		route: "/social",
		selfOnly: false,
	},
	{
		text: "Likes",
		icon: <IoMdHeartEmpty className="mr-1" />,
		route: "/likes",
		selfOnly: false,
	},
	{
		text: "Settings",
		icon: <HiOutlineCog className="mr-1" />,
		route: "/settings",
		selfOnly: true,
	},
];

export default function ProfileTabs({ self = true }: { self?: boolean }) {
	return (
		<TabProvider self={self}>
			<div className="hidden sm:block">
				<TabBar />
			</div>
			<div className="pt-4 sm:hidden">
				<TabDropdown />
			</div>
		</TabProvider>
	);
}

export function TabBar() {
	const { username, currentTab, setTab, self } = useContext(TabContext);

	return (
		<>
			<div
				defaultValue={currentTab}
				className="inline-block px-1 py-1 rounded-md bg-slate-100"
			>
				{/* Tabs */}
				<nav>
					{tabs
						.filter(
							(tab) =>
								tab.selfOnly === self || tab.selfOnly === false
						)
						.map((tab) => {
							return (
								<button
									key={tab.route}
									value={tab.text.toLowerCase()}
									onClick={() =>
										setTab(tab.text.toLowerCase())
									}
									className=""
								>
									<Link
										href={`/${username}${tab.route}`}
										className={`flex items-center w-full gap-2 px-3 py-[6px] text-sm font-medium rounded ${
											currentTab ===
											tab.text.toLowerCase()
												? "text-black bg-white shadow-sm"
												: "text-slate-500"
										}`}
									>
										{tab.icon}
										{tab.text}
									</Link>
								</button>
							);
						})}
				</nav>
			</div>
		</>
	);
}

export function TabDropdown() {
	const { username, currentTab, setTab, self } = useContext(TabContext);

	function capitalize(text: string): string {
		if (text == null) return "";
		return text[0].toUpperCase() + text.slice(1);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center px-2 py-1 font-medium border rounded-md bg-slate-100 text-slate-500">
					<span className="flex items-center gap-1">
						<Icon currentTab={currentTab} />
						{capitalize(currentTab)}
					</span>
					<GoChevronDown className=" ml-6 translate-y-[1px]" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{tabs
					.filter(
						(tab) => tab.selfOnly === self || tab.selfOnly === false
					)
					.map((tab) => {
						return (
							<DropdownMenuItem
								key={tab.route}
								asChild
								onClick={() => setTab(tab.text.toLowerCase())}
							>
								<Link
									href={`/${username}${tab.route}`}
									className="flex w-full gap-2"
								>
									{tab.icon}
									{tab.text}
								</Link>
							</DropdownMenuItem>
						);
					})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function Icon({ currentTab }: { currentTab: string }) {
	switch (currentTab) {
		case "profile":
			return <HiOutlineUser className="mr-1" />;
		case "projects":
			return <BsCode className="mr-1" />;
		case "activity":
			return <CgFeed className="mr-1" />;
		case "social":
			return <PiUsers className="mr-1" />;
		case "likes":
			return <IoMdHeartEmpty className="mr-1" />;
		case "settings":
			return <HiOutlineCog className="mr-1" />;
		default:
			break;
	}
}

const TabContext = createContext<any>(null);

export function TabProvider({
	self = false,
	children,
}: {
	self?: boolean;
	children: React.ReactNode;
}) {
	const [username, setUsername] = useState("");
	const [currentTab, setTab] = useState("profile");

	// usePathname() will return current page username
	const pathname = usePathname();

	// Set username of the current profile we are using
	useEffect(() => {
		// matches from first / to second /, or to end if second / DNE
		const usrname = pathname.match(/\/([^\/]*)/);
		setUsername(usrname![1]);
	}, [pathname]);

	// Set current tab every route change
	useEffect(() => {
		// matches from second / to third /, or to end if third / DNE
		const route = pathname.match(/\/[^\/]*\/([^\/]*)/);

		// If second route DNE, set to profile
		// Else as second route
		if (!route) setTab("profile");
		else setTab(route[1]);
	}, [pathname]);

	return (
		<TabContext.Provider value={{ username, currentTab, setTab, self }}>
			{children}
		</TabContext.Provider>
	);
}

import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";
import { BsCode } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
