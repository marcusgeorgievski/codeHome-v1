export default function Card({
	children,
	className,
	key,
}: {
	children: React.ReactNode;
	className?: string;
	key?: any;
}) {
	return (
		<div
			className={` border rounded-md shadow-md  border-slate-100  ${className}`}
		>
			{children}
		</div>
	);
}
