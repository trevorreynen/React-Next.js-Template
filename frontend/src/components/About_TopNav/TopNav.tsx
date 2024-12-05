// =====<  React/Next Imports  >==================
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// =====<  Other Imports  >=======================
import { routes } from '@/config/routes'
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import styles from './TopNav.module.scss'

export function TopNav() {
  const [isOverlapping, setIsOverlapping] = useState(false)
  const leftRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverlap = () => {
      if (leftRef.current && centerRef.current && rightRef.current) {
        const leftRect = leftRef.current.getBoundingClientRect()
        const centerRect = centerRef.current.getBoundingClientRect()
        const rightRect = rightRef.current.getBoundingClientRect()

        // Check if center overlaps with left or right
        const overlapsLeft = centerRect.left < leftRect.right && centerRect.right > leftRect.left
        const overlapsRight = centerRect.right > rightRect.left && centerRect.left < rightRect.right

        setIsOverlapping(overlapsLeft || overlapsRight)
      }
    }

    // Check overlap on mount and on window resize
    checkOverlap()
    window.addEventListener('resize', checkOverlap)

    return () => {
      window.removeEventListener('resize', checkOverlap)
    }
  }, [])

  return (
    <div className={styles['TopNav']}>
      <div className={styles['topnav-left']} ref={leftRef}>
        <Link href={routes.Landing} passHref>
          <button>Landing Page</button>
        </Link>
        <Link href={routes.About} passHref>
          <button>About</button>
        </Link>
      </div>

      <div className={classNames(styles['topnav-centered'], { [styles['overlap']]: isOverlapping })}>
        <h1>React / Next.js Template</h1>
      </div>

      <div className={styles['topnav-right']} ref={rightRef}>
        <Link href={routes.ScreenSwap} passHref>
          <button>ScreenSwap</button>
        </Link>
        <Link href={''} passHref>
          <button>Link Here</button>
        </Link>
      </div>
    </div>
  )
}
