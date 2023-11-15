import { DARK_COLOR, ORANGE_COLOR } from '@/utils/colors'
import { ClockCircleOutlined, GoldOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'
import IMAGE from "../../assets/images/homepages/trading-is-hard-creative.png"

function ContentImageLeft() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <Image src={IMAGE}
                style={{
                    width: '426px',
                    height: '320px',
                    objectFit: 'contain'
                }}
            />
            <div className="md:ml-[100px]">
                <h1
                    style={{
                        color: `${DARK_COLOR}`
                    }}
                    className="text-[24px] font-[700] mb-[10px]">
                    Truth is... <br></br> Trading is not easy
                </h1>
                <div className="flex items-center">
                    <ClockCircleOutlined
                        style={{
                            color: `${ORANGE_COLOR}`
                        }}
                        className="text-[20px]"
                    />
                    <p className="ml-[10px] text-gray-600 text-[16px] mb-[10px]">
                        Studying the market takes time
                    </p>
                </div>
                <div className="flex items-center">
                    <GoldOutlined
                        style={{
                            color: `${ORANGE_COLOR}`
                        }}
                        className="text-[24px]"
                    />
                    <p className="ml-[10px] text-gray-600 text-[16px] mb-[6px]">
                        Building and maintaining a trading strategy is hard
                    </p>
                </div>
                <p className="mt-[20px] text-gray-600 text-[16px]">
                    That's why only <span className="font-[600]">11-26% of manual investors</span> end up winning.
                </p>
            </div>
        </div>
    )
}

export default ContentImageLeft