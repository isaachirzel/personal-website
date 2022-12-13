function navigate(element: any): void
{

}

export function NavItem(props: { element: any, label: string })
{
	return (
		<div className="nav-item" onClick={() => navigate(props.element)}>
			<div>{props.label}</div>
		</div>
	);
}
