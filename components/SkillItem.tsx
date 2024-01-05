import { ReactNode } from "react";

const SkillItem = ({children}:{children: ReactNode;})=>{
    return (
        <div  className='bg-slate-800 px-8 py-2 rounded-lg m-2'>
            {children}
        </div>
    )
}

export default SkillItem