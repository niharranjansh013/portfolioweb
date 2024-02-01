"use client"
import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { menuItems } from './configuration';
import Link from 'next/link';
import { header } from './configuration';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import 'animate.css';
export const Navbar = () => {
    const[toggle,setToggle]=useState(false)
    function fnClick(){
        setToggle(true)
    }
    function fntoggle(){
        setToggle(false)
    }
  return (
      <div className='p-[20px]  flex justify-between '>
                    {
                        header.map((obj,ind) => {
                            return (
                                <div className='text-[25px]' key={`h1_${ind}`}>
                                    <h1 >{obj.port}<span className='text-cyan-600 '>{obj.folio}</span></h1>
                                </div>
                            )
                        })
                    }
            <div>
            <ul className={`${styles.menu} flex `}>
                {
                    menuItems.map((obj, ind) => {
                        const { name, link, id } = obj
                        return (
                            <>
                                <li key={`li_${ind}`} className='mr-4 transition-all ease-out hover:scale-125 hidden md:flex'>
                                    <Link href={link} id={`${id}`}>{name}</Link>
                                </li>
                            </>

                        )
                    })
                }
            </ul>
            </div>
            <div className='cursor-pointer md:hidden lg:hidden' >
                {!toggle?<IoMdMenu onClick={fnClick} className='float-right text-xl'/>:<IoCloseSharp onClick={fntoggle} className='float-right'/>}
                {toggle?
                    <div>
                    <ul className={`${styles.menu} flex bg-gray-500 flex-col mt-8 p-3`}>
                        {
                            menuItems.map((obj, ind) => {
                                const { name, link, id } = obj
                                return (
                                    <>
                                        <li key={`li_${ind}`} className='mr-4 transition-all ease-out hover:scale-125 md:flex p-2'>
                                            <Link href={link} id={`${id}`}>{name}</Link>
                                        </li>
                                    </>
        
                                )
                            })
                        }
                    </ul>
                    </div>
                :null}
            </div>
            
        </div>
  );
}


