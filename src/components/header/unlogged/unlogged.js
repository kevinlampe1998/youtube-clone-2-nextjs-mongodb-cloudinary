'use client';

import styles from './unlogged.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Search, EllipsisVertical, CircleUser } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Unlogged = () => {
    const router = useRouter();

    const signIn = () => {
        router.push('/frontend/google-sign-in');
    };

    return (
        <header className={styles.unlogged}>
            <section className={styles.section1}>
                <Link href='#' className={styles.hamburgerLogo}>
                    <span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </Link>
                <Image
                        className={styles.youtubeLogo}
                        src='/logos/youtube-logo.png'
                        width='130'
                        height='50'
                        alt="Amazon header logo"
                        priority
                />
            </section>
            <section className={styles.section2}>
                <div className={styles.searchBar}>
                    <input />
                    <Link href='#' className={styles.searchLogo}>
                        <Search
                            size={23} strokeWidth={0.9}
                            color='#fff'    
                        />
                    </Link>
                </div>
                <Link href='#'
                    className={styles.micLogo}
                >
                    <Image
                            src='/svg/header/microphone-svgrepo-com.svg'
                            width='19'
                            height='19'
                            alt="Amazon header logo"
                    />
                </Link>
            </section>
            <section className={styles.section3}>
                <div className={styles.ellipsisVertical}>
                    <EllipsisVertical
                        size={21} strokeWidth={0.9}
                        color='#fff'
                    />
                </div>
                <Link href='/frontend/google-sign-in' className={styles.signInButton}>
                    <CircleUser size={23} strokeWidth={0.9}/>
                    <p>Sign in</p>
                </Link>
            </section>
        </header>
    );
};

export default Unlogged;