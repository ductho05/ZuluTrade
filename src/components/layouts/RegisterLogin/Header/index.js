import Image from 'next/image'
import React from 'react'
import LOGO from "@/assets/svg/logos/logo.svg"
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { BORDER_COLOR } from '@/utils/colors';
import Link from 'next/link';

function Header() {
    return (
        <div
            className="px-[40px] py-[16px] bg-white flex items-center justify-between"
            style={{
                borderBottom: `1px solid ${BORDER_COLOR}`
            }}
        >
            <Link href="/">
                <Image src={LOGO} alt="logo"
                    style={{
                        width: '130px',
                        height: '24px',
                        objectFit: 'cover'
                    }}
                />
            </Link>

            <div className="flex items-center">
                <div className="flex items-center mr-[24px] cursor-pointer">
                    <InstallMobileIcon className="text-[24px] text-gray-600 mr-[10px]" />
                    <p className={`text-gray-600 font-[500] hidden lg:block text-[14px] hover:text-[#fd7e14]`}>
                        Continue with mobile phone
                    </p>
                </div>
                <DarkModeOutlinedIcon className="text-[24px] text-gray-600 hover:text-[#fd7e14] cursor-pointer" />
            </div>
        </div>
    )
}

export default Header