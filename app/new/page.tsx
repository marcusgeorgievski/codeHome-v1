import AuthCheck from "@/components/auth/AuthCheck";
import NewProjectForm from "./new-project-form";
import { Suspense } from "react";

export default function New() {
	return (
		<AuthCheck>
			<div className="max-w-[800px] mx-auto">
				<h1 className="mb-4 text-3xl font-bold text-slate-800 ">
					New Project
				</h1>
				<Suspense fallback={<>Loading form...</>}>
					<NewProjectForm />
				</Suspense>
			</div>
		</AuthCheck>
	);
}
