'use client';

import styles from './page.module.css';
import { Check, Triangle, CircleAlert } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '@/components/context-provider/context-provider';
import { getDisplay } from '@/lib/shortcuts';
import BASE_URL from '@/lib/base-url';

const CreateAStrongPassword = () => {
    const router = useRouter();
    const { clientDB, dispatch } = useContext(Context);
    const checkContainer = useRef();
    const check = useRef();
    const [ inputType, setInputType ] = useState('password');
    const [ checkBGColor, setCheckBGColor ] = useState('#0e0e0e');

    const enterAPassword = useRef();
    const use8charOrMore = useRef();
    const confirmYourPassword = useRef();
    const didNotMatch = useRef();

    const togglePasswordVisilibity = () => {
        getDisplay(check.current) === 'block' ? check.current.style.display = 'none' :
            check.current.style.display = 'block';

        inputType === 'password' ? setInputType('text') : setInputType('password');
        checkBGColor === '#0e0e0e' ? setCheckBGColor('#acc7f4')
            : setCheckBGColor('#0e0e0e');
    };
    
    const dispatchPassword = async () => {
        const password = document.querySelector(`#password`).value;
        const confirm = document.querySelector(`#confirm`).value;

        const handleErrors = (currentMessage) => {
            [didNotMatch, use8charOrMore, confirmYourPassword, enterAPassword]
                .forEach(message => message.current.style.display = 'none');
            currentMessage.current.style.display = 'flex';
        };
        
        if (password === '') return handleErrors(enterAPassword);
        
        if (password.length < 8) return handleErrors(use8charOrMore);
        
        if (password !== '' && confirm === '')
            return handleErrors(confirmYourPassword);
        
        if (password === confirm) {
            
            if (
                    clientDB.registration.firstName !== '' &&
                    clientDB.registration.birthDate.month !== '' &&
                    clientDB.registration.birthDate.day > 0 &&
                    clientDB.registration.birthDate.day < 32 &&
                    clientDB.registration.birthDate.year > 1850 &&
                    clientDB.registration.birthDate.year < 2100 &&
                    clientDB.registration.gender !== '' &&
                    clientDB.registration.emailAddress !== '' &&
                    password !== ''
            ) {
                const res = await fetch(`${BASE_URL}/backend/users/single/create`, { method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify({ ...clientDB.registration, password })
                });
            
                const data = await res.json();
            
                console.log('data', data);
                
                if (data.success)
                    dispatch({ type: 'setUser', payload: data.savedUser });

            } else router.push('/frontend/google-something-went-wrong');

        } else return handleErrors(didNotMatch);
    };
    
    useEffect(() => {
        clientDB.user && router.push('/');
    }, [clientDB.user]);
    
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

            <input className={styles.email} placeholder='Password'
                type={inputType} id='password'
            />
            <input className={styles.email} placeholder='Confirm'
                type={inputType} id='confirm'
            />

            <div className={styles.errorMessage} ref={enterAPassword}>
                <CircleAlert size={18}/>
                <p>Enter a password</p>
            </div>

            <div className={styles.errorMessage} ref={use8charOrMore}>
                <CircleAlert size={18}/>
                <p>Use 8 characters or more for your password</p>
            </div>

            <div className={styles.errorMessage} ref={confirmYourPassword}>
                <CircleAlert size={18}/>
                <p>Confirm your password</p>
            </div>

            <div className={styles.errorMessage} ref={didNotMatch}>
                <CircleAlert size={18}/>
                <p>Those passwords didn't match. Try again.</p>
            </div>
            
            <div className={styles.showPassword} onClick={togglePasswordVisilibity}>
                <div className={styles.check} ref={checkContainer}
                    style={{ backgroundColor: checkBGColor }}
                >
                    <Check size={15} ref={check} color='#0e0e0e'/>
                </div>
                <span>Show password</span>
            </div>

            <section className={styles.navigation}>
                <p className={styles.back}>
                    Back
                </p>
                <p className={styles.next}
                    onClick={dispatchPassword}
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