// =====<  React/Next Imports  >==================
import React, { useContext, useMemo } from 'react'

// =====<  Other Imports  >=======================


// =====<  Import CSS  >==========================
import styles from './About.module.scss'

// =====<  Import Components  >===================
import { TopNav } from '@/components/About_TopNav/TopNav'
import { LeftSidebar } from '@/components/About_LeftSidebar/LeftSidebar'
import { RightSidebar } from '@/components/About_RightSidebar/RightSidebar'
import { MainContent } from '@/components/About_MainContent/MainContent'
import { Footer } from '@/components/About_Footer/Footer'


export default function About() {

  return (
    <div className={styles.About}>
      <p>About</p>

      <div className={styles['main-wrapper']}>

        <TopNav />
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
        <Footer />

      </div>

    </div>
  )
}

