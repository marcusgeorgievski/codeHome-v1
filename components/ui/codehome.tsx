"use client";
// import { BsCode } from "react-icons/bs";
import Image from "next/image";

export default function CodeHome({
	className,
	icon = false,
}: {
	className?: string;
	icon?: boolean;
}) {
	return (
		<div className={className + " flex items-center"}>
			<span className="text-blue-800">code</span>
			<span>Home</span>
			<Image
				src="/l3.png"
				alt="logo"
				width="200"
				height="200"
				className={`w-10 h-20px -translate-y-[3px] ${
					!icon && "hidden"
				}`}
			/>
			{/* <BsCode
				className={`${
                    !icon && "hidden"
				} text-blue-800 translate-y-[1.5px]`}
			/> */}
		</div>
	);
}
