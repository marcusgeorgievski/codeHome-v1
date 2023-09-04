"use client";
import Card from "../ui/card";
import { useProfileContext } from "@/app/[username]/Profile";
import { useState } from "react";
import ProfileForm from "./profile-form";

export function Sidebar() {
	const { isSelf } = useProfileContext();
	const [edit, setEdit] = useState(false);

	return (
		<>
			{/* Edit profile button */}
			{isSelf && !edit && (
				<Card className="flex items-center justify-center mb-2 text-white transition-colors shadow-none border-slate-200 hover:bg-slate-600 bg-slate-800">
					<button
						onClick={(prev) => setEdit(!edit)}
						className="w-full h-full py-2"
					>
						<p className="text-sm font-semibold">Edit Profile</p>
					</button>
				</Card>
			)}

			{/* Either display sidebar content or sidebar form */}
			<Card className="p-3 border-slate-200">
				{edit ? <ProfileForm setEdit={setEdit} /> : <SidebarContent />}
			</Card>
		</>
	);
}

function SidebarContent() {
	const { userData } = useProfileContext();

	return (
		<div className="flex flex-col gap-4">
			{userData.bio && (
				<div>
					<h3 className="mb-2 font-mono text-xs text-slate-500">
						Bio
					</h3>

					<p className="pl-2 text-sm text-slate-700">
						{userData.bio || "no data"}
					</p>
				</div>
			)}

			{userData.location && userData.occupation && (
				<div>
					<h3 className="mb-2 font-mono text-xs text-slate-500">
						About
					</h3>

					<div className="pl-2">
						{userData.location && (
							<p className="flex items-center gap-2 text-sm text-slate-700">
								<span>🌍</span>
								{userData.location || "no data"}
							</p>
						)}

						{userData.occupation && (
							<p className="flex items-center gap-2 text-sm text-slate-70">
								<span>💼</span>
								{userData.occupation || "no data"}
							</p>
						)}
					</div>
				</div>
			)}

			<Links />

			<div>
				<h3 className="mb-2 font-mono text-xs text-slate-500">Misc</h3>

				<div className="px-2">
					<p className="flex items-center justify-between gap-2 text-sm text-slate-600">
						<span className="">Joined</span>
						{userData.createdAt.toDateString() || "no data"}
					</p>

					<p className="flex items-center justify-between gap-2 text-sm text-slate-700">
						<span className="">Email</span>
						{userData.email || "no data"}
					</p>
				</div>
			</div>
		</div>
	);
}

export function Links() {
	const { userData } = useProfileContext();

	// In components since it uses user data
	const links = [
		{
			text: "Personal",
			href: userData.personal,
			icon: <AiOutlineLaptop />,
		},
		{
			text: "Github",
			href: userData.github,
			icon: <AiFillGithub />,
		},
		{
			text: "LinkedIn",
			href: userData.linkedin,
			icon: <AiFillLinkedin />,
		},
		{
			text: "Link",
			href: userData.link1,
			icon: <BsLink45Deg />,
		},
		{
			text: "Link",
			href: userData.link2,
			icon: <BsLink45Deg />,
		},
		{
			text: "Link",
			href: userData.link3,
			icon: <BsLink45Deg />,
		},
	];

	// Filter out null or empty links
	const validLinks = links
		.filter((link) => link.href !== null && link.href !== "")
		.map((link, i) => {
			return (
				<a
					key={i}
					href={link.href!}
					target="_blank"
					className="flex items-center gap-2 px-2 py-1 text-sm border rounded text-slate-700 hover:bg-slate-100 border-slate-50/0 hover:border-slate-50 transition-colors"
				>
					{link.icon}
					{link.text}
				</a>
			);
		});

	return (
		<>
			{validLinks.length !== 0 && (
				<div>
					<h3 className="mb-2 font-mono text-xs text-slate-500 ">
						Links
					</h3>

					<div
						className={`grid  sm:grid-cols-2 ${
							validLinks.length < 4
								? "grid-cols-1"
								: "grid-cols-2"
						}`}
					>
						{validLinks}
					</div>
				</div>
			)}
		</>
	);
}

export function About() {
	const [edit, setEdit] = useState(false);
	const { isSelf, userData } = useProfileContext();

	return (
		<div>
			{!userData.about && (
				<>
					<div className="flex items-center justify-between mb-2 border-b text-slate-800 border-slate-200">
						<h3 className="font-mono text-2xl font-semibold ">
							About
						</h3>
						{isSelf && (
							<button onChange={(prev) => setEdit(!prev)}>
								<BiSolidEdit />
							</button>
						)}
					</div>

					<article className="text-slate-800 ">
						{userData.about || "section in progress :)"}
					</article>
				</>
			)}
		</div>
	);
}

export function FeaturedProjects() {
	const { isSelf, userData } = useProfileContext();

	return <>{!userData}</>;
}

import { AiFillGithub, AiFillLinkedin, AiOutlineLaptop } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
