'use client';

import styles from './page.module.css';
import { Triangle, CircleAlert } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '@/components/context-provider/context-provider';
import next from 'next';

const CreateAGoogleAccount = () => {
    const router = useRouter();
    const { clientDB, dispatch } = useContext(Context);
    const errorMessage = useRef();

    useEffect(() => {
        console.log('clientDB', clientDB);
    }, [clientDB]);

    const nextPage = () => {
        if ( clientDB.registration.firstName !== '' ) {
            router.push('/frontend/google-create-a-account/basic-information')
        } else {
            errorMessage.current.style.display = 'flex';
        }
    };

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
            <input className={styles.firstName} placeholder='First name'
                onChange={(event) => 
                    dispatch({
                        type: 'changeRegistrationFirstLevel',
                        payload: {
                            registrationCategory: 'firstName',
                            registrationValue: event.target.value
                        }
                    })
                }
                value={clientDB.registration.firstName}
            />
            <input className={styles.lastName} placeholder='Last name (optional)'
                onChange={(event) => 
                    dispatch({
                        type: 'changeRegistrationFirstLevel',
                        payload: {
                            registrationCategory: 'lastName',
                            registrationValue: event.target.value
                        }
                    })
                }
                value={clientDB.registration.lastName}
            />

            <div className={styles.errorMessage} ref={errorMessage}>
                <CircleAlert size={18}/>
                <p>Enter first name</p>
            </div>

            <p className={styles.next} onClick={nextPage}>Next</p>
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