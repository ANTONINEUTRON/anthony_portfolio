"use client"
import Link from "next/link"
import HighlightText from "./HighlightText"
import { Book } from "react-feather"
import { VisibleItemContext } from "@/context/VisibleItemProvider"
import { useContext } from "react"

const SideSection = ({className}: {className: string})=>{
    return (
        <div className={`${className} text-lg`}>
            <span className="text-primary lg:pl-2 pb-6">Hi, my name is</span><br/>
            <HighlightText>Anthony Ameh.</HighlightText> 
            <div className="my-3">
                A Software Engineer with 5+ years experience building great products across different domains. 
            </div>
            <div className="flex items-center justify-center md:pt-16">
            <div className="lg:w-2/5">
                <VertTabs />
            </div>
            </div>
        </div>
    )
}

const VertTabs = ()=>{
    const viContext  = useContext(VisibleItemContext)
    
    return (
        <ul className="hidden md:flex flex-col space-y space-y-4 text-sm font-medium md:me-4 mb-4 md:mb-0">
            {/* <li>
                <Link href="#about" className="inline-flex items-center px-4 py-3 text-white bg-gray-50 rounded-lg active w-full" aria-current="page">
                    
                </Link>
            </li> */}

            <li>
                <Link href={{ pathname: "/", hash: "about"}} className={`${viContext!!.stringValue.includes("about") && "bg-primary"} text-slate-900 inline-flex items-center hover:bg-primary px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 w-full`}>
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    About me
                </Link>
            </li>
            <li>
                <Link href={{ pathname: "/", hash: "education"}} className={`${viContext!!.stringValue.includes("education") && "bg-primary"} text-slate-900 inline-flex items-center hover:bg-primary px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 w-full`}>
                    <Book className="w-4 h-4 me-2 "/> 
                    Education
                </Link>
            </li>
            <li>
                <Link href={{ pathname: "/", hash: "skills"}} className={`${viContext!!.stringValue.includes("skills") && "bg-primary"} text-slate-900 inline-flex items-center hover:bg-primary px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 w-full`}>
                    <svg className="w-4 h-4 me-2 text-slate-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                    </svg>
                    Skills
                </Link>
            </li>
            <li>
                <Link href={{ pathname: "/", hash: "experience"}} className={`${viContext!!.stringValue.includes("experience") && "bg-primary"} text-slate-900 inline-flex items-center hover:bg-primary active:bg-primary px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 w-full`}>
                    <svg className="w-4 h-4 me-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
                    Experience
                </Link>
            </li>
        </ul>
    )
}
export default SideSection