import { MutableRefObject, RefObject } from "react";

export function Home(props: { innerRef: RefObject<HTMLDivElement> })
{
	return (
		<div ref={props.innerRef} className="home">
			<div className="info">
				<div className="name">Isaac Hirzel</div>
				<div className="title">
					<div>Software Engineer</div>
					<div className="socials">
						{/* <div className="bubble">LI</div>
						<div className="bubble">GH</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}