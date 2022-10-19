import {FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const ColorBar: FC<{color: string; index: number}> = ({
	color,
	index,
}) => {
	const {width} = useVideoConfig();
	const barheight = 100;
	const barWidth = width / 4;
	const BarLeft = width * index;

	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 3], [0, 1], {
		extrapolateRight:'clamp',
	});

	return (
		<div
			style={{
                opacity:opacity,
                backgroundColor: color,
				width: barWidth,
				height: barheight,
				left: BarLeft + index ,
				// position: 'fixed',
			}}
		/>  
	);
};
