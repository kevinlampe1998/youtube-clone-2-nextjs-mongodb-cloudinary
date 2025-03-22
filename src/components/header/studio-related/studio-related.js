'use client';

import styles from './studio-related.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Search, EllipsisVertical, CircleUser } from 'lucide-react';
// import BASE_URL from '@/lib/base-url';
// import { idSelected } from '@/lib/shortcuts';

const StudioRelated = () => {

    // const profileLogoClicked = () => {
    //     const foreGround = idSelected('foreground');
    //     const toOpen = idSelected('profile-logo-clicked');

    //     foreGround.style.display = 'block';
    //     toOpen.style.display = 'block';
    // };

    // const createButtonClicked = () => {
    //     const foreGround = idSelected('foreground');
    //     const createMenu = idSelected('create-button-clicked');

    //     console.log('foreGround', foreGround);
    //     console.log('createMenu', createMenu);

    //     foreGround.style.display = 'flex';
    //     createMenu.style.display = 'flex';
    // };
    
    return (
        <header className={styles.loggedHeader}>

            {/* StudioRelated */}
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
                        <Search size={23} strokeWidth={0.9}/>
                    </Link>
                </div>
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
            </section>
            <section className={styles.section3}>
                <div className={styles.create}
                    // onClick={createButtonClicked}
                >
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
                    // onClick={profileLogoClicked}
                >
                    <p>K</p>
                </div>
            </section>
        </header>
    );
};

export default StudioRelated;