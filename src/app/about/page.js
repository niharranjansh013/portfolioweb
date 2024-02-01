"use client"
import { AppText, aboutSection } from '@/configuration.json';
import React from 'react';
import Typewriter from 'typewriter-effect'
import wave from '../../image/wave.png'
import Image from 'next/image';
const About = () => {
  return (
    <div>
      <Image src={wave} className='w-screen h-[600px]'/>
      <div className='h-[600px] md:h-[300px] w-full text-center font-bold'>
        <h2 className='text-[50px] -mt-[450px] md:-mt-[400px] '>{AppText.About}</h2>
        {/* <h2 className='px-14 mt-9'>{AppText.aboutMeDescripion}</h2> */}
        <Typewriter
  options={{
    strings:[AppText.aboutMeDescripion],
    autoStart: true,
    loop: true,
    
  }}
/>
      </div>
      <div className='flex flex-col mt-[-170px] md:mt-[-40px] md:flex-row justify-around items-center'>
        {
          aboutSection.map((item,index)=>{
          return <>
          <div className='hover:bg-gray-800 mb-5 p-7 rounded-2xl'>
              <Image src={item.image}
              
              width={250}
              height={250} className='object-cover rounded-xl'/>
              <h2 className='font-bold text-left'>{item.title}</h2>
              <h2>{item.desc}</h2>
            </div>
            </>
          
          })
        }
      </div>
    </div>
    
  );
}

export default About;
