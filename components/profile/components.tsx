"use client";
import Link from "next/link";
import Card from "../ui/card";
import { Project, User } from "@prisma/client";
import { useProfileContext } from "@/app/[id]/Profile";
import { useState } from "react";

export function Sidebar() {
	const { isSelf } = useProfileContext();
	const [edit, setEdit] = useState(false);

	return (
		<>
			{/* Edit profile button */}
			{isSelf && !edit && (
				<Card className="flex items-center justify-center  mb-2 shadow-none border-slate-200 hover:bg-slate-600 transition-colors bg-slate-800 text-white">
					<button
						onClick={(prev) => setEdit(!edit)}
						className="w-full h-full py-2"
					>
						<p className="font-semibold text-sm">Edit Profile</p>
					</button>
				</Card>
			)}

			<Card className="p-3 border-slate-200">
				{edit ? <ProfileForm setEdit={setEdit} /> : <SidebarContent />}
			</Card>
		</>
	);
}

function SidebarContent() {
	const { userData } = useProfileContext();
	return (
		<div className="flex gap-4 flex-col">
			{userData.bio && (
				<div>
					<h3 className="text-xs font-mono mb-2 text-slate-500">
						Bio
					</h3>

					<p className="text-sm text-slate-700 pl-2">
						{userData.bio || "no data"}
					</p>
				</div>
			)}

			{userData.location && userData.occupation && (
				<div>
					<h3 className="text-xs font-mono mb-2 text-slate-500">
						About
					</h3>

					<div className="pl-2">
						{userData.location && (
							<p className="text-sm text-slate-700 flex items-center gap-2">
								<span>🌍</span>
								{userData.location || "no data"}
							</p>
						)}

						{userData.occupation && (
							<p className="text-sm text-slate-70 flex items-center gap-2">
								<span>💼</span>
								{userData.occupation || "no data"}
							</p>
						)}
					</div>
				</div>
			)}

			<Links />

			<div>
				<h3 className="text-xs font-mono mb-2 text-slate-500">Misc</h3>

				<div className="px-2">
					<p className="text-sm text-slate-600 flex items-center gap-2 justify-between">
						<span className="">Joined</span>
						{userData.createdAt.toDateString() || "no data"}
					</p>

					<p className="text-sm text-slate-700 flex items-center gap-2 justify-between">
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

	const links = [
		{
			text: "Personal",
			href: userData.github,
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

	const validLinks = links
		.filter((link) => link.href !== null && link.href !== "")
		.map((link, i) => {
			return (
				<a
					key={i}
					href={link.href!}
					className="text-sm text-slate-700 flex items-center gap-2"
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
					<h3 className="text-xs font-mono mb-2 text-slate-500 ">
						Links
					</h3>

					<div
						className={`grid  sm:grid-cols-2 ${
							validLinks.length < 4
								? "grid-cols-1"
								: "grid-cols-2"
						}`}
					>
						{links
							.filter((link) => {
								return link.href !== null && link.href !== "";
							})
							.map((link, i) => {
								return (
									<a
										key={i}
										href={link.href!}
										target="_blank"
										className="text-sm text-slate-700 flex items-center gap-2 rounded hover:bg-slate-100 border border-slate-50/0 hover:border-slate-50 px-2 py-1 "
									>
										{link.icon}
										{link.text}
									</a>
								);
							})}
					</div>
				</div>
			)}
		</>
	);
}

export function About() {
	return <></>;
}

export function FeaturedProjects() {
	return <></>;
}

export function Markdown() {
	return <></>;
}

import { AiFillGithub, AiFillLinkedin, AiOutlineLaptop } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import ProfileForm from "./profile-form";