import React from 'react'
import { BORDER_COLOR, LIGHT_GRAY } from '@/utils/colors'
import Image from 'next/image'
import LOGO_FOOTER from "@/assets/images/logos/footerLogo.png"

function Footer() {
    return (
        <div className="lg:mx-[60px] flex flex-col lg:flex-row"
            style={{
                border: `1px solid ${BORDER_COLOR}`,
                borderBottom: 'none',
                backgroundColor: `${LIGHT_GRAY}`,
                borderRadius: "12px 12px 0 0",
                padding: '20px'
            }}
        >
            <div className="lg:flex-[1] lg:justify-start lg:my-0 my-[10px] flex items-center w-full justify-center">
                <Image src={LOGO_FOOTER} alt="logo footer"
                    style={{
                        width: '90px',
                        height: '18px',
                        objectFit: 'contain'
                    }}
                />
                <p className="text-[15px] text-gray-500 font-[500] ml-[6px]">© 2023</p>
            </div>

            <div className="lg:flex-[4] flex flex-col lg:flex-row justify-center items-center">
                <p className="text-[15px] text-gray-500 cursor-pointer px-[12px] font-[500]">
                    Terms Of Service
                </p>
                <p className="text-[15px] text-gray-500 cursor-pointer px-[12px] font-[500]">
                    Privacy Policy
                </p>
                <p className="text-[15px] text-gray-500 cursor-pointer px-[12px] font-[500]">
                    Risk Disclaimer
                </p>
            </div>
        </div>
    )
}

export default Footer