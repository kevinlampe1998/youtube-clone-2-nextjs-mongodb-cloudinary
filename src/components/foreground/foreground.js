'use client';

import styles from './foreground.module.css';
import { SquarePlay, Radio, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Context } from '../context-provider/context-provider';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { letters, numbers } from '@/lib/chars';
import BASE_URL from '@/lib/base-url';
import { idSelected } from '@/lib/shortcuts';
import Img from '../image/image';
import { useRouter } from 'next/navigation';

const foreGroundChildrenIds = [
    'profile-logo-clicked',
    'create-button-clicked'
];

export const closeForeGround = () => {
    foreGroundChildrenIds.forEach(child =>
        idSelected(child).style.display = 'none'
    );
    idSelected('foreground').style.display = 'none';
};

const ForeGround = () => {
    const { clientDB, dispatch } = useContext(Context);
    const [ profileId, setProfileId ] = useState();
    const router = useRouter();

    useEffect(() => {
        console.log('foreground clientDB', clientDB);
    }, []);

    const createProfileId = () => {
        const id = [];

        while (id.length < 6) {
            id.push(Math.round(Math.random() * 1));
        }

        const randomId = id.map(charCase => charCase ?
            letters.lowercase[Math.floor(Math.random() * letters.lowercase.length)]
                : numbers.digits[Math.floor(Math.random() * numbers.digits.length)]);

        console.log('randomId', randomId);

        setProfileId(randomId);
    };

    useEffect(() => {
        createProfileId();
    }, []);

    const signOut = async () => {
        const res = await fetch(`${BASE_URL}/backend/users/single/sign-out`, {
            credentials: 'include'
        });

        const data = await res.json();
        
        console.log('data', data);
        
        data.success && dispatch({ type: 'setUser', payload: null });
        data.success && location.reload();
    };

    const close = (event) => 
        event.target.id === 'foreground' && closeForeGround();
    

    return (
        <div className={styles.foreGround} id='foreground'
            onClick={close}
        >

{/* ---- create -------------------------------------------------------------- */}

            <section className={styles.create} id='create-button-clicked'>
                <div onClick={() => (closeForeGround(),
                    router.push('/frontend/studio'))}
                >
                    <Img props={[ '/svg/foreground/create/upload-video.png',
                        28, 30, 'create-post' ]} />
                    <p>Upload video</p>
                </div>
                <div>
                    <Img props={[ '/svg/foreground/create/go-live.png',
                        28, 30, 'create-post' ]} />
                    <p>Go live</p>
                </div>
                <div>
                    <Img props={[ '/svg/foreground/create/create-post.png',
                        28, 30, 'create-post' ]} />
                    <p>Create post</p>
                </div>

            </section>

{/* ---- profileLogoClicked -------------------------------------------------------------- */}

            <section className={styles.profileLogoClicked} id='profile-logo-clicked'>

{/* ---- profileLogoFirstSection -------------------------------------------------------------- */}

                <div className={styles.profileLogoFirstSection}>
                    <div className={styles.profileLogo}>
                        <p>{clientDB.user ? clientDB.user.firstName[0] : 'P'}</p>
                    </div>

                    <div>

                        {
                            clientDB.user && profileId ?

                            <div>
                                <p>{clientDB.user.firstName} {clientDB.user.lastName}</p>
                                <p>@{clientDB.user.firstName}{clientDB.user.lastName}-{profileId}</p>
                            </div> :

                            <div>
                                <p>Placeholder</p>
                                <p>@Placeholder-{profileId && profileId}</p>
                            </div>
                        }
                        <Link href='#'>View your channel</Link>
                    </div>

                </div>

{/* ---- profileLogoSecondSection -------------------------------------------------------------- */}

                <div className={styles.profileLogoSecondSection}>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/google-account.png'
                            width='35'
                            height='35'
                            alt="google-account"
                        />
                        <p>Google Account</p>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/switch-account.png'
                            width='35'
                            height='35'
                            alt="switch-account"
                        />
                        <p>Switch account</p>
                        <ChevronRight size={20}/>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/sign-out.png'
                            width='35'
                            height='35'
                            alt="sign-out"
                        />
                        <p onClick={signOut}>Sign out</p>
                    </div>
             
                </div>

{/* ------------------------------------------------------------------ */}

                <div className={styles.profileLogoSecondSection}>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/youtube-studio.png'
                            width='35'
                            height='35'
                            alt="youtube-studio"
                        />
                        <p>Youtube Studio</p>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/purchases-and-memberships.png'
                            width='35'
                            height='35'
                            alt="purchases-and-memberships"
                        />
                        <p>Purchases and memberships</p>
                    </div>

                </div>

{/* ------------------------------------------------------------------ */}

                <div className={styles.profileLogoSecondSection}>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/your-data-in-youtube.png'
                            width='35'
                            height='35'
                            alt="your-data-in-youtube"
                        />
                        <p>Your data in Youtube</p>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/appearance.png'
                            width='35'
                            height='35'
                            alt="appearance"
                        />
                        <p>Appearance: Device theme</p>
                        <ChevronRight size={20}/>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/language.png'
                            width='35'
                            height='35'
                            alt="language"
                        />
                        <p>Language: English</p>
                        <ChevronRight size={20}/>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/restricted-mode.png'
                            width='35'
                            height='35'
                            alt="restricted-mode"
                        />
                        <p>Restricted Mode: Off</p>
                        <ChevronRight size={20}/>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/location.png'
                            width='35'
                            height='35'
                            alt="location"
                        />
                        <p>Location: Germany</p>
                        <ChevronRight size={20}/>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/keyboard-shortcuts.png'
                            width='35'
                            height='35'
                            alt="keyboard-shortcuts"
                        />
                        <p>Keyboard shortcuts</p>
                    </div>

                </div>

{/* ------------------------------------------------------------------ */}

                <div className={styles.profileLogoSecondSection}>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/settings.png'
                            width='35'
                            height='35'
                            alt="settings"
                        />
                        <p>Settings</p>
                    </div>

                </div>

{/* ------------------------------------------------------------------ */}

                <div className={styles.profileLogoSecondSection}>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/help.png'
                            width='35'
                            height='35'
                            alt="help"
                        />
                        <p>Help</p>
                    </div>

                    <div>
                        <Image
                            src='/svg/header/profile-logo-clicked/send-feedback.png'
                            width='35'
                            height='35'
                            alt="send-feedback"
                        />
                        <p>Send feedback</p>
                    </div>

                </div>

{/* ------------------------------------------------------------------ */}

            </section>
        </div>
    );
};

export default ForeGround;