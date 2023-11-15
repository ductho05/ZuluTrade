import Image from 'next/image'
import React from 'react'
import LOGO from "@/assets/svg/logos/logo.svg"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { BORDER_COLOR, ORANGE_COLOR } from '@/utils/colors';
import Link from 'next/link';
import { headerRoutes } from '@/routes';
import { Button } from 'antd';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

function Header() {

    const [isSticky, setIsSticky] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsSticky(() => window.scrollY > 0 ? true : false)
        })
    })

    return (
        <div
            className={`px-[40px] py-[16px] bg-white flex items-center justify-between z-50
            ${isSticky && "fixed top-0 left-0 right-0 delay-300 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"}`}
            style={{
                borderBottom: `${isSticky ? "none" : `1px solid ${BORDER_COLOR}`}`
            }}
        >
            <div className="flex items-center">
                <Link href="/">
                    <Image src={LOGO} alt="logo"
                        style={{
                            width: '200px',
                            height: '38px',
                            objectFit: 'cover'
                        }}
                    />
                </Link>
                <div className="flex items-center ml-[100px]">
                    {
                        headerRoutes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className="relative group px-[14px]"
                            >
                                <p className="group-hover:text-[#fd7e14] text-[14px] text-gray-400 font-[500]">
                                    {route.name}
                                </p>
                                <p className="absolute bottom-[-22px] left-[-4px] h-[2px] w-[110%] group-hover:bg-[#fd7e14]"></p>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="flex items-center">
                <Link href="/login">
                    <Button
                        type="text"
                        icon={<LoginIcon />}
                        style={{
                            margin: "0 10px"
                        }}
                    >
                        Login
                    </Button>
                </Link>
                <Link href="/register">
                    <Button
                        icon={<PersonAddAltOutlinedIcon />}
                        className="flex items-center"
                        style={{
                            backgroundColor: `${ORANGE_COLOR}`,
                            color: '#fff',
                            border: 'none',
                            boxShadow: 'none',
                            marginRight: '10px',
                            borderRadius: '1000px'
                        }}
                    >
                        Register
                    </Button>
                </Link>
                <DarkModeOutlinedIcon className="text-[24px] text-gray-600 hover:text-[#fd7e14] cursor-pointer" />
            </div>
        </div>
    )
}

export default Header