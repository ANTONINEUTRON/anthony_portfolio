import { Montserrat } from "next/font/google"
import { ReactNode } from "react"

const montserrat = Montserrat({weight: "400", subsets: ["latin"]})
const Header = ({children}:{children: ReactNode})=>{
    return (
        <h2 className={`text-xl py-4 text-primary ${montserrat.className}`}>
            {children}
        </h2>
    )
}

export default Header