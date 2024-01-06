"use client"
import { RefObject, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

export default function isOnScreen(ref: RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = useState(false)
  

  const observer = useRef<IntersectionObserver>()
  // useMemo(() => , [ref])


  useLayoutEffect(() => {
    if(observer.current == null){
      observer.current = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )
    }
    observer.current.observe(ref.current as Element)
    return () => observer.current!!.disconnect()
  }, [])

  return isIntersecting
}