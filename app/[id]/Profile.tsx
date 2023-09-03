"use client";
import Card from "@/components/ui/card";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

import {
	FeaturedProjects,
	Markdown,
	Sidebar,
} from "@/components/profile/components";
import { Project, User } from "@prisma/client";

/**     Components
 *
 *     Profile
 */

type UserWithProjects = User & {
	projects: Project[];
};

export default function Profile({
	user,
	self,
	id,
}: {
	user: UserWithProjects;
	self: boolean;
	id: string;
}) {
	const [isSelf, setIsSelf] = useState(self);
	const [userData, setUserData] = useState(user);

	// Update userData if user changes
	useEffect(() => {
		setUserData(user);
	}, [user]);

	return (
		<ProfileContext.Provider value={{ isSelf, userData, setUserData }}>
			<Sidebar />

			<Markdown />

			<FeaturedProjects />
		</ProfileContext.Provider>
	);

	// console.log("Profile.tsx: ", id);
	// return (
	// 	<ProfileProvider self={self} user={user}>
	// 	</ProfileProvider>
	// );
}

import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext<iContext | null>(null);

interface iContext {
	userData: User;
	isSelf: boolean;
	setUserData: any;
}

export function ProfileProvider({
	children,
	user,
	self,
}: {
	children: React.ReactNode;
	user: any;
	self: boolean;
}) {
	const [isSelf, setIsSelf] = useState(self);
	const [userData, setUserData] = useState(user);

	return (
		<ProfileContext.Provider value={{ isSelf, userData, setUserData }}>
			{children}
		</ProfileContext.Provider>
	);
}

export function useProfileContext() {
	const context = useContext(ProfileContext);
	if (context === null) {
		throw new Error(
			"useProfileContext must be used within a ProfileProvider"
		);
	}
	return context;
}
