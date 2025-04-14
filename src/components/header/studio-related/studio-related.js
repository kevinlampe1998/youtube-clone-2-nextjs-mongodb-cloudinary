'use client';

import styles from './studio-related.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Img from '@/components/image/image';
import { idSelected, getPropValue, selectAllByClass } from '@/lib/shortcuts';
import { Context } from '@/components/context-provider/context-provider';
import { useContext, useEffect } from 'react';
import { closeForeGround } from '@/components/foreground/foreground';

const StudioRelated = () => {
    const { clientDB, dispatch } = useContext(Context);

    useEffect(() => {
        dispatch({ type: 'changeOthers', payload: {
            category: 'studioHeader', value: 1 }});
    }, []);

    const toggleSideBar = () => {
        const sideBar = idSelected('studio-side-bar');
        const widthOfSideBar = getPropValue(sideBar, 'width');
        const profileLogo = idSelected('sidebar-profile-logo');
        const userInitial = profileLogo.children[0];
        const profileInfo = selectAllByClass('studio-sidebar-profile-logo-text');
        const section2 = idSelected('studio-side-bar-section2');       

        const animateSideBar = (open) => {
            sideBar.style.width = open ? '70px' : '250px';
            profileLogo.style.height = open ? '' : '100px'; 
            profileLogo.style.width = open ? '' : '100px';
            userInitial.style.fontSize = open ? '' : '50px';
            profileInfo[0].style.opacity = open ? '' : '1';            
            profileInfo[1].style.opacity = open ? '' : '1';
            profileInfo[0].style.fontSize = open ? '0' : '14px';
            profileInfo[1].style.fontSize = open ? '0' : '12px';
            profileInfo[1].style.marginBottom = open ? '-30px' : '15px';
        };

        animateSideBar(widthOfSideBar === '250px');
    };

    const openCreateMenu = () => {
        closeForeGround();

        const foreground = idSelected('studio-foreground');
        const darkOverlay = idSelected('studio-dark-overlay');
        const createMenu = idSelected('studio-create-menu');

        foreground.style.display = 'flex';
        darkOverlay.style.display = 'flex';
        createMenu.style.display = 'flex';
    };
    
    return (
        <header className={styles.loggedHeader} id='studio-related-header'>

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
                <div className={styles.create} onClick={openCreateMenu}>

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