"use client";

import {
	FeaturedProjects,
	About,
	Sidebar,
} from "@/components/profile/components";
import { Project, User } from "@prisma/client";
import { UserWithProjects } from "@/lib/types";

/**     Components
 *
 *      Profile
 *      ProfileContext
 */

interface ProfileProps {
	user: UserWithProjects;
	self: boolean;
}

export default function Profile({ user, self }: ProfileProps) {
	// user + self state
	const [userData, setUserData] = useState(user);
	const [isSelf, setIsSelf] = useState(self);

	// Update userData if user data changes
	// This will update changes if user edits profile and submits form
	useEffect(() => {
		setUserData(user);
	}, [user]);

	return (
		<ProfileContext.Provider value={{ isSelf, userData, setUserData }}>
			<div className="grid grid-cols-1 sm:grid-cols-[1fr,3fr] gap-5">
				<aside>
					<Sidebar />
				</aside>

				<div>
					<FeaturedProjects />

					<About />
				</div>
			</div>
		</ProfileContext.Provider>
	);
}

import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext<iContext | null>(null);

interface iContext {
	userData: UserWithProjects;
	isSelf: boolean;
	setUserData: any;
}

interface ProfileProvider {
	user: UserWithProjects;
	children: React.ReactNode;
	self: boolean;
}

export function ProfileProvider({ children, user, self }: ProfileProvider) {
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
