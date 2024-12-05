// =====<  React/Next Imports  >==================
import Link from 'next/link'

// =====<  Other Imports  >=======================
import { routes } from '@/config/routes'

// =====<  Import CSS  >==========================
import styles from '@/styles/index.module.scss'

// =====<  Components  >==========================



export default function Index() {
  return (
    <div className={styles.Index}>
      <div className={styles['centered-button']}>

        <div className={styles['upper']}>
          <h1>Landing Page!</h1>
          <p>'/' = Route</p>
          <p>(a.k.a. http://localhost:3000/)</p>
        </div>

        <Link href={routes['About']}>
          <button>Click here to go to the About page</button>
        </Link>

      </div>
    </div>
  )
}
