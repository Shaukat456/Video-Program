
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
} from 'remotion';
import {Fade} from './HelloWorld/Fade';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC = () => {
	const frame = useCurrentFrame();
	// console.log(frame)
	const {fps, durationInFrames} = useVideoConfig();

	const scalePush1 = spring({
		fps: fps,
		frame: frame +700,
		config: {
			damping: 200,
			// mass:5
		},
	});
	const scalePush2 = spring({
		fps ,
		frame: frame - 40,
		config: {
			// damping: 200,

		},
	});
	const scalePush3 = spring({
		// fps:(durationInFrames/fps) + 10 ,
		fps : (durationInFrames/fps) + 10 ,
		// durationRestThreshold:511,
		
		frame: frame ,
		config: {
			damping: 200,
		},
	});
	// console.log('scalePush1', scalePush1);

	const right =
		interpolate(scalePush1, [0, 1], [-1000, -1200]) +
		interpolate(scalePush2, [0, 1], [500, 3000]) +
		interpolate(scalePush3, [0, 1], [0, 1400]);

	const left =
		interpolate(scalePush1, [0, 1], [-1000, 1300]) +
		interpolate(scalePush2, [0, 1], [500, -3000]) -
		interpolate(scalePush3, [0, 1], [-130, 1100]);

	


	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (

		<>
		
		<AbsoluteFill
			style={{
	
				position: 'relative',
				fontSize: 40,
				backgroundColor: 'white',
				display: 'flex',
				flexDirection: 'column',
			}} 
		>
		

			<Sequence from={0} durationInFrames={durationInFrames}>
				<div
					style={{
						// opacity: opacity,
						height: 500,
						width: 700,
						// backgroundColor: 'black',
						borderRadius: 40,
						transform: `translateX(${right}px) `,
					}}
				>
					<div
						style={{
							border: '5px solid black ',
						}}
					>
						<h1>POST / LOGIN </h1>
						{/* <h1> &#8594;</h1> */}
						<h1> &#10230; </h1>
					</div>
				</div>
			</Sequence>
	

			<Sequence from={35} durationInFrames={durationInFrames }>
				{/* <Title titleText="" titleColor="" /> */}
				<div
					style={{
						height: 100,
						width: 100,
						opacity:opacity,
						transform: ` translateX(${right}px)`,
					}}
				>
					<div>
						<table>
							<tr>
								<th>Company</th>
								<th>Contact</th>
							</tr>

							<tr>
								<td>Alfreds Futterkiste</td>
								<td>Maria Anders</td>
							</tr>

							<tr>
								<td>Centro comercial Moctezuma</td>
								<td>Francisco Chang</td>
							</tr>
						</table>
					</div>
				</div>
			</Sequence>

		

	

		</AbsoluteFill>




		<AbsoluteFill
			style={{
	
				position: 'relative',
				fontSize: 40,
				top:10,
				backgroundColor: 'white',
				display: 'flex',
				flexDirection: 'column',
			}} 
		>
		

			<Sequence from={0} durationInFrames={durationInFrames}>
				<div
					style={{
						opacity: opacity,
						height: 500,
						width: 700,
						// backgroundColor: 'black',
						borderRadius: 40,
						transform: `translateX(${left}px) `,
					}}
				>
					<div
						style={{
							border: '5px solid black ',
						}}
					>
						<h1>POST / LOGIN </h1>
						{/* <h1> &#8594;</h1> */}
						<h1> &#10230; </h1>
					</div>
				</div>
			</Sequence>
			

			<Sequence from={0} durationInFrames={durationInFrames }>
				{/* <Title titleText="" titleColor="" /> */}
				<div
					style={{
						height: 100,
						width: 100,
						transform: ` translateX(${left}px)`,
					}}
				>
					<div>
						<table>
							<tr>
								<th>Company</th>
								<th>Contact</th>
							</tr>

							<tr>
								<td>Alfreds Futterkiste</td>
								<td>Maria Anders</td>
							</tr>

							<tr>
								<td>Centro comercial Moctezuma</td>
								<td>Francisco Chang</td>
							</tr>
						</table>
					</div>
				</div>
			</Sequence>

		</AbsoluteFill>




		</>
	);
};
