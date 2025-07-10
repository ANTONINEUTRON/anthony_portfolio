"use client"
import EducationItem from '@/components/EducationItem'
import ExperienceSection from '@/components/ExperienceSection'
import Header from '@/components/Header'
import SideSection from '@/components/SideSection'
import SkillItem from '@/components/SkillItem'
import { VItemContextProps, VisibleItemContext } from '@/context/VisibleItemProvider'
import isOnScreen from '@/hooks/isOnScreen'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useContext, useEffect, useRef } from 'react'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)
  
  const isAboutVs = isOnScreen(aboutRef)
  const isEduVs = isOnScreen(eduRef)
  const isSkillsVs = isOnScreen(skillsRef)
  const isExpVs = isOnScreen(expRef)

  const viContext  = useContext(VisibleItemContext)

  useEffect(()=>{
    let viState = []
    if(isAboutVs){
      viState.push("about")
    } 
    if(isEduVs){
      viState.push("education")
    } 
    if(isSkillsVs){
      viState.push("skills")
    } 
    if(isExpVs){
      viState.push("experience")
    }
    viContext!!.setStringValue(viState as [])
  },[isAboutVs, isEduVs, isExpVs, isSkillsVs])

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div ref={aboutRef} id="about">
        <Header>About me</Header>
        <p>
          I'm a passionate software engineer who transforms complex problems into elegant digital solutions. 
          Specializing in mobile and web development, I bring hands-on experience in cutting-edge domains 
          including Blockchain technology and AI applications.
        </p>
        <p>
          What drives me is building tech-enabled products that make a real difference. I thrive at the 
          intersection of technical excellence and creative innovation, leveraging emerging technologies 
          to solve challenging problems in meaningful ways. Currently, I'm focused on expanding my technical boundaries while mentoring others and contributing to innovative projects. 
        </p>
        <p>
          Currently, I'm focused on expanding my technical boundaries while mentoring others and contributing to innovative projects.
        </p>
      </div>

      <div ref={eduRef} id="education">
        <Header>Education</Header>
        <div className='flex flex-col lg:flex-row'>
          <EducationItem
            date='2025'
            certificate="Builders Cohort 2025"
            institution='Solana Turbine Institute' />
          <EducationItem 
            date='2018-2022' 
            institution="Federal University of Lafia"
            certificate='Bsc. Computer Science (First class)' />
          <EducationItem 
            date='2020' 
            certificate="Android Developer Certification"
            institution='Google Africa Developer Scholarship' />
        </div>
      </div>

      <div ref={skillsRef} id="skills">
        <Header>Skills</Header>
        <div className='grid grid-cols-1 gap-1'>
          <SkillItem>
            <Header>Language</Header>
            <div className='grid grid-cols-3 border'>
              <div className='border p-1'>Typescript</div>
              <div className='border p-1'>Dart</div>
              <div className='border p-1'>Kotlin</div>
              <div className='border p-1'>PHP</div>
              <div className='border p-1'>Rust</div>
              <div className='border p-1'></div>
            </div>
          </SkillItem>
          <SkillItem>
            <Header>Technologies</Header>
            <div className='grid grid-cols-3 border'>
              <div className='border p-1'>Flutter</div>
              <div className='border p-1'>React Native</div>
              <div className='border p-1'>NextJs</div>
              <div className='border p-1'>XML & Compose</div>
              <div className='border p-1'>Express.js</div>
              <div className='border p-1'>Firebase & Supabase</div>
            </div>
          </SkillItem>
          {/* <SkillItem>
            <Header>Tools</Header>
            <div className='grid grid-cols-2 border'>
              <div className='border p-1'>VS Code</div>
              <div className='border p-1'>Android Studio</div>
              <div className='border p-1'>XCode</div>
              <div className='border p-1'>Git</div>
            </div>
          </SkillItem> */}
          <SkillItem>
            <Header>Others</Header>
            <div className='grid grid-cols-2 border'>
              <div className='border p-1'>Testing</div>
              <div className='border p-1'>CI/CD</div>
              <div className='border p-1'>Community Management</div>
              <div className='border p-1'>Developer Advocate</div>
            </div>
          </SkillItem>
        </div>
      </div>

      <div ref={expRef} id="experience" className='mt-4'>
        <Header>Experience</Header>
        <ExperienceSection />
        <Link href="https://drive.google.com/file/d/1uB4uh7qvRxKzp5zMViFyxKPrRD-_O9Kz/view?usp=drive_link">More...</Link>
      </div>
    </main>
  )
}
