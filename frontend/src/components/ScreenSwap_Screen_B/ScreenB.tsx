// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import styles from './ScreenB.module.scss'



export function ScreenB() {


  return (
    <div className={styles.ScreenWrapper}>


      <div className={styles['primary-content']}>

        <h2>Tab B</h2>

      </div>

      <div className={styles['top-right-content']}>

        <h3>Top Right Div</h3>

        <p>Dynamically disappears at 1100px width!</p>

      </div>


    </div>
  )
}
