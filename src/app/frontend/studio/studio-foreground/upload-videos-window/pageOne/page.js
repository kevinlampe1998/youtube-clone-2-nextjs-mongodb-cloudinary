'use client';

import styles from './page.module.css';
import Img from '@/components/image/image';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const PageOne = ({ video, setVideo, preview, setPreview, uploading,
    setUploading, uploadedVideo, setUploadedVideo, currentSite,
    setCurrentSite }) => {

    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        setVideo(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreview(reader.result);
        };
      };

    const handleUpload = async () => {
        if (!video) return alert('Please select a video!');
    
        setUploading(true);
        try {
            const response = await fetch('/backend/videos/single/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: preview }),
            });
          
            const result = await response.json();

            if (result.success) {
                console.log('Video successfully uploaded!');
                setUploadedVideo(result.video.url);
                setCurrentSite(2);
            } else {
                console.log('Upload error');
            }

        } catch (error) {
            console.error('Upload Error:', error);
        } finally {
            setUploading(false);
        }
    };

    useEffect(() => {
        preview && handleUpload();
    }, [preview]);

    return (
        <div className={styles.pageOne}>
            <div className={styles.top}>
                <h3>Upload videos</h3>
                <div>
                    <Img props={[ '/svg/studio/upload-videos/send-feedback.png',
                        18, 22, 'send-feedback' ]}/>
                    <Img props={[ '/svg/studio/upload-videos/close.png',
                        18, 18, 'close' ]}/>
                </div>
            </div>

            <div className={styles.middle}>
                <Img props={[ '/svg/studio/upload-videos/select-files.png',
                    165, 155, 'select-files']}/>
                <p>Drag and drop video files to upload</p>
                <p>Your videos will be private until you publish them.</p>
                <div className="container">

                    <input type="file" accept="video/*" onChange={handleFileChange}
                        ref={fileInputRef} style={{ display: 'none' }}
                    />

                    <button
                        onClick={() => fileInputRef.current.click()}
                    >Select files</button>
                    
                </div>
            </div>

            <div className={styles.bottom}>
                <p>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's <Link href='#'>Terms of Service</Link> and <Link href='#'>Community Guidelines</Link>.</p>
                <p>
                Please be sure not to violate others' copyright or privacy rights. <Link href='#'>Learn more</Link></p>
            </div>
        </div>
    );
};

export default PageOne;