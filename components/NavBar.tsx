"use client"
import { Tooltip } from "antd"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { Mail } from "react-feather"

const NavBar = ()=>{
    const {resolvedTheme} = useTheme()
    return (
        <header className="sticky top-0 h-20 z-50 shadow-md">
            <nav className="container mx-auto px-4 pr-5 py-2 flex justify-between items-center">
                <Link href="#" className="font-bold text-xl">
                    <Image 
                        src={"/antoni-logo.png"} 
                        width={45}
                        height={45}
                        alt="logo"
                    />
                </Link>
                <ul className="flex items-center justify-between">
                <li>
                    <Tooltip title="antonineutron@gmail.com">
                        <Link href="mailto:antonineutron@gmail.com" className="px-4 mx-8 hover:text-primary">
                            <Mail size={40} className="w-16 text-white"/>
                        </Link>
                    </Tooltip>
                </li>
                <li>
                    <Link href="https://twitter.com/neutronUNO" className="px-4 mx-8 invert hover:text-primary">
                        <Image 
                            src={"/twitterx.png"} 
                            width={40}
                            height={40}
                            alt="logo"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/antonineutron" className="px-4 mx-8 invert hover:text-primary">
                        <Image 
                            src={"/github.png"} 
                            width={40}
                            height={40}
                            alt="logo"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/anthony-ameh-b3b8aa1a6/" className="px-4 mx-8 mr-4 hover:text-primary">
                        <Image 
                            src={"/linkedin.png"} 
                            width={45}
                            height={45}
                            alt="logo"
                        />
                    </Link>
                </li>
                {/* <li>
                    <Link href="#" className="px-2 hover:text-primary">
                        <Image 
                            src={"/antoni-logo.png"} 
                            width={45}
                            height={45}
                            alt="logo"
                        />
                    </Link>
                </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar