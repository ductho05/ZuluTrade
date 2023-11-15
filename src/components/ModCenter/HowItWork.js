import { BACKGROUND_GRAY, DARK_COLOR, ORANGE_COLOR } from '@/utils/colors'
import { ClockCircleOutlined, GoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMAGE from "../../assets/images/homepages/How-it-works-creative.png"

function HowItWork() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <Image src={IMAGE}
                style={{
                    width: '480px',
                    height: '384px',
                    objectFit: 'contain'
                }}
            />
            <div className="lg:ml-[100px] md:ml-[40px]">
                <h1
                    style={{
                        color: `${DARK_COLOR}`
                    }}
                    className="text-[24px] font-[700] mb-[10px]">
                    How it works
                </h1>
                <div className="flex items-center mb-[10px]">
                    <p
                        style={{
                            backgroundColor: `${BACKGROUND_GRAY}`
                        }}
                        className="flex items-center justify-center w-[24px] h-[24px] rounded-[50%] text-[14px] font-[500]"
                    >
                        1
                    </p>
                    <div>
                        <p className="ml-[10px] text-gray-700 font-[500] text-[16px]">
                            Leaders join ZuluTrade
                        </p>
                        <p className="ml-[10px] text-gray-700 text-[14px]">
                            connect their account and share their trading strategy
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-[10px]">
                    <p
                        style={{
                            backgroundColor: `${BACKGROUND_GRAY}`
                        }}
                        className="flex items-center justify-center w-[24px] h-[24px] rounded-[50%] text-[14px] font-[500]"
                    >
                        2
                    </p>
                    <div>
                        <p className="ml-[10px] text-gray-700 font-[500] text-[16px]">
                            ZuluTrade ranks Leaders
                        </p>
                        <p className="ml-[10px] text-gray-700 text-[14px]">
                            based on performance, stability, behavior and outlook
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-[10px]">
                    <p
                        style={{
                            backgroundColor: `${BACKGROUND_GRAY}`
                        }}
                        className="flex items-center justify-center w-[24px] h-[24px] rounded-[50%] text-[14px] font-[500]"
                    >
                        3
                    </p>
                    <div>
                        <p className="ml-[10px] text-gray-700 font-[500] text-[16px]">
                            Investors select the Leaders to copy
                        </p>
                        <p className="ml-[10px] text-gray-700 text-[14px]">
                            according to their investment capital and risk appetite and outlook
                        </p>
                    </div>
                </div>
                <Link href="/register">
                    <Button
                        className="text-[16px] font-[500] mt-[40px]"
                        style={{
                            backgroundColor: `${ORANGE_COLOR}`,
                            color: '#fff',
                            width: '220px',
                            height: '38px',
                            borderRadius: '1000px',
                            border: 'none'
                        }}
                    >
                        Create Account
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HowItWork