interface ProjectProps {
	params: { projectId: string };
}
export default function Project({ params: { projectId } }: ProjectProps) {
	console.log(projectId);
	return <>hi</>;
}
