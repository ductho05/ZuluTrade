import { DARK_COLOR } from '@/utils/colors'
import Image from 'next/image'
import React from 'react'
import IMAGE from "../../assets/svg/awardLeaf.svg"

function AwardItem() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative flex justify-center items-center w-[180px] h-[180px] mt-[30px]">
                <p
                    style={{
                        color: `${DARK_COLOR}`
                    }}
                    className="text-[0.75rem] font-[700] text-center"
                >
                    UF AWARDS <br></br> CYPRUS, 2022
                </p>
                <Image
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }}
                    src={IMAGE}
                />
            </div>
            <h1
                style={{
                    color: `${DARK_COLOR}`
                }}
                className="text-[18px] font-[600] text-center mt-[20px]"
            >
                Best Social Trading Solution
            </h1>
        </div>
    )
}

export default AwardItem