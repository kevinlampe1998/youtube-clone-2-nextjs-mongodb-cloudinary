'use client';

import Link from 'next/link';
import styles from './page.module.css';
import Img from '@/components/image/image';
import { useEffect, useState, useRef } from 'react';
import Header from './header/component';
import Footer from './footer/component';
import PageOne from './pageOne/page';
import PageTwo from './pageTwo/page';
import PageThree from './pageThree/page';
import PageFour from './pageFour/page';
import PageFive from './pageFive/page';

const UploadVideos = ({ setCurrent }) => {

    const [video, setVideo] = useState(null);
    const [fileName, setFileName] = useState();
    const [preview, setPreview] = useState(null);

    const [uploading, setUploading] = useState(false);
    const [uploadedVideo, setUploadedVideo] = useState(null);

    const fileInputRef = useRef(null);

    const [ currentSite, setCurrentSite ] = useState(4);

    return (
        <section className={styles.upload} id='studio-upload-window'>

            { currentSite !== 1 && <Header setCurrent={setCurrent}/> }

            {

                currentSite === 1 ?

                <PageOne video={video} setVideo={setVideo}
                    preview={preview} setPreview={setPreview}
                    uploading={uploading} setUploading={setUploading}
                    uploadedVideo={uploadedVideo} setUploadedVideo={setUploadedVideo}
                    currentSite={currentSite} setCurrentSite={setCurrentSite}
                />

                : currentSite === 2 ?

                <PageTwo video={video} setVideo={setVideo}
                    preview={preview} setPreview={setPreview}
                    uploading={uploading} setUploading={setUploading}
                    uploadedVideo={uploadedVideo} setUploadedVideo={setUploadedVideo}    
                />

                : currentSite === 3 ?

                <PageThree/>

                : currentSite === 4 ?
                
                <PageFour/>
                
                : currentSite === 5 ?

                <PageFive/>

                : <>...loading</>

            }

            { currentSite !== 1 && <Footer/> }

        </section>
    );
};

export default UploadVideos;