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
import { motion } from 'framer-motion';

function Header() {

    const [isSticky, setIsSticky] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsSticky(() => window.scrollY > 0 ? true : false)
        })
    })

    const genericHamburgerLine = `h-1 w-[40px] my-1 rounded-full transition ease transform duration-300`;

    const openMenuTablet = {
        open: { transform: 'translateX(0px)', transition: 2 },
        closed: { transform: 'translateX(-1025px)', transition: 2 },
    };

    return (
        <>
            <div
                className={`px-[20px] md:px-[40px] py-[16px] bg-white z-50
            ${isSticky && "fixed top-[-2px] left-0 right-0 delay-300 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"}`}
                style={{
                    borderBottom: `${isSticky ? "none" : `1px solid ${BORDER_COLOR}`}`
                }}
            >
                <Link href="/" className={`lg:hidden flex justify-center ${isSticky ? "hidden" : "block"}`}>
                    <Image src={LOGO} alt="logo"
                        style={{
                            width: '150px',
                            height: '25px',
                            objectFit: 'contain'
                        }}
                    />
                </Link>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            className="flex lg:hidden flex-col h-12 w-[50px] justify-center items-center group"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div
                                className={`${genericHamburgerLine} bg-black ${isOpen
                                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
                                    }`}
                            />
                            <div className={`${genericHamburgerLine} bg-black ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                            <div
                                className={`${genericHamburgerLine} bg-black ${isOpen
                                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
                                    }`}
                            />
                        </button>
                        <Link href="/" className="hidden lg:block">
                            <Image src={LOGO} alt="logo"
                                style={{
                                    width: '200px',
                                    height: '38px',
                                    objectFit: 'contain'
                                }}
                            />
                        </Link>
                        <div className="hidden lg:flex items-center ml-[100px]">
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
                                className="hidden lg:flex"
                                type="text"
                                icon={<LoginIcon />}
                                style={{
                                    margin: "0 10px"
                                }}
                            >
                                Login
                            </Button>
                            <LoginIcon className="lg:hidden flex text-gray-600" />
                        </Link>
                        <Link href="/register">
                            <Button
                                icon={<PersonAddAltOutlinedIcon />}
                                className="hidden lg:flex items-center"
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
                            <PersonAddAltOutlinedIcon className="lg:hidden flex mx-[10px] text-gray-600" />
                        </Link>
                        <DarkModeOutlinedIcon className="text-[24px] text-gray-600 hover:text-[#fd7e14] cursor-pointer" />
                    </div>
                </div>
            </div>
            <motion.div
                className="w-screen h-screen bg-white z-50 fixed left-0 top-[77px] lg:hidden"
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={openMenuTablet}
            >
                <ul className='list-none py-[20px] px-[4vw]'>
                    {
                        headerRoutes.map(route => (
                            <li onClick={() => setIsOpen(false)} className='cursor-pointer uppercase text-black hover:text-[#000]  py-[15px] border-b-[1px] border-solid border-[#dcdce9]'>
                                <Link key={route.path} href={route.path} className='block'>
                                    {route.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </motion.div>
        </>
    )
}

export default Header