import { Alex_Brush, Montserrat, Moo_Lah_Lah, Moon_Dance } from "next/font/google"
import { ReactNode } from "react";

const montserrat = Montserrat({weight: "400", subsets: ["latin"]})
const HighlightText = ({className, children}: {className?: string; children: ReactNode;})=>{
    return (
        <span className={`${montserrat.className} ${className || ''} text-primary font-bold text-5xl`}>{children}</span>
    )
}

export default HighlightText