import Link from "next/link";

function Links() {
	return (
		<ProfileCard title="Links">
			<ul className="grid grid-cols-3 sm:grid-cols-1 ">
				<li>
					<Link
						href={""}
						className="flex items-center justify-center py-1 rounded gap-2 transition-colors sm:pl-4 sm:justify-start hover:bg-slate-200"
					>
						<AiFillGithub />
						GitHub
					</Link>
				</li>
				<li>
					<Link
						href={""}
						className="flex items-center justify-center py-1 rounded gap-2 transition-colors sm:pl-4 sm:justify-start hover:bg-slate-200"
					>
						<AiFillLinkedin />
						LinkedIn
					</Link>
				</li>
				<li>
					<Link
						href={""}
						className="flex items-center justify-center py-1 rounded gap-2 transition-colors sm:pl-4 sm:justify-start hover:bg-slate-200"
					>
						<MdOutlineLaptop />
						Personal
					</Link>
				</li>
			</ul>
		</ProfileCard>
	);
}

function About() {
	return (
		<div>
			<h3 className="mb-4 text-2xl font-semibold">About</h3>

			<p>markdown bio here</p>
		</div>
	);
}

function Tags() {
	return (
		<div>
			<h3 className="mb-4 text-2xl font-semibold">About</h3>

			<p>markdown bio here</p>
		</div>
	);
}

function Statistics() {
	return (
		<ProfileCard title="Statistics">
			<ul className="flex flex-col font-mono text-xs gap-2 text-slate-700">
				<li>Total projects</li>
				<li>Saves</li>
				<li>Followers</li>
				<li className="mb-4">Following</li>
				<li>Date joined</li>
				<li>Something</li>
				<li></li>
			</ul>
		</ProfileCard>
	);
}

function FunFacts() {
	return (
		<ProfileCard title="About">
			<ul className="flex flex-col font-mono text-xs gap-2 text-slate-700">
				<li>Student</li>
				<li>Canada</li>
				<li>Followers</li>
				<li className="mb-4">Following</li>
				<li>Date joined</li>
				<li>Something</li>
				<li></li>
			</ul>
		</ProfileCard>
	);
}

function ProfileCard({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="p-4 border shadow-md rounded-md border-slate-100">
			<h3 className="mb-4 text-2xl font-semibold text-slate-800">
				{title}
			</h3>

			{children}
		</div>
	);
}

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineLaptop } from "react-icons/md";
