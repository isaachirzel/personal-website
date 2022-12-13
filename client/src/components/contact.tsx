import { RefObject } from "react";

export function Contact(props: { innerRef: RefObject<HTMLDivElement> })
{
	return (
		<div ref={props.innerRef}></div>
	);
}