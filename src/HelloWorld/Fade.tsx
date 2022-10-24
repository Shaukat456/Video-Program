import React from 'react';
import {spring, useCurrentFrame, useVideoConfig , interpolate} from 'remotion';
import {FONT_FAMILY} from './constants';

const title: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'center',
	position: 'absolute',
	bottom: 160,
	width: '100%',
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const Fade: React.FC<{
	titleText: string;
	titleColor: string;
	picture?:String
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();


	const { fps } = useVideoConfig();
		
	const bounceAnimation = spring({
		frame: frame ,
		from: 0,
		to: 1,
		fps,
		config: { damping: 10.5, stiffness: 160, mass: 2 },
});


	const words = titleText.split(' ');
	const opacity = interpolate(frame, [0, 30], [1,0]);
	return (
		<h1 style={title}>
			{words.map((t, i) => {
				const delay = i * 5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame + delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							height:200,
							width:400,
              opacity:opacity,
							transform: `scale(${bounceAnimation})`,
						}}
					>
						&#128077;
						
					</span>
				);
			})}
		</h1>
	);
};
