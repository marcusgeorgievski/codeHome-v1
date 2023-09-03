"use client";
// import { BsCode } from "react-icons/bs";
import Image from "next/image";

export default function CodeHome({
	className,
	logo = false,
	logoStyle,
}: {
	className?: string;
	logo?: boolean;
	logoStyle?: string;
}) {
	return (
		<div className={"flex items-center " + className}>
			<span className="text-blue-800">code</span>
			<span>Home</span>
			<Image
				src="/l1.png"
				alt="logo"
				width="200"
				height="200"
				className={` ${!logo && "hidden"} ${logoStyle}`}
			/>
			{/* <BsCode
				className={`${
					!icon && "hidden"
				} text-blue-800 translate-y-[1.5px]`}
			/> */}
		</div>
	);
}

// import { BsCode } from "react-icons/bs";
