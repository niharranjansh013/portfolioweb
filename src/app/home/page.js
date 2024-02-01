"use client"
import React from 'react';
import { AppText } from '../../configuration.json';
import photo from '../../image/nihar.jpeg'
import Image from 'next/image';
import Typewriter from 'typewriter-effect'
import '../home/home.css'
const Home = () => {
  return (
    <div className='mt-2 flex px-5 md:px-20 flex-col items-center md:flex-row sticky bottom-0'>
      <div>
      <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>
      <h1 className='text-[40px] font-bold'>{AppText.iam}
     <span className='inline-block'>
      <Typewriter
  options={{
    strings:[AppText.name, AppText.FrontedDeveloper,AppText.UIUXDesigner],
    autoStart: true,
    loop: true,
    
  }}
/></span></h1>

      {/* <span className='text-green-500'>{AppText.name}</span></h1> */}

      <h1 className='text-[15px] mt-4 '>{AppText.aboutMeDescripion}</h1>
      <button className='bg-green-300 p-2 px-3 rounded-3xl mt-5
      transition-all ease-in-out hover:scale-105 text-black font-bold '>Resume</button>
      
      </div>
      <Image src={photo} className='w-[200px] md:w-[250px] mt-6 md:ml-[200px]'/>
    </div>
  );
}

export default Home;
