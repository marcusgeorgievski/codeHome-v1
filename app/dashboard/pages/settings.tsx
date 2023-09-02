"use client";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineLaptop } from "react-icons/md";
import { useSession } from "next-auth/react";

import { prisma } from "@/lib/prisma";

// Shadcn Code

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
import { Textarea } from "@/components/ui/shadcn/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
	name: z.string().max(30, {
		message: "Maximum length of 30 chars.",
	}),
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	bio: z.string().max(250, {
		message: "Maximum length of 250 chars.",
	}),
});

export default function Settings() {
	const { data: session, status } = useSession();

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "rw",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		console.log(2);
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<UserInformation form={form} />
					<button
						className="px-4 py-2 mt-8 font-medium text-white border rounded-md shadow bg-slate-800 hover:bg-slate-700"
						type="submit"
					>
						Submit
					</button>
				</form>
			</Form>
		</>
	);
}

function UserInformation({ form }: { form: any }) {
	return (
		<>
			<div className="flex flex-col w-1/3 gap-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="name" {...field} />
							</FormControl>
							<FormDescription>
								{/* This is your public username. */}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="@username" {...field} />
							</FormControl>
							<FormDescription>
								{/* This is your public username. */}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormItem>
					<FormLabel>Email</FormLabel>
					<FormControl>
						<Input
							disabled
							type="email"
							placeholder={session?.user?.email!}
						/>
					</FormControl>
					<FormDescription>
						{/* This is your account&apos;s email. */}
					</FormDescription>
					<FormMessage />
				</FormItem>

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
							<FormDescription>
								{/* You can <span>@mention</span> other
										users and organizations. */}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</>
	);
}

function Sidebar() {
	return (
		// <section className=" flex flex-col-reverse sm:grid grid-cols-[1fr_2fr]">
		<aside className="p-4 border rounded shadow border-slate-100">
			<div>
				<h3 className="mb-4 text-lg font-semibold font text-slate-700">
					Links
				</h3>
				<ul className="gap-1 ">
					<li>
						<Link
							href={""}
							className="flex items-center gap-4 px-3 py-1 "
						>
							<AiFillGithub className="text-xl" />
							<Input type="text" placeholder="GitHub" />
						</Link>
					</li>
					<li>
						<Link
							href={""}
							className="flex items-center gap-4 px-3 py-1 "
						>
							<AiFillLinkedin className="text-xl" />
							<Input type="text" placeholder="LinkedIn" />
						</Link>
					</li>
					<li>
						<Link
							href={""}
							className="flex items-center gap-4 px-3 py-1 "
						>
							<MdOutlineLaptop className="text-xl" />
							<Input type="text" placeholder="Personal" />
						</Link>
					</li>
				</ul>

				<button className="float-right px-2 py-1 mt-2 mr-3 text-sm font-medium transition-colors border rounded shadow border-slate-100 hover:bg-slate-100 bg-slate-50 text-slate-700">
					Add Link
				</button>
			</div>
		</aside>

		// 	<div>
		// 		<Input type="text" placeholder="Personal" />
		// 	</div>
		// </section>
	);
}

function UserUI() {
	return (
		<section className="grid grid-cols-[1fr_2fr]">
			<aside className="p-4 border rounded shadow border-slate-100">
				<div>
					<h3 className="mb-4 text-lg font-semibold font text-slate-700">
						Links
					</h3>
					<ul className="grid flex-col grid-cols-3 gap-1 ">
						<li>
							<Link
								href={""}
								className="flex items-center gap-2 px-3 py-1 transition-colors rounded hover:bg-slate-200"
							>
								<AiFillGithub />
								GitHub
							</Link>
						</li>
						<li>
							<Link
								href={""}
								className="flex items-center gap-2 px-3 py-1 transition-colors rounded hover:bg-slate-200"
							>
								<AiFillLinkedin />
								LinkedIn
							</Link>
						</li>
						<li>
							<Link
								href={""}
								className="flex items-center gap-2 px-3 py-1 transition-colors rounded hover:bg-slate-200"
							>
								<MdOutlineLaptop />
								Personal
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</section>
	);
}
