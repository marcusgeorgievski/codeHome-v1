"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export function Routes() {
	// Array of segments
	const segments = useSelectedLayoutSegments().filter(
		// Filter to ignore nested latouts
		(s) => !s.startsWith("(")
	);

	// Checks if given text is current route
	function inRoute(route: string): boolean {
		if (segments.length === 0) return route === "home"; // segments[] is empty in '/' route
		return route === segments[0];
	}

	const linkStyles = "font-medium hover:text-blue-800 transition-colors";

	return (
		<nav className="translate-y-[2px] hidden sm:block">
			<ul className="flex gap-6">
				<li>
					<Link
						href={"/"}
						className={`${linkStyles} ${
							inRoute("home") ? "text-blue-800" : "text-slate-700"
						}`}
					>
						Home
					</Link>
				</li>

				<li>
					<Link
						href={"/explore"}
						className={`${linkStyles} ${
							inRoute("explore")
								? "text-blue-700"
								: "text-slate-700"
						}`}
					>
						Explore
					</Link>
				</li>

				<li>
					<Link
						href={"/about"}
						className={`${linkStyles} ${
							inRoute("about")
								? "text-blue-700"
								: "text-slate-700"
						}`}
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}

import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { PiPlantThin, PiLightbulbThin } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

export function Dropdown() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	const element = useRef<HTMLUListElement | null>(null);

	function handleClickOutside(e: any) {
		if (!element.current!.contains(e.target)) setOpen(false);
	}

	return (
		<div className="relative translate-y-[2px]">
			<button onClick={() => setOpen(!open)}>
				{!open ? <AiOutlineMenu /> : <BiMenuAltRight />}
			</button>
			<ul
				ref={element}
				className={`text-sm font-bold  text-slate-800 absolute right-0
                flex-col bg-white border border-slate-300 rounded translate-y-2 overflow-hidden

            ${open ? "flex" : "hidden"}`}
			>
				<li>
					<Link
						href={"/users"}
						className="flex items-center gap-1 px-6 py-2 hover:bg-slate-100"
						onClick={() => setOpen(false)}
					>
						{" "}
						<CiSearch />
						Users
					</Link>
				</li>
				<li>
					<Link
						href={"/about"}
						className="flex items-center gap-1 px-6 py-2 hover:bg-slate-100"
						onClick={() => setOpen(false)}
					>
						<PiPlantThin />
						About
					</Link>
				</li>
				<li>
					<Link
						href={"/updates"}
						className="flex items-center gap-1 px-6 py-2 whitespace-nowrap hover:bg-slate-100"
						onClick={() => setOpen(false)}
					>
						<PiLightbulbThin />
						What&apos;s New
					</Link>
				</li>
			</ul>
		</div>
	);
}
