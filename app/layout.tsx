import type { Metadata } from 'next'
import { Inter, Libre_Caslon_Text } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import SideSection from '@/components/SideSection'
import { Copy } from 'react-feather'
import VisibleItemProvider from '@/context/VisibleItemProvider'

const inter = Inter({ subsets: ['latin'] })
const caslon = Libre_Caslon_Text({ subsets: ['latin'], weight: "400"})

export const metadata: Metadata = {
  title: 'Anthony Ameh Portfolio',
  description: 'Portfolio website of Anthony Ameh also known as AntoniNeutron. A software engineer who specialize on mobile development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <VisibleItemProvider>
      <body className={`${caslon.className} font-normal text-sm flex justify-center text-slate-300`}>
        <div className='w-screen container'>
        <NavBar />
        <div className="sticky before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>
        <div className='lg:m-12 m-2 flex flex-col md:flex-row'>
          <div className='lg:ml-14 lg:w-2/5 md:h-screen md:sticky md:left-0 md:top-20'>
            <SideSection className="lg:fixed lg:w-2/6 "/>
          </div>
          <div className='lg:ml-14 lg:w-3/5'>
            {children}
          </div>
        </div>
        <footer className='flex text-center flex-col justify-center items-center'>
          <span>This was created using NextJS and Tailwind CSS for styling</span>
          <span>&#169; antonineutron.</span>
        </footer>
        </div>
      </body>
      </VisibleItemProvider>
    </html>
  )
}
