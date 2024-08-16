import FlashOnIcon from '@mui/icons-material/FlashOn';
import styles from './myaccount.module.css';
import Link from 'next/link';
import Footer from '../components/footer';
import { useUser, UserButton } from '@clerk/nextjs';


function MyAccount() {
  

  return (
    <><div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <Link href="/Home">
          <div className={styles.logo}>
            <FlashOnIcon className={styles.logoImage} />
            <h1 className={styles.title}>CodeFlash</h1>
          </div>
        </Link>
        <Link href="/Home">
          <button className={styles.aboutButton}>Home</button>
        </Link>
      </header>
      <div className={styles.contentWrapper}>
        <div className={styles.tableContainer}>
          <table>
            <caption>My Account</caption>
            <tbody>
              <tr>
                <th>First Name</th>
                <td>Example</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>Example</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>Example</td>
              </tr>
              <tr>
                <th>Member Since</th>
                <td>Example</td>
              </tr>
              <tr>
                <th>Subscription Paid</th>
                <td>Example</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" className={styles.deleteButton}>Delete My Account</button>
      </div>
    </div><Footer /></>
  )
}

export default MyAccount;
