"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useRouter } from "next/navigation";

const formSchema = z.object({
	username: z
		.string()
		.trim()
		.min(2, {
			message: "Username must be at least 2 chars.",
		})
		.max(35, {
			message: "Username cannot exceed 35 chars.",
		})
		.refine((value) => !/\s/.test(value), {
			message: "No spaces are allowed.",
		}),
	name: z
		.string()
		.trim()
		.min(2, {
			message: "Name must be at least 2 chars.",
		})
		.max(35, {
			message: "Name cannot exceed 35 chars.",
		}),
	bio: z
		.string()
		.trim()
		.max(300, { message: "Bio cannot exceed 300 characters" })
		.optional(),
	location: z
		.string()
		.trim()
		.max(30, { message: "Location cannot exceed 30 characters" })
		.optional(),
	occupation: z
		.string()
		.trim()
		.max(30, { message: "Occupation cannot exceed 30 characters" })
		.optional(),
	github: z.string().trim().optional(),
	linkedin: z.string().trim().optional(),
	personal: z.string().trim().optional(),
	link1: z.string().trim().optional(),
	link2: z.string().trim().optional(),
	link3: z.string().trim().optional(),
});

export default function ProfileForm({ setEdit }: any) {
	const { userData } = useProfileContext();
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: userData.username || "",
			name: userData.name || "",
			bio: userData.bio || "",
			location: userData.location || "",
			occupation: userData.occupation || "",
			github: userData.github || "",
			linkedin: userData.linkedin || "",
			personal: userData.personal || "",
			link1: userData.link1 || "",
			link2: userData.link2 || "",
			link3: userData.link3 || "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const body = { id: userData.id, ...values };
		const res = await fetch("/api/user", {
			method: "PATCH",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			setEdit(false);
			router.replace(body.username);
			router.refresh();
		});

		// if (res.ok) {
		// 	router.replace(body.username);
		// 	router.refresh();
		// 	const data = await res.json();
		// 	console.log(data);
		// 	// setUserData(data);
		// 	setEdit(false);
		// }
	}

	function handleCancel() {
		setEdit(false);
	}

	const { setUserData } = useProfileContext();

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="flex flex-col">
						<div className="flex flex-col gap-8">
							<ProfileSection form={form} />

							<BioSection form={form} />

							<LinksSection form={form} />
						</div>

						<div className="flex items-center gap-2 py-6">
							<button
								// onClick={handleSubmit}
								type="submit"
								className="px-4 text-sm py-2 font-medium bg-blue-600 rounded text-center text-blue-50 hover:opacity-80"
							>
								Save
							</button>
							<button
								onClick={handleCancel}
								className="px-4 text-sm py-2 font-medium bg-slate-300 rounded text-center text-slate-700 hover:opacity-80"
							>
								cancel
							</button>
						</div>
					</div>
				</form>
			</Form>
		</>
	);
}

export function ProfileSection({ form }: any) {
	return (
		<div>
			<h3 className="text-xs font-mono mb-2 text-slate-500">Profile</h3>

			<div className="flex flex-col gap-4">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<div className="relative pl-5">
									<Input
										placeholder="Username"
										{...field}
										className="pl-3"
									/>

									<span className="absolute left-0 top-0 translate-y-2 text-slate-600">
										@
									</span>
								</div>
							</FormControl>
							<FormDescription>
								This will be your public identifier.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Name"
									{...field}
									className="pl-3"
								/>
							</FormControl>
							<FormDescription>
								This will be your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
}

export function BioSection({ form }: any) {
	return (
		<div>
			{/* <h3 className="text-xs font-mono mb-2 text-slate-500">Bio</h3> */}

			<div className="flex flex-col gap-4">
				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bio</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us a little bit about yourself"
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
}

export function AboutSection({ form }: any) {
	return (
		<div>
			<h3 className="text-xs font-mono mb-2 text-slate-500">Profile</h3>

			<div className="flex flex-col gap-4">
				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Location</FormLabel>
							<FormControl>
								<Input
									placeholder="Location"
									{...field}
									className="pl-3"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="occupation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>occupation</FormLabel>
							<FormControl>
								<Input
									placeholder="Occupation"
									{...field}
									className="pl-3"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
}

const linkInputs = [
	{
		name: "personal",
		placeholder: "Personal",
		icon: <AiOutlineLaptop />,
	},
	{
		name: "github",
		placeholder: "Github",
		icon: <AiFillGithub />,
	},
	{
		name: "linkedin",
		placeholder: "LinkedIn",
		icon: <AiFillLinkedin />,
	},
	{
		name: "link1",
		placeholder: "Link",
		icon: <BsLink45Deg />,
	},
	{
		name: "link2",
		placeholder: "Link",
		icon: <BsLink45Deg />,
	},
	{
		name: "link3",
		placeholder: "Link",
		icon: <BsLink45Deg />,
	},
];

export function LinksSection({ form }: any) {
	return (
		<div>
			<h3 className="text-xs font-mono mb-4 text-slate-500">Links</h3>

			<div className="flex flex-col gap-4">
				{linkInputs.map((link) => {
					return (
						<div key={link.name}>
							<FormField
								control={form.control}
								name={link.name}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="relative pl-6">
												<Input
													placeholder={
														link.placeholder
													}
													{...field}
													className=""
												/>
												<span className="absolute left-0 top-0 translate-y-3 text-slate-700">
													{link.icon}
												</span>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";
import { useProfileContext } from "@/app/[id]/Profile";
import { Textarea } from "../ui/shadcn/textarea";

import { AiFillGithub, AiFillLinkedin, AiOutlineLaptop } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { Button } from "../ui/shadcn/button";
