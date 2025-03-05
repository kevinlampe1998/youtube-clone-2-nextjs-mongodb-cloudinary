'use client';

import styles from './page.module.css';
import { Check, Triangle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CreateAStrongPassword = () => {
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
                <h1>Create a strong password</h1>
                <h2>Create a strong password with a mix of letters, numbers and</h2>
                <h2>symbols</h2>

            </section>

            <input className={styles.email} placeholder='Password'/>
            <input className={styles.email} placeholder='Confirm'/>
            
            <div className={styles.showPassword}>
                <div className={styles.check}>
                    <Check size={15}/>
                </div>
                <span>Show password</span>
            </div>

            <section className={styles.navigation}>
                <p className={styles.back}>
                    Back
                </p>
                <p className={styles.next}
                    onClick={() => router.push
                        ('/frontend/google-create-a-account/basic-information/choose-how-you-will-sign-in/choose-your-gmail-address/create-a-strong-password')}
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

export default CreateAStrongPassword;