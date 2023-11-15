import { APP_NAME } from "@/utils/constant";

export const metadata = {
    title: `${APP_NAME} - Login to your Account`
}

function LoginLayout({ children }) {
    return (
        <div>{children}</div>
    )
}

export default LoginLayout