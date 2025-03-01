'use client';

import styles from './page.module.css';
import { Triangle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CreateAGoogleAccount = () => {
    const router = useRouter();

    return (
        <div className={styles.googleCreateAccount}>
            <Image
                className={styles.googleGRainbowLogo}
                src='/logos/google-g-rainbow-logo.png'
                width='52'
                height='52'
                alt="Amazon header logo"
            />
            <h1>Create a Google Account</h1>
            <h2>Enter your name</h2>
            <input className={styles.firstName} placeholder='First name'/>
            <input className={styles.lastName} placeholder='Last name (optional)'/>

            <p className={styles.next} onClick={() => router.push('/frontend/google-create-a-account/basic-information')}>Next</p>
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

export default CreateAGoogleAccount;