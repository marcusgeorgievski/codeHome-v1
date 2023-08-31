import { Metadata } from "next";

export const metadata: Metadata = {
	title: "codeHome - About",
	description: "codeHome about page",
};

export default function About() {
	return (
		<>
			<h1 className="text-2xl font-normal">
				Welcome to{" "}
				<span className="text-2xl font-bold">
					<span className="text-blue-800">code</span>
					<span>Home</span>
				</span>
			</h1>
		</>
	);
}
