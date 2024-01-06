import ExperienceData from "@/data/ExperienceData";
import Header from "./Header"
import { ReactNode } from "react";
import Link from "next/link";
import { Link2 } from "react-feather";
import Chip from "./Chip";

const ExperienceSection = ()=>{
    return (
        <div>
            {
                ExperienceData.map(
                    (experience, index)=>{
                        return (
                            <ExperienceItem 
                                key={index}
                                position={experience.position} 
                                period={experience.period} 
                                organization={experience.organization} 
                                description={experience.description} 
                                tech={experience.tech} 
                                url={experience.url}/>
                        )
                    }
                )
            }            
        </div>
    )
}

interface ExperienceItem{
    position: string;
    period: string;
    organization: string;
    description: string;
    tech: string[];
    url: {title:string; link: string;}[] | [];
}

const ExperienceItem: React.FC<ExperienceItem> = ({position, period, organization, description, tech, url})=>{
    return (
        <div className='bg-slate-800 px-8 py-2 rounded-lg m-2'>
            <Header>{position}</Header>
            <div className="flex items-center">
                <span>{period}</span>
                <p className="mx-2 font-extrabold">|</p>
                <span>{organization}</span>
            </div>
            <p>
                {description}
            </p>
            <div className="flex justify-evenly">
            {
                url.map(
                    (urll, index)=>{
                        return (
                            <div className="flex hover:text-blue-400 text-blue-200" key={index}>
                                <Link href={urll.link}>{urll.title}</Link>
                                <Link2 />
                            </div>
                        )
                    }
                )
            }
            </div>
            <div className="grid grid-cols-3 lg:flex-row justify-center my-4">
                {
                    tech.map(
                        (value, index)=>{
                            return (
                                <div key={index} className="m-1">
                                    <Chip title={value} />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export {ExperienceItem}
export default ExperienceSection