import { RefObject } from "react";

export function Projects(props: { innerRef: RefObject<HTMLDivElement> })
{
	return (
		<div ref={props.innerRef}></div>
	);
}