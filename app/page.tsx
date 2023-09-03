import CodeHome from "@/components/ui/codehome";
import Link from "next/link";
import Card from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

/**     Components
 *
 *      Home - Default
 *      Hero
 *      HomeCards
 *      Blob
 */

export default function Home() {
	return (
		<div className="">
			<Hero />
			<HomeCards />
		</div>
	);
}

async function Hero() {
	const session = await getServerSession();

	let user = undefined;

	if (session?.user) {
		user = await prisma.user.findUnique({
			where: { email: session?.user?.email! },
		});
	}

	return (
		<div className="relative mb-8 h-[60vh]">
			<div className="pt-10 mb-16 ">
				{/* <span className="">{"{"}</span> */}
				<CodeHome
					className="justify-center text-5xl font-bold"
					logo
					logoStyle="w-20 translate-y-[2px]"
				/>
			</div>

			<p className="px-4 mb-4 text-center text-slate-700">
				A centralized hub for your coding projects and learning
			</p>

			{/* Blue Buttons */}
			<div className="flex justify-center gap-4">
				{user === undefined ? (
					<HomeSignIn />
				) : (
					<Link
						href={"/" + user?.username}
						className="px-4 py-2 font-semibold text-white bg-blue-700 rounded-md hover:opacity-90"
					>
						My Account
					</Link>
				)}

				<Link
					href={"/about"}
					className="px-4 py-2 font-semibold text-white bg-blue-700 rounded-md hover:opacity-90"
				>
					Learn more
				</Link>
			</div>

			<Blob
				move="absolute left-40 translate-y-50 -z-10"
				blob="absolute h-[150px] w-[400px] bg-gradient-to-b from-blue-500 to-blue-300 rounded-[50%] blur-3xl opacity-50 -rotate-45"
			/>

			<Blob
				move="absolute right-40 translate-y-[220px] -z-10"
				blob="absolute h-[150px] w-[200px] bg-gradient-to-b from-pink-500 to-pink-300 rounded-[50%] blur-3xl opacity-30 -rotate-45"
			/>
		</div>
	);
}

import { CgFeed } from "react-icons/cg";
import { HiCollection } from "react-icons/hi";
import { PiNotebookFill, PiPresentationFill } from "react-icons/pi";
import { getServerSession } from "next-auth";
import { HomeSignIn } from "@/components/auth/AuthButtons";

interface Card {
	title: string;
	content: React.ReactNode;
	icon: React.ReactNode;
	comingSoon?: boolean;
}
const cards: Card[] = [
	{
		title: "Compile",
		content: (
			<>
				<CodeHome className="font-semibold" />
				lets you accumulate your projects, big and small, in one spot.
				Whether it&apos;s web development, data science, or any tech
				endeavor.
			</>
		),
		icon: <HiCollection className="text-blue-700" />,
	},
	{
		title: "Explore",
		content: (
			<>
				Explore an array of projects in one place. Find diverse tech
				creations by others. Dive in and find inspiring work from the
				community you can save and comment on.
			</>
		),
		icon: <CgFeed className="text-blue-700" />,
	},
	{
		title: "Showcase",
		content: (
			<>
				Highlight your projects to the community, friends, and beyond.
				Share your tech endeavors and engage with others. Recieve
				feedback on your ideas.
			</>
		),
		icon: <PiPresentationFill className="text-blue-700" />,
	},
	{
		title: "Manage",
		content: (
			<>
				Enhance your project management by creating issues, planning
				features, and categorizing your projects in ways that make sense
				to you.
			</>
		),
		icon: <PiNotebookFill className="text-blue-700" />,
	},
];

function HomeCards() {
	return (
		<section className="grid gap-6 px-4 md:px-12 md:grid-cols-2">
			{cards.map((card: Card) => {
				const { title, content, icon } = card;
				return (
					// <div key={title}>
					<Card
						key={title}
						className="hover:scale-[1.02] transition-transform p-4 bg-white/80"
					>
						<h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-slate-700">
							{icon}
							{title}
						</h3>

						{content}
					</Card>
					// </div>
				);
			})}
		</section>
	);
}

function Blob({
	move,
	blob,
	children,
}: {
	move?: string;
	blob: string;
	children?: React.ReactNode;
}) {
	const defaultStyle = "";
	return (
		<div className={move}>
			<div className="relative flex items-center justify-center">
				{/* <div
					aria-hidden
					className="absolute inset-x-0 w-40 mx-auto scale-y-100 rotate-45 rounded-full opacity-75 inset-y-16 bg-gradient-to-b from-blue-500 to-blue-300 blur-2xl/0"
				></div> */}
				<div className={blob}></div>
				<div className="relative">{children}</div>
			</div>
		</div>
	);
}
