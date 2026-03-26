import ProjectData from "@/data/ProjectData";
import Header from "./Header";
import React from "react";
import Link from "next/link";
import { Link2 } from "react-feather";
import Chip from "./Chip";

const ProjectSection = () => {
    return (
        <div>
            {
                ProjectData.map(
                    (project, index) => {
                        return (
                            <ProjectItem 
                                key={index}
                                title={project.title} 
                                period={project.period}
                                organization={project.organization}
                                description={project.description} 
                                tech={project.tech} 
                                url={project.url}
                            />
                        )
                    }
                )
            }            
        </div>
    )
}

interface ProjectItemProps {
    title: string;
    period?: string;
    organization?: string;
    description: string;
    tech: string[];
    url: { title: string; link: string; }[] | [];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, period, organization, description, tech, url }) => {
    return (
        <div className='bg-slate-800 px-8 py-2 rounded-lg m-2'>
            <Header>{title}</Header>
            { (period || organization) && (
                <div className="flex items-center text-sm mb-2 opacity-80">
                    {period && <span>{period}</span>}
                    {period && organization && <p className="mx-2 font-extrabold">|</p>}
                    {organization && <span>{organization}</span>}
                </div>
            )}
            <p className="mt-2 text-justify">
                {description}
            </p>
            <div className="flex justify-evenly flex-wrap mt-4">
                {
                    url.map(
                        (urll, index) => {
                            return (
                                <div className="flex items-center justify-center hover:text-blue-400 text-blue-200" key={index}>
                                    <Link href={urll.link}>{urll.title}</Link>
                                    <Link2 size={15} className="ml-1"/>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center my-4">
                {
                    tech.map(
                        (value, index) => {
                            return (
                                <div key={index} className="m-1 mx-2">
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

export default ProjectSection;
