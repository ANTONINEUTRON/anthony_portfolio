"use client"
import { RefObject, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

export default function isOnScreen(ref: RefObject<HTMLElement | null>) {

  const [isIntersecting, setIntersecting] = useState(false)
  

  const observer = useRef<IntersectionObserver | null>(null)
  // useMemo(() => , [ref])


  useLayoutEffect(() => {
    if (!ref.current) return
    
    if(observer.current == null){
      observer.current = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )
    }
    observer.current.observe(ref.current as Element)
    return () => observer.current?.disconnect()
  }, [])

  return isIntersecting
}