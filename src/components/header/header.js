'use client';
import styles from './header.module.css';
import { Bell, Menu, Plus, Search, Youtube, EllipsisVertical, CircleUser } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../context-provider/context-provider';
import BASE_URL from '@/lib/base-url';
import { idSelected } from '@/lib/shortcuts';

const Header = () => {
    const [ logged, setLogged ] = useState(false);
    const { clientDB, dispatch } = useContext(Context);

    useEffect(() => {
        console.log('header: clientDB.user', clientDB.user);
        clientDB.user && setLogged(true);
    }, [clientDB.user]);

    const checkCookieAtStart = async () => {
        const res = await fetch(`${BASE_URL}/backend/users/single/check-cookie`, {
            credentials: 'include'
        });

        const data = await res.json();
        
        console.log('data', data);
        
        data.success && dispatch({ type: 'setUser', payload: data.user });
    };

    useEffect(() => {
        checkCookieAtStart();
    }, []);

    const openForeGround = () => {
        const foreGround = idSelected('foreground');
        const profileLogoClicked = idSelected('profile-logo-clicked');

        console.log('foreGround', foreGround);

        foreGround.style.display = 'flex';
        profileLogoClicked.style.display = 'block';
    };

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
                                    src='/svg/header/microphone-svgrepo-com.svg'
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
                            <p>Create</p>
                        </div>
                        <Link href='#'
                            className={styles.bellLogo}
                        >
                            <Image
                                    src='/svg/header/bell-svgrepo-com.svg'
                                    width='23'
                                    height='23'
                                    alt="Amazon header logo"
                            />
                        </Link>
                        <div className={styles.profileLogo}
                            onClick={openForeGround}
                        >
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
                                        src='/svg/header/microphone-svgrepo-com.svg'
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