import FeaturedProjects from "./featured-projects";
import RecentUsers from "./recent-users";
import { ProfileCardSkeleton } from "@/components/profile/skeletons";
import { ProjectCardSkeleton } from "@/components/project/skeletons";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "codeHome - Explore",
	description: "codeHome explore page",
};

export default async function Explore() {
	return (
		<div className="flex flex-col gap-12">
			{/* Featured Posts */}
			<section>
				<div className="flex items-center mb-4 gap-2">
					<PiCubeFocusLight className="text-4xl" />
					<h2 className="text-2xl font-bold ">Featured Projects</h2>
				</div>
				<Suspense fallback={<ProjectsSuspense />}>
					<FeaturedProjects />
				</Suspense>
			</section>

			{/* Recent users Posts */}
			<section>
				<div className="flex items-center mb-4 gap-2">
					<TbUserSearch className="text-3xl" />
					<h2 className="text-2xl font-bold ">Recent Users</h2>
				</div>
				<Suspense fallback={<ProfilesSuspense />}>
					<RecentUsers />
				</Suspense>
			</section>
		</div>
	);
}

function ProjectsSuspense() {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
			{Array.apply(0, Array(3)).map(function (x, i) {
				return (
					<div key={i}>
						<ProjectCardSkeleton />
					</div>
				);
			})}
		</div>
	);
}

function ProfilesSuspense({ card = false }: { card?: boolean }) {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
			{Array.apply(0, Array(3)).map(function (x, i) {
				return (
					<div key={i}>
						<ProfileCardSkeleton card={card} />
					</div>
				);
			})}
		</div>
	);
}

// Icons
import { TbUserSearch } from "react-icons/tb";
import { PiCubeFocusLight } from "react-icons/pi";
import { Suspense } from "react";
