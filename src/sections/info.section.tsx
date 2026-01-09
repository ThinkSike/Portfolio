import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<a
				href='https://github.com/ThinkSike/portfolio'
				target='_blank'
				rel='noopener noreferrer'
				className='github-ribbon'
			>
				<div>⭐ Star this repo</div>
				<span></span>
			</a>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>Hi, I am</p>
			<TextHover
				text='TIYA-BHAVSAR'
				className='name'
			/>
			<p>AI Engineer | GenAI • LLMs • Automation</p>
			<FloatingButton
				label='Tech'
				className='sec'
				href='/#tech-stack'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/ThinkSike'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/tiya-bhavsar/'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='mailto:tiyaharishbhavsar@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
