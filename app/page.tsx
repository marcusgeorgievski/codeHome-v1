import Link from "next/link";

export default function Home() {
	return (
		<>
			<div>
				<div className="pt-8 mb-6 text-5xl font-bold text-center">
					{/* <span className="">{"{"}</span> */}
					<span className="text-blue-800">code</span>
					<span>Home</span>
					{/* <span className="text-blue-800 ">{";"}</span> */}
				</div>

				<p className="px-4 mb-4 text-center text-slate-700">
					A centralized hub for your coding projects and learning
				</p>

				<div className="flex justify-center gap-4">
					<Link
						href={"/dashboard"}
						className="px-4 py-2 font-semibold text-white bg-blue-700 rounded-md hover:opacity-90"
					>
						My account
					</Link>
					<Link
						href={"/about"}
						className="px-4 py-2 font-semibold text-white bg-blue-700 rounded-md hover:opacity-90"
					>
						Learn more
					</Link>
				</div>
			</div>
		</>
	);
}
