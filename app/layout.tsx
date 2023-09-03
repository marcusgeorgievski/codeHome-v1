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
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>
					<Header />

					<main className="px-4 pt-4 pb-16 mx-auto max-w-screen-xl sm:px-8 xl:px-4">
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
