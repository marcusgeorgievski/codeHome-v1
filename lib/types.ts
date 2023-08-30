export interface User {
	id: string;
	name?: string;
	email?: string;
	emailVerified?: Date;
	image?: string;
	createdAt: Date;
	username?: string;
	bio?: string;
	followers: Follows[];
	following: Follows[];
	projects: Project[];
	likes: Like[];
	comments: Comment[];
	tags: Tag[];
}

export interface Follows {
	followerId: string;
	followingId: string;
	createdAt: Date;
	follower: User;
	following: User;
}

export interface Project {
	id: string;
	name: string;
	description?: string;
	private: boolean;
	complete: boolean;
	createdAt: Date;
	tags: Tag[];
	likes: Like[];
	comments: Comment[];
	userId: string;
	user: User;
}

export interface Tag {
	id: string;
	name: string;
	projectId: string;
	userId: string;
	project: Project;
	user: User;
}

export interface Like {
	id: string;
	userId: string;
	projectId: string;
	createdAt: Date;
	user: User;
	project: Project;
}

export interface Comment {
	id: string;
	content: string;
	userId: string;
	projectId: string;
	createdAt: Date;
	updatedAt: Date;
	user: User;
	project: Project;
}
