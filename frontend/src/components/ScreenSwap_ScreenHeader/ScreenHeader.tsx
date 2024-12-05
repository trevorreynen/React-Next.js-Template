// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import styles from './ScreenHeader.module.scss'



export function ScreenHeader() {


  return (
    <header className={styles.ScreenHeader}>

      <div className={styles['header-left']}>
        <div className={styles['title']}>
          <h2>Warframe Checklist</h2>
        </div>
      </div>


      <div className={styles['header-right']}>
        <div className={styles['window-controls']}>
          <button className={classNames(styles['window-control'], styles['minimize'])} />

          <button className={classNames(styles['window-control'], styles['maximize'])} />

          <button className={classNames(styles['window-control'], styles['close'])} />
        </div>
      </div>
    </header>
  )
}
