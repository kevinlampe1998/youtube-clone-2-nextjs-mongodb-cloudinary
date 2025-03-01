'use client';

import styles from './page.module.css';
import { Triangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BasicInformation = () => {
    return (
        <div className={styles.googleCreateAccount}>
            <Image
                className={styles.googleGRainbowLogo}
                src='/logos/google-g-rainbow-logo.png'
                width='52'
                height='52'
                alt="Amazon header logo"
            />
            <h1>Basic information</h1>
            <h2>Enter your birthday and gender</h2>

            <div className={styles.birthDate}>
                <div className={styles.month}>
                    <input placeholder='Month' className={styles.monthInput}/>
                    <Triangle size={6} className={styles.monthTriangle} fill='#bbb' color='#bbb'/>
                    <div className={styles.monthList}>
                        <p>January</p>
                        <p>February</p>
                        <p>March</p>
                        <p>April</p>
                        <p>May</p>
                        <p>June</p>
                        <p>July</p>
                        <p>August</p>
                        <p>September</p>
                        <p>Oktober</p>
                        <p>November</p>
                        <p>December</p>
                    </div>
                </div>
                <div className={styles.day}>
                    <input placeholder='Day'/>
                </div>
                <div className={styles.year}>
                    <input placeholder='Year'/>
                </div>
            </div>

            <div className={styles.gender}>
                <input placeholder='Gender'/>
                <Triangle size={15} className={styles.genderTriangle}/>
                <div className={styles.genderList}>
                    <p>Female</p>
                    <p>Male</p>
                    <p>Rather not say</p>
                    <p>Custom</p>
                </div>
            </div>

            <p className={styles.next} onClick={() => router.push('/frontend/google-create-a-account/basic-information')}>Next</p>
            <Link href='#' className={styles.forgotEmail}>Forgot email?</Link>
            <section className={styles.bottom}>
                <div className={styles.language}>
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

export default BasicInformation;