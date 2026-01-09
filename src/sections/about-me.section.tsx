import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
	title: 'Experience',
	items: [
		{
			title: 'AI Prompt Engineer & Game Developer',
			place: 'Gamecloud Technologies Pvt. Ltd.',
			timePeriod: 'June 2024 - Oct 2024',
			description: (
				<ul>
					<li>
						Built and refined prompt workflows for AI-driven game interactions,
						focusing on intent handling, response quality, and behavioral
						consistency.
					</li>
					<li>
						Implemented AI logic within gameplay systems and validated outputs
						across multiple scenarios to improve reliability and reduce
						unexpected behavior.
					</li>
					<li>
						Collaborated closely with designers and developers to ensure AI
						behavior aligned with gameplay flow and enhanced user experience.
					</li>
				</ul>
			),
		},
		{
			title: 'Software Test Engineer',
			place: 'Kanix Infotech Pvt. Ltd.',
			timePeriod: 'Aug 2023 - Sept 2023',
			description: (
				<ul>
					<li>
						Conducted functional, regression, and UI testing on enterprise ERP
						systems to validate system logic and data-driven workflows.
					</li>
					<li>
						Documented defects, verified fixes, and collaborated with
						development teams to improve system reliability and edge-case
						handling.
					</li>
				</ul>
			),
		},
		{
			title: 'Python Programmer',
			place: 'ITR Plant, GTT Foundation',
			timePeriod: 'July 2023 - Sept 2023',
			description: (
				<ul>
					<li>
						Developed Python scripts for data processing and automation,
						strengthening core programming skills applicable to AI and ML
						pipelines.
					</li>
					<li>
						Applied debugging and optimization techniques to improve script
						efficiency, performance, and maintainability.
					</li>
				</ul>
			),
		},
	],
},
{
	title: 'Certification',
	items: [
		{
			title: 'Artificial Intelligence and Machine Learning',
			place: 'Microsoft',
			timePeriod: '',
			description: (
				<ul>
					<li>
						Completed a professional certification focused on AI concepts,
						machine learning fundamentals, and real-world applications.
					</li>
				</ul>
			),
		},
	],
},
{
	title: 'Education',
	items: [
		{
			title: 'Bachelor of Technology in Computer Science',
			place: 'University of Pune',
			timePeriod: '2024 - Present',
			description: '',
		},
	],
},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
					👋 Hi, I'm Tiya Bhavsar, an adaptable and driven AI-focused professional.
				</p>
				<p>
					I combine <strong>strategic thinking</strong> with an <strong>innovative,
					data-driven mindset</strong> to design and build intelligent systems that
					deliver real-world impact. With a strong foundation in <strong>machine
					learning, data analysis, and scalable system design</strong>, I focus on
					transforming complex data into actionable insights and efficient solutions.
				</p>
				<p>
					I thrive in collaborative, research-oriented environments, leveraging my
					<strong>analytical skills</strong>, <strong>creative problem-solving</strong>,
					and commitment to <strong>continuous learning</strong> to improve model
					performance, optimize workflows, and support high-performing teams. When I’m
					not experimenting with models, I’m exploring new AI technologies or refining
					my skills through hands-on projects.
				</p>

				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items?.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
