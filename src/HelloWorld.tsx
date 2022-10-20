import {spring , Img , staticFile } from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { ColorBars } from './ColorBars';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

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
							
							 <Sequence from={0} durationInFrames={20}>
							  <AbsoluteFill style={{  justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        fontSize: 80,
				opacity:opacity}}>
								<ColorBars/>
								<Img src={require("./hpd.svg")} />
								 


							 </AbsoluteFill>
			
					</Sequence> 

	</div>
				</>
		
	);
};

//line by iteration of hpd logo 
