// =====<  React/Next Imports  >==================
import React, { useContext, useMemo } from 'react'

// =====<  Other Imports  >=======================
import { screenPages } from '@/config/enums'
import { routes } from '@/config/routes'
import { CommonStoreContext } from '@/hooks/common-context'

// =====<  Import CSS  >==========================
import styles from './ScreenSwap.module.scss'

// =====<  Import Components  >===================
import { ScreenHeader } from '@/components/ScreenSwap_ScreenHeader/ScreenHeader'
import { Sidebar } from '@/components/ScreenSwap_Sidebar/Sidebar'

// ==========<  Screens  >========================
import { ScreenMain } from '@/components/ScreenSwap_Screen_Main/ScreenMain'
import { ScreenA } from '@/components/ScreenSwap_Screen_A/ScreenA'
import { ScreenB } from '@/components/ScreenSwap_Screen_B/ScreenB'
import { ScreenC } from '@/components/ScreenSwap_Screen_C/ScreenC'


// ===============<  Other  >=====================


export default function ScreenSwap() {

  const { screen } = useContext(CommonStoreContext)


  // Determine which screen component to render based on `screen` state
  const ScreenComponent = useMemo(() => {

    switch (screen) {
      case screenPages.Main:
        return ScreenMain
      case screenPages.A:
        return ScreenA
      case screenPages.B:
        return ScreenB
      case screenPages.C:
        return ScreenC
      default:
        return ScreenMain
    }
  }, [screen])


  return (
    <div className={styles.ScreenSwap}>

      <ScreenHeader />

      <div className={styles['main-wrapper']}>

        <Sidebar />

        <ScreenComponent />

      </div>


    </div>
  )
}

