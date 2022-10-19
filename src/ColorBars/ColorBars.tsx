import {FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const ColorBar: FC<{color: string; index: number}> = ({
	color,
	index,
}) => {
	const {width} = useVideoConfig();
	const barheight = 50;
	const barWidth = width / 5;
	const BarLeft = width * index;

	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 3], [0, 1], {
		extrapolateRight:'clamp',
	});

	return (
		<div
			style={{
                opacity:opacity,
                backgroundColor: 'black',
				width: barWidth,
				height: barheight,
				left: BarLeft,
				// position: 'fixed',
			}}
		/>  
	);
};
