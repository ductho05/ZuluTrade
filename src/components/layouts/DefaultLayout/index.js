"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import RegisterLogin from '../RegisterLogin'
import Header from './Header'
import Footer from './Footer'

function DefaultLayout({ children }) {

    const pathName = usePathname()
    const [isAccountPage, setIsAccountPage] = React.useState(false)

    React.useEffect(() => {
        setIsAccountPage(() => pathName.startsWith('/login') || pathName.startsWith('/register') ? true : false)
    }, [pathName])

    return (
        <>
            {
                isAccountPage
                    ? <RegisterLogin>
                        {children}
                    </ RegisterLogin>
                    : <div>
                        <Header />
                        {children}
                        <Footer />
                    </div>
            }
        </>
    )
}

export default DefaultLayout