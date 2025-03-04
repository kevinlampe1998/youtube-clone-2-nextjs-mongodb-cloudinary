'use client';

import styles from './page.module.css';
import { Triangle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ChooseYourGmailAddress = () => {
    const router = useRouter();
    
    return (
        <div className={styles.choose}>
            <section className={styles.upper}>
                <Image
                        className={styles.googleGRainbowLogo}
                        src='/logos/google-g-rainbow-logo.png'
                        width='52'
                        height='52'
                        alt="Amazon header logo"
                />
                <h1>Choose your Gmail address</h1>
                <h2>Pick a Gmail address or create your own</h2>

                <div className={styles.radioButton}>

                    <div><span></span></div>

                    <p>placeholder@gmail.com</p>

                </div>

                <div className={styles.radioButton}>

                    <div><span></span></div>

                    <p>placeholder2@gmail.com</p>

                </div>

                <div className={styles.radioButton}>

                    <div><span></span></div>

                    <p>Create your own Gmail address</p>

                </div>

            </section>

            <section className={styles.hidden}>
                <div className={styles.email}>
                    <input className={styles.emailOrPhone} placeholder='Create a Gmail address'/>
                    <span>@gmail.com</span>
                </div>
                <p>You can use letters, numbers & periods</p>
            </section>

            <section className={styles.navigation}>
                <p className={styles.back}>
                    Back
                </p>
                <p className={styles.next}
                    onClick={() => router.push
                        ('/frontend/google-create-a-account/basic-information/choose-you-will-sign-in')}
                >
                    Next
                </p>
            </section>

            <section className={styles.bottom}>
                <div className={styles.language}>
                    <p>English (United States) </p>
                    <Triangle size={4} fill='#fff' className={styles.triangle}/>
                </div>
                <div className={styles.bottomRight}>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </section>
        </div>
    );
};

export default ChooseYourGmailAddress;