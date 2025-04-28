'use client';

import { closeForeGround } from '@/components/foreground/foreground';
import styles from './page.module.css';
import Img from '@/components/image/image';
import { idSelected } from '@/lib/shortcuts';
import UploadVideos from './upload-videos-window/page';
import { useState } from 'react';

const create = [
    'upload-videos',
    'go-live',
    'create-post',
    'new-playlist',
    'new-podcast',
];

const foreGroundChildrenIds = [
    'profile-logo-clicked',
    'create-button-clicked',
    'studio-upload-window',
    'studio-foreground',
    'studio-dark-overlay'
];

export const closeStudioForeGround = () => {
    foreGroundChildrenIds.forEach(child =>
        idSelected(child).style.display = 'none'
    );
    idSelected('studio-foreground').style.display = 'none';
};

const emptyFunc = () => {};

const ForeGround = () => {
    const [ current, setCurrent ] = useState('');

    const close = (event) => 
        event.target.id === 'studio-foreground' && closeStudioForeGround();

    const openUploadVideos = () => {
        setCurrent('upload-videos');
        idSelected('studio-create-menu').style.display = 'none';
    };

    return (
        <div className={styles.foreground}
            id='studio-foreground'
            onClick={close}
        >
            <section className={styles.create}
                id='studio-create-menu'
            >
                {
                    create.map(topic => (
                        <div className={styles.button} key={topic}
                            onClick={topic === 'upload-videos' ? openUploadVideos : () => {}}
                        >
                            <Img props={[ `/svg/studio/foreground/${topic}.png`,
                                20, 20, topic ]}/>
                            <p>{topic[0].toUpperCase() + topic.slice(1, topic.length)}</p>
                        </div>
                    ))
                }
            </section>

            {
                current === 'upload-videos' ?

                <UploadVideos setCurrent={setCurrent}/> : <></>
            }

            <section id='studio-dark-overlay'
            className={styles.darkOverlay}></section>
        </div>
    );
};

export default ForeGround;