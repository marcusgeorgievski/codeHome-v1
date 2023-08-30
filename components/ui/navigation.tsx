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
								? "text-blue-800"
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
								? "text-blue-800"
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
