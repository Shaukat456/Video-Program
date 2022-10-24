// import {spring, Img, staticFile} from 'remotion';
// import {
// 	AbsoluteFill,
// 	interpolate,
// 	Sequence,
// 	useCurrentFrame,
// 	useVideoConfig,
// } from 'remotion';
// import {ColorBars} from './ColorBars';
// import {Logo} from './HelloWorld/Logo';
// import {Subtitle} from './HelloWorld/Subtitle';
// import {Title} from './HelloWorld/Title';

// import {black, red, white, yellow} from '../src/ColorBars/Colors';
// import {Directions} from './Directions';

// const colors = [black, red, white, yellow];

// export const HelloWorld: React.FC<{
// 	titleText: string;
// 	titleColor: string;
// }> = ({titleText, titleColor}) => {
// 	const frame = useCurrentFrame();
// 	const {durationInFrames, fps} = useVideoConfig();

// 	// Animate from 0 to 1 after 25 frames
// 	const logoTranslationProgress = spring({
// 		frame: frame - 25,
// 		fps,
// 		config: {
// 			damping: 100,
// 		},
// 	});

// 	// Move the logo up by 150 pixels once the transition starts
// 	const logoTranslation = interpolate(
// 		logoTranslationProgress,
// 		[0, 1],
// 		[0, -150]
// 	);

// 	// Fade out the animation at the end
// 	// const opacity = interpolate(
// 	// 	frame,
// 	// 	[durationInFrames , durationInFrames ],
// 	// 	[1, 0],
// 	// 	{
// 	// 		extrapolateLeft: 'clamp',
// 	// 		extrapolateRight: 'clamp',
// 	// 	}
// 	// );

// 	// A <AbsoluteFill> is just a absolutely positioned <div>!
// 	return (
// 		<>
// 			<div>

// 						<Sequence from={0} durationInFrames={Infinity }>
// 								<AbsoluteFill
// 									style={{
// 										padding: `14%`,
// 										// paddingTop:`23px`,
// 										alignItems: 'center',
// 										justifyContent:"center",
// 										backgroundColor: `white `,
// 										color:'white',
// 										transition: 'all ease 1s',
// 									}}
// 								>
// 									{/* <ColorBars /> */}
// 									<Img src={require('./hpd.svg')} />
// 								</AbsoluteFill>
// 							</Sequence>

// 				{/* {Directions.map((val, index) => {
// 								return (
// 						<>
// 							<Sequence from={index+1 } durationInFrames={Infinity }>
// 								<AbsoluteFill
// 									style={{
// 										paddingLeft: `${index *3}% `,
// 										// paddingLeft: `${}% `,
// 										paddingTop:`${index }%`,
// 										alignItems: 'center',
// 										backgroundColor: `rgb(100, 723, ${(index ) *10 }) `,
// 										color:'white',
// 										fontSize: index,
// 										// transform: `skew${index}deg`,
// 										// opacity: index/14,
// 										opacity: index/14,
// 										transition: 'all ease 4s',
// 									}}
// 								>
// 									{/* <ColorBars /> */}
// 									{/* <Img src={require('./hpd.svg')} />
// 								</AbsoluteFill>
// 							</Sequence>
// 						</>
// 					);
// 				})} */}

// 				{/* </AbsoluteFill> */}
// 			</div>
// 		</>
// 	);
// };

// //line by iteration of hpd logo
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Sequence
} from 'remotion';
import { Fade } from './HelloWorld/Fade';
import { Subtitle } from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';

export const HelloWorld: React.FC = () => {
	const frame = useCurrentFrame();
	// console.log(frame)
	const {fps,durationInFrames} = useVideoConfig();
	const scalePush1 = spring({
		fps,
		frame:frame + 100,
		config: {
			damping: 200,
		},
	});
	const scalePush2 = spring({
		fps,
		frame: frame -40,
			config: {
			damping: 200,
		},
	});
	const scalePush3 = spring({
		fps,
		frame: frame - 20,
		config: {
			damping: 200,
		},
	});
	// console.log('scalePush1', scalePush1);
	const scale = scalePush1 + scalePush2 + scalePush3;
	
	const right = 
	interpolate(scalePush1 ,[0,1 ] ,[1000,110] )+ 
	interpolate(scalePush2 ,[0,1 ] ,[100,61] )+
	interpolate(scalePush3 ,[0,1 ] ,[120,120] )

	const Up = 
	interpolate(scalePush1 ,[0,1 ] ,[-110,70] )+ 
	interpolate(scalePush2 ,[0,1 ] ,[0,61] )+
	interpolate(scalePush3 ,[0,1 ] ,[0,80] )
	// const left =
	// // 0-80 represents px or value that has to be increased
	// interpolate(scalePush1, [0, 1], [0, 80]) +
	// 	interpolate(scalePush2, [0, 1], [0, 80]) +
	// 	interpolate(scalePush3, [0, 1], [0, 80]);

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
		<AbsoluteFill
			style={{
				alignItems:"center",
				justifyContent: 'flex-end',
				// padding: 50,
				position:"relative",
				fontSize:40,
				backgroundColor: 'white',
			}}
		>
	<Sequence from={ 0} durationInFrames={50}>
		
					<Title titleText='' titleColor='' />
				</Sequence>
	{/* <Sequence from={ durationInFrames -110} durationInFrames={durationInFrames}> */}
	<Sequence from={50} durationInFrames={durationInFrames}>
<div style={{
	opacity:opacity
}}>

	{/* <Subtitle/> */}
			<Fade titleColor='' titleText=''/>
</div>
					{/* Fade  */}
				</Sequence>
			<p  style={
				{
					height: 100,
					width: 100,
					fontSize:50,
					color:"black",
					// backgroundColor: '#blck5',
					// margin:`scale(${scale})`,
					// transform: `scale(${scale}) translateX(${right}px)`,
					transform: `scale(${scale}) `,
			// /		transform: `scale(${scale}) translateY(-${Up}px)`,
						
				}
			} >

			{/* something 			 */}

			</p>

			
			{/* <div
				style={{
					height: 100,
					width: 100,
					// backgroundColor: '#4290f5',
					borderRadius: 40,
					transform: `scale(${scale}) translateX(${right}px)`,
					
				}}
				
			/> */}
			{/* <p>hello</p> */}
		</AbsoluteFill>
	);
};
