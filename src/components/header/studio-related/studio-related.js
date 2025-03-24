'use client';

import styles from './studio-related.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Search, EllipsisVertical, CircleUser } from 'lucide-react';
import Img from '@/components/image/image';
import { idSelected, getPropValue } from '@/lib/shortcuts';

const StudioRelated = () => {

    const toggleSideBar = () => {
        const sideBar = idSelected('studio-side-bar');
        const widthOfIt = getPropValue(sideBar, 'width');

        console.log('StudioRelated toggleSideBar widthOfIt', widthOfIt);


        sideBar.style.width = '250px';
    };
    
    return (
        <header className={styles.loggedHeader}>

            <section className={styles.section1}>
                <Link href='#' className={styles.hamburgerLogo}
                    onClick={toggleSideBar}
                >
                    <span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                
                </Link>
                <Image
                        className={styles.youtubeStudioLogo}
                        src='/logos/youtube-studio-logo.png'
                        width='110'
                        height='35'
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
                    <Img props={[ '/svg/header/studio/question-mark.png',
                        28, 25, 'question-mark' ]}/>
                </Link>
            </section>
            <section className={styles.section3}>
                <div className={styles.create}>

                    <Img props={[ '/svg/header/studio/camera-with-plus-in-it.png',
                        20, 15, 'camera-with-plus-in-it' ]}/>

                    <p>Create</p>
                </div>
                <div className={styles.profileLogo}>
                    <p>K</p>
                </div>
            </section>
        </header>
    );
};

export default StudioRelated;