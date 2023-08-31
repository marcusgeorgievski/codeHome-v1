import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import AuthProvider from "@/components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "codeHome",
	description: "The home route of your coding relating projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>
					<Header />

					<main className="max-w-screen-xl px-4 pt-4 mx-auto ">
						<div className="mb-10">
							<Breadcrumbs />
						</div>
						{children}
					</main>
				</body>
			</html>
		</AuthProvider>
	);
}
