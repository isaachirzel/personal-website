export function Bubble(props: { icon: string | undefined })
{
	return (
		<div className="bubble">
			{ props.icon ? <span className="icon"></span> : <></> }
		</div>
	);
}