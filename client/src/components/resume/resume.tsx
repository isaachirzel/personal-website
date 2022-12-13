import { RefObject } from "react";
import { ContactItem, resumeData, ResumeItem } from "./resume-data";
import "./resume.scss";

function formatDate(date: Date): string
{
	return `${date.getMonth() + 1}/${date.getFullYear()}`;
}

function formatDateRange(from?: Date, to?: Date): string
{
	if (!from)
		return to ? formatDate(to) : "";

	const fromText = formatDate(from);

	const toText = to
		? formatDate(to)
		: "Present";

	return `${fromText} - ${toText}`;
}

function ResumeDivider(props: { title: string })
{
	return (
		<div className="divider">
			<b>{props.title}</b>
			<hr />
		</div>
	);
}

function getElement(type: string, children: (JSX.Element | string)[]): JSX.Element
{
	switch (type)
	{
		case '*':
			return <b children={children}></b>;
		case '_':
			return <i children={children}></i>;
		default:
			return <span children={children}></span>;
	}
}

function parseText(source: string, index: number, type: string): [ JSX.Element | null, number ]
{
	let text = "";
	const children: JSX.Element[] = [];

	for (index; index < source.length; ++index)
	{
		const c = source[index];

		switch (c)
		{
			case '*':
			case '_':
				if (c == type)
					break;

				if (text)
				{
					children.push(<span>{text}</span>);
					text = "";
				}
				
				const [ child, newIndex ] = parseText(source, index + 1, c);

				if (child)
					children.push(child);

				index = newIndex;
				continue;

			default:
				text += c;
				continue;
		}

		break;
	}

	if (text)
		children.push(<span>{text}</span>);

	if (children.length == 0)
		return [ null, index ];

	return [ getElement(type, children), index ];
}

function ListItem(props: { source: string })
{
	const [ element ] = parseText(props.source, 0, '');

	return <li>{element}</li>;
}

function ResumeEntry(props: { info: ResumeItem })
{
	const info = props.info;
	return (
		<div className="entry">
			<header>
				<div className="left">
					<b>{info.title}</b>
				</div>
				<div>
					<b><u>{info.organization}</u></b>
				</div>
				<div className="right">
					<i>{formatDateRange(info.from, info.to)}</i>
				</div>
			</header>
			<ul>
				{info.points?.map((point, key) => <ListItem key={key} source={point} />)}
			</ul>
		</div>
	);
}

function ContactEntry(props: { item: ContactItem })
{
	const item = props.item;

	if (item.url)
		return <a className="link" href={item.url}>{item.label}</a>;

	return <div>{item.label}</div>;
}

function ResumeSection(props: { title: string, items: ResumeItem[] })
{
	return (
		<>
			<ResumeDivider title={props.title} />
			<section>
				{ props.items.map((item, index) => <ResumeEntry key={index} info={item} />) }
			</section>
		</>
	);
}

export function Resume(props: { innerRef: RefObject<HTMLDivElement> })
{
	return (
		<div ref={props.innerRef} className="resume-container">
			<div className="resume">
				<div className="resume-content">
					<div className="resume-name">Isaac Hirzel</div>					
					<div className="contact">
						{ resumeData.contactItems.map((item, index) => <ContactEntry key={index} item={item} />) }
					</div>
					<ResumeDivider title="Skills - Professionally Proficient or Higher" />
					<section>
						{ resumeData.skills.join(" | ") }
					</section>
					<ResumeSection title="Experience" items={resumeData.experienceItems} />
					<ResumeSection title="Open Source Contributions" items={resumeData.openSourceItems} />
					<ResumeSection title="Education" items={resumeData.educationItems} />
					<ResumeSection title="Other" items={resumeData.otherItems} />
				</div>
			</div>
		</div>
	);
}
