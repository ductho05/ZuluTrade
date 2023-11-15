"use client"
import { DARK_COLOR, SECONDARY_COLOR } from '@/utils/colors';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react'
import Lottie from 'react-lottie'
import animationData from "../../assets/jsons/crypto"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
};

function Intro() {

    return (
        <div className="py-[60px] px-[40px]">
            <div className="p-[10px] flex flex-col justify-center items-center">
                <p
                    style={{
                        color: `${DARK_COLOR}`
                    }}
                    className="text-[2.5rem] leading-[50px] text-center font-[600] mb-[20px]">
                    Investing made easy with <br></br> Copy Trading!
                </p>
                <p className="text-[20px] text-gray-600 font-[600] text-center mb-[10px]">
                    Go long or short? Go Zulu!
                </p>
                <p className='text-[1rem] text-gray-400 text-center mb-[20px]'>
                    Join the most transparent social trading network! <br></br> Copy Top Performing Leaders from different Brokers easily and reach your investment goals!
                </p>
                <Link href="/register">
                    <Button
                        style={{
                            backgroundImage: "linear-gradient(120deg, #ff7200 0%, #f6d365 100%)",
                            borderRadius: "100px",
                            border: `1px solid ${SECONDARY_COLOR}`,
                            color: '#fff',
                            width: '220px',
                            height: '40px',
                            boxShadow: '0 0 7px 1px rgba(255,114,0,.75)',
                            fontWeight: 'bold',
                        }}
                    >
                        Join Now
                    </Button>
                </Link>
            </div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )
}

export default Intro