import React from 'react'
import { BORDER_COLOR, LIGHT_GRAY } from '@/utils/colors'
import Image from 'next/image'
import LOGO_FOOTER from "@/assets/svg/logos/logo.svg"

function Footer() {
    return (
        <div className="flex flex-col lg:flex-row"
            style={{
                borderTop: `1px solid ${BORDER_COLOR}`,
                backgroundColor: `${LIGHT_GRAY}`,
                borderRadius: "12px 12px 0 0",
                padding: '40px'
            }}
        >
            <div className="lg:flex-[2] lg:justify-start lg:my-0 my-[10px] flex flex-col items-center w-full justify-center">
                <Image src={LOGO_FOOTER} alt="logo footer"
                    style={{
                        width: '200px',
                        height: '36px',
                        objectFit: 'cover'
                    }}
                />
                <p className="text-[15px] my-[10px] text-gray-500 font-[500] ml-[6px]">© 2023</p>
            </div>

            <div className="lg:flex-[4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="text-[14px] font-[500] text-center md:text-left">
                    <h1 className="text-gray-400">Legal</h1>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Terms Of Service</p>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Privacy Policy</p>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Risk Disclaimer</p>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Conflict of Interest Policy</p>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Declaration of Consent</p>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">End-User License Agreement</p>
                </div>
                <div className="text-[14px] font-[500] text-center md:text-left">
                    <h1 className="text-gray-400">Tools</h1>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Calculator</p>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Calendar</p>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Pricing</p>
                </div>
                <div className="text-[14px] font-[500] text-center md:text-left">
                    <h1 className="text-gray-400">About us</h1>
                    <p className="hover:text-[#fd7e14] cursor-pointer py-[6px]">Company</p>
                </div>
            </div>
        </div>
    )
}

export default Footer