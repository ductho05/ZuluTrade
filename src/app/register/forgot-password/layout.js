import { APP_NAME } from '@/utils/constant'
import React from 'react'

export const metadata = {
    title: `${APP_NAME} - Forgot Password`
}

function ForgotPasswordLayout({ children }) {
    return (
        <div>{children}</div>
    )
}

export default ForgotPasswordLayout