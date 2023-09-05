import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
	params: { username: string };
}
export default async function Settings({ params: { username } }: Props) {
	const user = await prisma.user.findUniqueOrThrow({
		where: {
			username,
		},
	});

	// Check if user is on their own page
	const session = await getServerSession();

	let self = false;
	if (session) {
		self = session?.user?.email === user?.email;
	}

	if (!self) redirect("/");

	return (
		<div className="text-sm ">
			<p className="mb-2 font-medium">Settings coming soon</p>
			<ul className="pl-8 list-disc">
				<li>Light/Dark theme</li>
				<li>Delete account</li>
			</ul>
		</div>
	);
}
