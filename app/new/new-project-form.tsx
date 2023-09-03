"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const formSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, { message: "Must be more than 2 chars." })
		.max(35, { message: "Cannot exceed 30 chars." })
		.refine((value) => !/\s/.test(value), {
			message: "No spaces allowed.",
		}),
	description: z
		.string()
		.max(300, { message: "Must not exceed 300 characters" })
		.optional(),

	private: z.boolean(),
	status: z.any(),

	link: z.string().optional(),
	githubLink: z.string().optional(),
});

export default function NewProjectForm({ setEdit }: any) {
	const { data: session } = useSession();
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			private: false,
			status: "active",
			link: "",
			githubLink: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// @ts-ignore comment
		const body = { userId: session?.user?.id, ...values };
		console.log(body);
		const res = await fetch("/api/project", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			console.log("-> Project Create");
			// @ts-ignore comment
			router.replace(`/${session?.user?.username}/${values.name}`);
		});
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="flex flex-col">
						<div className="flex flex-col gap-8">
							<AboutSection form={form} />
							<OptionSection form={form} />
							<LinksSection form={form} />
						</div>

						<div className="flex items-center gap-2 py-6">
							<button
								type="submit"
								className="px-4 py-2 text-sm font-medium text-center bg-blue-600 rounded text-blue-50 hover:opacity-80"
							>
								Save
							</button>
							<button className="px-4 py-2 text-sm font-medium text-center rounded bg-slate-300 text-slate-700 hover:opacity-80">
								cancel
							</button>
						</div>
					</div>
				</form>
			</Form>
		</>
	);
}
import { useState } from "react";

export function AboutSection({ form, name }: { form: any; name?: any }) {
	const [pName, setName] = useState(name || "");
	const { data: session } = useSession();

	function handleChange(e: any) {
		setName(e.target.value);
	}

	return (
		<div>
			<h3 className="mb-2 font-mono text-xs text-slate-500">About</h3>

			<div className="flex flex-col gap-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Project Name</FormLabel>
							<FormControl>
								<div className="relative pl-[14px]">
									<Input
										placeholder="awesome-project71"
										{...field}
									/>

									<span className="absolute top-0 left-0 font-medium translate-y-2 text-slate-500">
										/
									</span>
								</div>
							</FormControl>
							<FormDescription>
								{/* @ts-ignore */}
								{/* {session?.user?.username!}/{pName} */}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Brief description"
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

import { Switch } from "@/components/ui/shadcn/switch";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/shadcn/select";

import Link from "next/link";

const options = [
	{
		value: "active",
		text: "Active",
		colour: "bg-blue-600",
	},
	{
		value: "complete",
		text: "Complete",
		colour: "bg-green-600",
	},
	{
		value: "planning",
		text: "Planning",
		colour: "bg-fuchsia-600",
	},
	{
		value: "hold",
		text: "Paused",
		colour: "bg-slate-600",
	},
];

export function OptionSection({ form }: any) {
	return (
		<div>
			<h3 className="mb-2 font-mono text-xs text-slate-500">Options</h3>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<FormField
					control={form.control}
					name="private"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md shadow">
							<FormControl>
								<Switch
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel>Private</FormLabel>
								<FormDescription>
									Only you can see this project.
								</FormDescription>
							</div>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="status"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md shadow">
							<div className="w-[150px]">
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Status" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{options.map((opt) => {
											return (
												<div key={opt.value}>
													<SelectItem
														value={opt.value}
													>
														<div className="flex items-center gap-2">
															<div
																className={
																	"w-2  h-2 rounded-full  " +
																	opt.colour
																}
															/>{" "}
															{opt.text}
														</div>
													</SelectItem>
												</div>
											);
										})}
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-1 leading-none">
								<FormLabel>Status</FormLabel>
								<FormDescription>
									The current status of the project.
								</FormDescription>
							</div>

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
		name: "link",
		placeholder: "Link",
		icon: <BsLink45Deg />,
	},
	{
		name: "githubLink",
		placeholder: "Github",
		icon: <AiFillGithub />,
	},
];

export function LinksSection({ form }: any) {
	return (
		<div>
			<h3 className="mb-4 font-mono text-xs text-slate-500">Links</h3>

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
												<span className="absolute top-0 left-0 translate-y-3 text-slate-700">
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
import { Textarea } from "@/components/ui/shadcn/textarea";

import { AiFillGithub, AiFillLinkedin, AiOutlineLaptop } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { CloudFog } from "lucide-react";
