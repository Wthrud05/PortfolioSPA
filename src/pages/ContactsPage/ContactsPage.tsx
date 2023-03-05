import React from 'react'
import styles from './ContactsPage.module.scss'

const ContactsPage = () => {
  return (
    <div className={styles.ContactsPage}>
      <div className={styles.TitleBox}>
        <h1 className={styles.Title}>Contacts</h1>
      </div>
      <div className={styles.Contacts}>
        <h2>Location</h2>
        <span>Smolensk. Russia</span>

        <h2>Telegram / Whatsupp</h2>
        <span>+7 (910) 721-16-42</span>

        <h2>Email</h2>
        <span className={styles.Email}>alexanderLo@gmail.com</span>
      </div>
    </div>
  )
}

export default ContactsPage
