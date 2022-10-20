import {spring, Img, staticFile} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ColorBars} from './ColorBars';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

import {  black,red,white,yellow } from '../src/ColorBars/Colors';
import { Directions } from './Directions';

const colors= [black  , red , white, yellow]

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<>
			<div>
				{/* Sequences can shift the time for its children! */}
				{/* <Sequence from={2*5} durationInFrames={durationInFrames}>
							 </Sequence> */}
				{/* The subtitle will only enter on the 75th frame. */}
				{/* <AbsoluteFill
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'yellow',
							textDecoration: 'underline	',
							// color:'white',
							fontSize: .7,
							// opacity: opacity,
							transition: 'all ease 5s',
							// animation :
						}}
					
					> */}
					<Sequence durationInFrames={Infinity} from={5} >
						
						<AbsoluteFill 	style={
								{
							padding:`14px `,
								// alignItems: 'center',
								backgroundColor: `rgb(0, 157, 40) `,
	
								fontSize: 4 	,
								// opacity: index - .2,
								transition: 'all ease 1s',
							}}
							>
			<Img src={require('./hpd.svg')} />
						</AbsoluteFill>
					</Sequence>
					{Directions.map((val,index)=>{
						return (
							<>
							<Sequence from={index*5} durationInFrames={Infinity}>
					<AbsoluteFill
						style={
							{
						padding:`${index *4}px `,
							alignItems: 'center',
							backgroundColor: `rgb(0, 157, ${index *10}) `,

							fontSize: index 	,
							transform: `scale${index * 10}`,
							// opacity: index - .2,
							transition: 'all ease 1s',
						}}
					>
						{/* <ColorBars /> */}
						<Img src={require('./hpd.svg')} />
					</AbsoluteFill>
				</Sequence>
							</>
						)

					})}
					
			
				{/* </AbsoluteFill> */}

			</div>
		</>
	);
};

//line by iteration of hpd logo
