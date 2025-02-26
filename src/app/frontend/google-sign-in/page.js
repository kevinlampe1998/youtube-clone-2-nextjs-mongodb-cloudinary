'use client';

import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Triangle } from 'lucide-react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const GoogleSignIn = () => {
    const createAccountMenu = useRef();
    const router = useRouter();

    return (
        <div className={styles.googleSignIn}>
            <Image
                className={styles.googleGRainbowLogo}
                src='/logos/google-g-rainbow-logo.png'
                width='52'
                height='52'
                alt="Amazon header logo"
            />
            <section className={styles.text}>
                <h1>Sign in</h1>
                <p>with your Google Account to continue to YouTube. This</p>
                <p>account will be available to other Google apps in the browser.</p>
                <input className={styles.emailOrPhone} placeholder='Email or phone'/>
                <Link href='#' className={styles.forgotEmail}>Forgot email?</Link>
                <p className={styles.notYourComputer}>Not your computer? Use Guest mode to sign in privately. <Link href='#' className={styles.learnMore}>Learn more</Link></p>
                <Link href='#' className={styles.aboutUsingGuest}>about using Guest mode</Link>
                <div className={styles.buttons}>
                    <button className={styles.createAccount} onClick={() => createAccountMenu.current.style.display = 'flex'}>Create account</button>
                    <button className={styles.next}>Next</button>
                    <div className={styles.createAccountMenu} ref={createAccountMenu}>
                        <p onClick={() => router.push('/frontend/google-create-a-account')}>For my personal use</p>
                        <p>For my child</p>
                        <p>For work or my business</p>
                    </div>
                </div>
            </section>
            <section className={styles.bottom}>
                <div>
                    <p>English (United States) </p>
                    <Triangle size={5} fill='#fff' className={styles.triangle}/>
                </div>
                <div>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </section>
        </div>
    );
};

export default GoogleSignIn;