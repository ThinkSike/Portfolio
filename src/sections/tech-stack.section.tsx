import { FaAws, FaDocker, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {
	SiD3Dotjs,
	SiExpress,
	SiFastapi,
	SiFlask,
	SiFramer,
	SiGithubactions,
	SiGraphql,
	SiHuggingface,
	SiKubernetes,
	SiLinux,
	SiMongodb,
	SiMysql,
	SiOpenai,
	SiPostgresql,
	SiPytorch,
	SiRedis,
	SiScikitlearn,
	SiTailwindcss,
	SiTensorflow,
	SiTypescript
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core AI Stack | Work With',
		items: [
			{
				title: 'Python',
				icon: <FaPython color='#3776AB' />,
				color: 'rgba(55,118,171,0.7)',
			},
			{
				title: 'TypeScript',
				icon: <SiTypescript color='#3178C6' />,
				color: 'rgba(49,120,198,0.7)',
			},
			{
				title: 'Linux',
				icon: <SiLinux color='#FCC624' />,
				color: 'rgba(252,198,36,0.6)',
			},
		],
	},
	{
		heading: 'AI / ML Frameworks',
		items: [
			{
				title: 'PyTorch',
				icon: <SiPytorch color='#EE4C2C' />,
				color: 'rgba(238,76,44,0.7)',
			},
			{
				title: 'TensorFlow',
				icon: <SiTensorflow color='#FF6F00' />,
				color: 'rgba(255,111,0,0.7)',
			},
			{
				title: 'Scikit-learn',
				icon: <SiScikitlearn color='#F7931E' />,
				color: 'rgba(247,147,30,0.7)',
			},
			{
				title: 'Hugging Face',
				icon: <SiHuggingface color='#FFD21E' />,
				color: 'rgba(255,210,30,0.7)',
			},
			{
				title: 'OpenAI / Azure OpenAI',
				icon: <SiOpenai color='#FFFFFF' />,
				color: 'rgba(255,255,255,0.4)',
			},
		],
	},
	{
		heading: 'LLM & Prompt Engineering',
		items: [
			{
				title: 'Prompt Engineering (RAG)',
				icon: <SiOpenai color='#10A37F' />,
				color: 'rgba(16,163,127,0.6)',
			},
			{
				title: 'LangChain / LlamaIndex',
				icon: <SiOpenai color='#10A37F' />,
				color: 'rgba(16,163,127,0.6)',
			},
			{
				title: 'Vector Embeddings',
				icon: <SiOpenai color='#10A37F' />,
				color: 'rgba(16,163,127,0.6)',
			},
			{
				title: 'Model Evaluation & Fine-tuning',
				icon: <SiOpenai color='#10A37F' />,
				color: 'rgba(16,163,127,0.6)',
			},
		],
	},
	{
		heading: 'Backend & APIs',
		items: [
			{
				title: 'FastAPI',
				icon: <SiFastapi color='#009688' />,
				color: 'rgba(0,150,136,0.7)',
			},
			{
				title: 'Flask',
				icon: <SiFlask color='#FFFFFF' />,
				color: 'rgba(255,255,255,0.4)',
			},
			{
				title: 'Node.js',
				icon: <FaNodeJs color='#68A063' />,
				color: 'rgba(104,160,99,0.7)',
			},
			{
				title: 'Express.js',
				icon: <SiExpress color='#FFFFFF' />,
				color: 'rgba(255,255,255,0.4)',
			},
			{
				title: 'REST / GraphQL',
				icon: <SiGraphql color='#E10098' />,
				color: 'rgba(225,0,152,0.6)',
			},
		],
	},
	{
		heading: 'Frontend (AI Interfaces)',
		items: [
			{
				title: 'React / Next.js',
				icon: <FaReact color='#61DBFB' />,
				color: 'rgba(97,219,251,0.7)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='#06B6D4' />,
				color: 'rgba(6,182,212,0.7)',
			},
			{
				title: 'Framer Motion',
				icon: <SiFramer color='#BB86FC' />,
				color: 'rgba(187,134,252,0.6)',
			},
			{
				title: 'D3 / Chart.js',
				icon: <SiD3Dotjs color='#F9A03C' />,
				color: 'rgba(249,160,60,0.7)',
			},
		],
	},
	{
		heading: 'Databases & Storage',
		items: [
			{
				title: 'PostgreSQL',
				icon: <SiPostgresql color='#336791' />,
				color: 'rgba(51,103,145,0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='#00758F' />,
				color: 'rgba(0,117,143,0.7)',
			},
			{
				title: 'MongoDB',
				icon: <SiMongodb color='#00ED64' />,
				color: 'rgba(0,237,100,0.7)',
			},
			{
				title: 'Redis',
				icon: <SiRedis color='#DC382D' />,
				color: 'rgba(220,56,45,0.7)',
			},
		],
	},
	{
		heading: 'Cloud & MLOps',
		items: [
			{
				title: 'Docker',
				icon: <FaDocker color='#2496ED' />,
				color: 'rgba(36,150,237,0.7)',
			},
			{
				title: 'Kubernetes',
				icon: <SiKubernetes color='#326CE5' />,
				color: 'rgba(50,108,229,0.7)',
			},
			{
				title: 'AWS / Azure / GCP',
				icon: <FaAws color='#FF9900' />,
				color: 'rgba(255,153,0,0.7)',
			},
			{
				title: 'CI/CD (GitHub Actions)',
				icon: <SiGithubactions color='#2088FF' />,
				color: 'rgba(32,136,255,0.7)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, idx) => (
								<GlowBox
									key={idx}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
