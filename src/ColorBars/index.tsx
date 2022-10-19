import {FC} from 'react';
import  { Sequence } from  'remotion'
import { ColorBar } from './ColorBars';

import { yellow, black, red, white } from './Colors';


export const ColorBars : FC =()=>{
  const colors =[red ,yellow , black , white];
  return (

    <>
    {colors.map((color , index)=>{
      return (
        <>
          <Sequence from={4}>
       <ColorBar  key={'black'} color={color} index={index} />
      </Sequence>
        </>
      )
    })}
    </>
  )
}