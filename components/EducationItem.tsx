import { ReactNode } from "react"

const EducationItem = ({institution, certificate, date}: {
    institution: string; 
    certificate:string; 
    date: string;
})=>{
    return (
        <div className='bg-slate-800 px-8 py-2 rounded-lg m-2'>
            <div>{certificate}</div>
            <div className="text-xs">{institution}</div>
            <div className="flex justify-end text-xs">
                <span>{date}</span>
            </div>
        </div>
    )
}

export default EducationItem