import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "codeHome - About",
	description: "codeHome about page",
};

export default function About() {
	return (
		<>
			About page, find features on{" "}
			<Link
				href={"/"}
				className="font-semibold text-blue-700 hover:border-b hover:border-blue-700"
			>
				home
			</Link>{" "}
			page for now
		</>
	);
}
