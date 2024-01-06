"use client"
import EducationItem from '@/components/EducationItem'
import ExperienceSection from '@/components/ExperienceSection'
import Header from '@/components/Header'
import SideSection from '@/components/SideSection'
import SkillItem from '@/components/SkillItem'
import { VItemContextProps, VisibleItemContext } from '@/context/VisibleItemProvider'
import isOnScreen from '@/hooks/isOnScreen'
import Image from 'next/image'
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
          I have a deep passion for problem-solving, and software engineering provides 
          the perfect outlet for me to channel that passion. 
          I specialize in mobile application and frontend development, creating engaging projects across diverse domains such as AI and Blockchain
        </p>
        <p>
          Beyond coding, my interests extend to a fascination with startups, 
          a keen examination of the latest tech trends, and a perpetual exploration of creative problem-solving approaches. 
          Versatility, insightful thinking, and a touch of creative spark serve as my driving forces in addressing challenges.
        </p>
        <p>
          My overarching goal is to push the boundaries of what's possible, both in terms of expanding my own skillset 
          and contributing to the creation of amazing products. Whether I'm developing innovative apps, mentoring aspiring 
          tech enthusiasts, or engaging in discussions about the future of technology, I am always on the lookout for the next 
          big opportunity.
        </p>
      </div>

      <div ref={eduRef} id="education">
        <Header>Education</Header>
        <div className='flex flex-col lg:flex-row'>
          <EducationItem 
            date='2017-2021' 
            institution="Federal University of Lafia"
            certificate='Bsc. Computer Science (First class honours)' />
          <EducationItem 
            date='2020' 
            certificate="Android Developer Certification"
            institution='Google Africa Developer Scholarship' />
        </div>
      </div>

      <div ref={skillsRef} id="skills">
        <Header>Skills</Header>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
          <SkillItem>
            <Header>Language</Header>
            <div className='grid grid-cols-3 border'>
              <div className='border p-1'>Kotlin</div>
              <div className='border p-1'>Dart</div>
              <div className='border p-1'>Javascript</div>
              <div className='border p-1'>Typescript</div>
              <div className='border p-1'>Java</div>
              <div className='border p-1'>SQL</div>
            </div>
          </SkillItem>
          <SkillItem>
            <Header>Technologies</Header>
            <div className='grid grid-cols-2 border'>
              <div className='border p-1'>Flutter</div>
              <div className='border p-1'>Android (Views and Compose)</div>
              <div className='border p-1'>React & NextJs</div>
              <div className='border p-1'>Firebase</div>
            </div>
          </SkillItem>
          <SkillItem>
            <Header>Tools</Header>
            <div className='grid grid-cols-2 border'>
              <div className='border p-1'>Android Studio</div>
              <div className='border p-1'>VS Code</div>
              <div className='border p-1'>XCode</div>
              <div className='border p-1'>Git</div>
            </div>
          </SkillItem>
          <SkillItem>
            <Header>Others</Header>
            <div className='grid grid-cols-2 border'>
              <div className='border p-1'>Testing</div>
              <div className='border p-1'>CI/CD</div>
              <div className='border p-1'>Communication</div>
              <div className='border p-1'>Professionalism</div>
            </div>
          </SkillItem>
        </div>
      </div>

      <div ref={expRef} id="experience" className='mt-4'>
        <Header>Experience</Header>
        <ExperienceSection />
      </div>
    </main>
  )
}
