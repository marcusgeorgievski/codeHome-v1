export default function Profile() {
	return (
		<section className="grid gap-12">
			<About />
			<Statistics />
		</section>
	);
}

function About() {
	return (
		<div>
			<h3 className="mb-4 text-2xl font-semibold">About</h3>

			<p>markdown bio here</p>
		</div>
	);
}

function Tags() {
	return (
		<div>
			<h3 className="mb-4 text-2xl font-semibold">About</h3>

			<p>markdown bio here</p>
		</div>
	);
}

function Statistics() {
	return (
		<div className="p-4 border rounded-md shadow-md border-slate-100">
			<h3 className="mb-4 text-2xl font-semibold text-slate-800">
				Statistics
			</h3>

			<ul className="flex flex-col gap-2 font-mono text-sm text-slate-700">
				<li>Total projects</li>
				<li>Saves</li>
				<li>Followers</li>
				<li className="mb-4">Following</li>
				<li>Date joined</li>
				<li>Something</li>
				<li></li>
			</ul>
		</div>
	);
}
