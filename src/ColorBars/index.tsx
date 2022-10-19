import {FC} from 'react';
import  { Sequence } from  'remotion'
import { ColorBar } from './ColorBars';

import { yellow, black, red } from './Colors';


export const ColorBars : FC =()=>{
  const colors =[red ,yellow , black ];
  return (

    <>
    {colors.map((color , index)=>{
      return (
        <>
          <Sequence from={index  * 3} durationInFrames={10}>
       <ColorBar  key={color} color={color} index={index} />
      </Sequence>
          {/* <Sequence from={5} >
       <ColorBar  key={'black'} color={color} index={index} />
      </Sequence> */}
        </>
      )
    })}
    </>
  )
}