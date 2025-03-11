'use client';

import styles from './page.module.css';
import { Check, Triangle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '@/components/context-provider/context-provider';
import { getDisplay } from '@/lib/shortcuts';

const CreateAStrongPassword = () => {
    const router = useRouter();
    const { clientDB, dispatch } = useContext(Context);
    const checkContainer = useRef();
    const check = useRef();
    const [ inputType, setInputType ] = useState('password');
    const [ checkBGColor, setCheckBGColor ] = useState('#0e0e0e');

    useEffect(() => {
        console.log('CreateAStrongPassword: clientDB.registration', clientDB.registration);
    }, [clientDB]);

    const togglePasswordVisilibity = () => {
        getDisplay(check.current) === 'block' ? check.current.style.display = 'none' :
            check.current.style.display = 'block';

        inputType === 'password' ? setInputType('text') : setInputType('password');
        checkBGColor === '#0e0e0e' ? setCheckBGColor('#acc7f4')
            : setCheckBGColor('#0e0e0e');
    };

    const dispatchPassword = () => {
        const registration = clientDB.registration;
        const password = document.querySelector(`#password`).value;
        const confirm = document.querySelector(`#confirm`).value;

        alert(`${password} ${confirm}`);

        if (password === confirm) {
            alert('same password');
            dispatch({ type: 'changeRegistrationFirstLevel', payload: {
                registrationCategory: 'password',
                registrationValue: password
            } });
        }

    };

    const completeRegistration = () => {
        if (
    
                clientDB.registration.firstName !== '' &&
                clientDB.registration.birthDate.month !== '' &&
                clientDB.registration.birthDate.day > 0 &&
                clientDB.registration.birthDate.day < 32 &&
                clientDB.registration.birthDate.year > 1850 &&
                clientDB.registration.birthDate.year < 2100 &&
                clientDB.registration.gender !== '' &&
                clientDB.registration.emailAddress !== '' &&
                clientDB.registration.password !== ''
    
        ) {
    
            alert('registration successfully');
            alert('completeRegistration function: clientDB', clientDB);
    
            // router.push
            //     ('/frontend/google-create-a-account/basic-information/choose-how-you-will-sign-in/choose-your-gmail-address/create-a-strong-password')
        } else {
            alert('Something went wrong! CreateAStrongPassword');
        }
    };
    
    useEffect(() => {

        console.log('useEffect executed!');

        clientDB.registration.password !== '' && completeRegistration();
    
    }, [clientDB]);
    
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