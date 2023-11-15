import { APP_NAME } from "@/utils/constant";

export const metadata = {
    title: `${APP_NAME} - Sign Up Account`
}

function RegisterLayout({ children }) {
    return (
        <div className="flex flex-col items-center justify-center p-[20px]">
            {children}
        </div>
    )
}

export default RegisterLayout