import { RefObject } from "react";

export function About(props: { innerRef: RefObject<HTMLDivElement> })
{
	return (
		<div ref={props.innerRef} className="about">
			I'm a software engineer try
		</div>
	);
}