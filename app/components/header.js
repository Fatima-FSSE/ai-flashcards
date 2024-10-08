import React from 'react';
import { SignedIn, UserButton } from "@clerk/nextjs";
import Styles from './components.module.css';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo} onClick={() => window.location.href='/'}>
        <FlashOnIcon className={Styles.logoImage} />
        <h1 className={Styles.title}>CodeFlash</h1>
      </div>
      <div className={Styles.actions}>
        <Link href="/Code">
          <button className={Styles.logoutButton}>Flashcards</button>
        </Link>
        <Link href="/Saved">
          <button className={Styles.logoutButton}>Saved</button>
        </Link>
        <Link href="/Billing">
          <button className={Styles.logoutButton}>Billing</button>
        </Link>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
