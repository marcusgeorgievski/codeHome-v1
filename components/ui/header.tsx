import Link from "next/link";
import { Routes } from "./navigation";
import { SignInButton, SignOutButton } from "../auth/AuthButtons";
import CodeHome from "./codehome";

export default async function Header() {
	return (
		<header className="sticky top-0 py-0 border-b ems-center backdrop-blur-sm bg-white/ border-slate-300/80">
			<div className="flex justify-between w-full max-w-screen-xl px-4 mx-auto ">
				{/* Left Header */}
				<div className="flex items-center gap-8">
					<Link href={"/"} className="text-2xl font-bold">
						<CodeHome
							className={"text-2xl font-bold"}
							icon={true}
						/>
					</Link>

					<Routes />
				</div>

				{/* Right Header */}
				<div className="flex items-center">
					<SignInButton />
				</div>
			</div>
		</header>
	);
}
