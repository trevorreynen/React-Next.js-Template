// =====<  React/Next Imports  >==================
import { useContext } from 'react'
import Link from 'next/link'

// =====<  Other Imports  >=======================
import { routes } from '@/config/routes'
import { screenPages } from '@/config/enums'
import { CommonStoreContext } from '@/hooks/common-context'
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import styles from './Sidebar.module.scss'



export function Sidebar() {
  const { setScreen } = useContext(CommonStoreContext)


  return (
    <div className={styles.Sidebar}>

      <div className={styles['sidebar-upper']}>
        <h2>Upper Section</h2>
      </div>

      <ul className={styles['sidebar-main']}>
        <li>
          <button className={classNames(styles['menu-item'], styles['menu-main'])} onClick={() => setScreen(screenPages.Main)}>
            <div className={classNames(styles['icon'], styles['icon-main'])}></div>
            <span>Main</span>
          </button>
        </li>

        <li>
          <button className={classNames(styles['menu-item'], styles['menu-a'])} onClick={() => setScreen(screenPages.A)}>
            <div className={classNames(styles['icon'], styles['icon-a'])}></div>
            <span>Tab A</span>
          </button>
        </li>


        <li>
          <button className={classNames(styles['menu-item'], styles['menu-b'])} onClick={() => setScreen(screenPages.B)}>
            <div className={classNames(styles['icon'], styles['icon-b'])}></div>
            <span>Tab B</span>
          </button>
        </li>

        <li>
          <button className={classNames(styles['menu-item'], styles['menu-c'])} onClick={() => setScreen(screenPages.C)}>
            <div className={classNames(styles['icon'], styles['icon-c'])}></div>
            <span>Tab C</span>
          </button>
        </li>
      </ul>


      <ul className={styles['sidebar-lower']}>
        <li>
          <Link href={routes.About} passHref>
            <button className={classNames(styles['menu-secondary'])}>
              <div className={classNames(styles['icon'], styles['icon-premium'])}></div>
              <span>/About</span>
            </button>
          </Link>
        </li>

        <li>
          <button className={classNames(styles['menu-secondary'], styles['menu-settings'])}>
            <div className={classNames(styles['icon'], styles['icon-settings'])}></div>
            <span>Settings</span>
          </button>
        </li>
      </ul>


    </div>
  )
}

