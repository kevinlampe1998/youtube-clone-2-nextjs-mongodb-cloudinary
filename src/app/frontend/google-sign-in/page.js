'use client';

import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Triangle, CircleAlert } from 'lucide-react';
import { useEffect, useRef, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import BASE_URL from '@/lib/base-url';
import { idSelected } from '@/lib/shortcuts';
import { Context } from '@/components/context-provider/context-provider';

const GoogleSignIn = () => {
    const createAccountMenu = useRef();
    const router = useRouter();
    const [ recognition, setRecognition ] = useState('');
    const { clientDB, dispatch } = useContext(Context);
    const enterAnEmailOrPhoneNumber = useRef();
    const couldNotFind = useRef();

    const dispatchUserRecognition = async () => {

        recognition === '' && (couldNotFind.current.style.display = 'none');
        recognition === '' && (enterAnEmailOrPhoneNumber.current.style.display = 'flex');
        if (recognition === '') return;

        const res = await fetch(`${BASE_URL}/backend/users/single/check-if-exists/${recognition}`);
        const data = await res.json();

        console.log('GoogleSignIn dispatchUserRecognition data', data);

        if (!data.existing) {
            enterAnEmailOrPhoneNumber.current.style.display = 'none'
            couldNotFind.current.style.display = 'flex'
            return;
        }

        dispatch({ type: 'setSignIn', payload: {
            category: 'recognition', value: recognition }});

        router.push('/frontend/google-sign-in/enter-password');
    };

    useEffect(() => {

        console.log('recognition', recognition);

    }, [recognition]);

    return (
        <div className={styles.googleSignIn}>
            <Image
                className={styles.googleGRainbowLogo}
                src='/logos/google-g-rainbow-logo.png'
                width='52'
                height='52'
                alt="Amazon header logo"
            />
            <section className={styles.text}>
                <h1>Sign in</h1>
                <p>with your Google Account to continue to YouTube. This</p>
                <p>account will be available to other Google apps in the browser.</p>
                <input className={styles.emailOrPhone} placeholder='Email or phone'
                    id='sign-in-user-recognition' value={recognition}
                    onChange={(event) => setRecognition(event.target.value)}
                />

                <div className={styles.errorMessage} ref={enterAnEmailOrPhoneNumber}>
                    <CircleAlert size={18}/>
                    <p>Enter an email or phone number</p>
                </div>

                <div className={styles.errorMessage} ref={couldNotFind}>
                    <CircleAlert size={18}/>
                    <p>Couldn't find your Google Account</p>
                </div>

                <Link href='#' className={styles.forgotEmail}>Forgot email?</Link>
                <p className={styles.notYourComputer}>Not your computer? Use Guest mode to sign in privately. <Link href='#' className={styles.learnMore}>Learn more</Link></p>
                <Link href='#' className={styles.aboutUsingGuest}>about using Guest mode</Link>
                <div className={styles.buttons}>
                    <button className={styles.createAccount} onClick={() => createAccountMenu.current.style.display = 'flex'}>Create account</button>
                    <button className={styles.next}
                        onClick={dispatchUserRecognition}
                    >Next</button>
                    <div className={styles.createAccountMenu} ref={createAccountMenu}>
                        <p onClick={() => router.push('/frontend/google-create-a-account')}>For my personal use</p>
                        <p>For my child</p>
                        <p>For work or my business</p>
                    </div>
                </div>
            </section>
            <section className={styles.bottom}>
                <div>
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

export default GoogleSignIn;