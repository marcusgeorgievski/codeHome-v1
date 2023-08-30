import Link from "next/link";
import { Dropdown, Routes } from "./navigation";
import { SignInButton, SignOutButton } from "../auth/AuthButtons";

export default async function Header() {
	return (
		<header className="sticky top-0 py-2 border-b ems-center backdrop-blur-sm bg-white/80 border-slate-300/80">
			<div className="flex justify-between w-full max-w-screen-xl px-4 mx-auto ">
				{/* Left Header */}
				<div className="flex items-center gap-8">
					<Link href={"/"} className="text-2xl font-bold">
						<span className="text-blue-700">code</span>
						<span>Home</span>
					</Link>

					<Routes />
				</div>

				{/* Right Header */}
				<div className="flex items-center">
					{/* <Dropdown /> */}
					<SignInButton />
					{/* <SignOutButton /> */}
				</div>
			</div>
		</header>
	);
}
