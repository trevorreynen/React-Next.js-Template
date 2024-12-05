// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import styles from './ScreenMain.module.scss'



export function ScreenMain() {


  return (
    <div className={styles.ScreenWrapper}>

      <div className={styles['primary-content']}>


        <h2>Section Header</h2>

        <p>Here is the main section where you present the primary value to the user</p>


      </div>

      <div className={styles['top-right-content']}>

        <h3>Top Right Div</h3>

        <p>Dynamically disappears at 1100px width!</p>

      </div>

    </div>
  )
}
