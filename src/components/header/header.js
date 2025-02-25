'use client';
import styles from './header.module.css';
import { Bell, Menu, Plus, Search, Youtube, EllipsisVertical, CircleUser } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [ logged, setLogged ] = useState(false);

    return (
        <header className={styles.header}>

            {
                
                logged ?

                    <section className={styles.loggedHeader}>
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
                        <Link href='#' className={styles.searchLogo}>
                            <Search size={23} strokeWidth={0.9}/>
                        </Link>
                        <Link href='#'
                            className={styles.micLogo}
                        >
                            <Image
                                    src='/svg/microphone-svgrepo-com.svg'
                                    width='20'
                                    height='20'
                                    alt="Amazon header logo"
                            />
                        </Link>
                        <div className={styles.create}>
                            <div className={styles.plus}>
                                <div></div>
                                <div></div>
                            </div>
                            <p>Erstellen</p>
                        </div>
                        <Link href='#'
                            className={styles.bellLogo}
                        >
                            <Image
                                    src='/svg/bell-svgrepo-com.svg'
                                    width='23'
                                    height='23'
                                    alt="Amazon header logo"
                            />
                        </Link>
                        <div className={styles.profileLogo}>
                            <p>K</p>
                        </div>
                    </section>

                :

                    <section className={styles.unlogged}>
                        <div>
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
                        </div>
                        <div>
                            <Link href='#' className={styles.searchLogo}>
                                <Search
                                    size={23} strokeWidth={0.9}
                                    color='#fff'    
                                />
                            </Link>
                            <Link href='#'
                                className={styles.micLogo}
                            >
                                <Image
                                        src='/svg/microphone-svgrepo-com.svg'
                                        width='19'
                                        height='19'
                                        alt="Amazon header logo"
                                />
                            </Link>
                        </div>
                        <div>
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
                        </div>
                    </section>

            }

        </header>
    );
};

export default Header;