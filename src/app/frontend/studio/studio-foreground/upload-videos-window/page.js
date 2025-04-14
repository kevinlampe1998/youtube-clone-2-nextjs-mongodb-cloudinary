'use client';

import Link from 'next/link';
import styles from './page.module.css';
import Img from '@/components/image/image';
import { useEffect, useState, useRef } from 'react';

const UploadVideos = () => {

    const [video, setVideo] = useState(null);
    const [fileName, setFileName] = useState();
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedVideo, setUploadedVideo] = useState(null);

    const fileInputRef = useRef(null);

    const [ currentSite, setCurrentSite ] = useState();
  
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
            setUploadedVideo(result.video.url);
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
        <section className={styles.upload}>
            
            <div className={styles.top}>
                <h3>Upload videos</h3>
                <div>
                    <Img props={[ '/svg/studio/upload-videos/send-feedback.png',
                        18, 22, 'send-feedback' ]}/>
                    <Img props={[ '/svg/studio/upload-videos/close.png',
                        21, 21, 'close' ]}/>
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
                    {/*{preview && <video src={preview} controls width="300"/>}*/}

                    <button
                        onClick={() => fileInputRef.current.click()}
                    >Select files</button>
                    
                    {/* <button onClick={handleUpload} disabled={uploading}>
                        {uploading ? 'Uploading...' : 'Video is uploaded!'}
                    </button> */}

                    {/* {uploadedVideo && (
                        <div>
                            <video src={uploadedVideo} controls width="400" />
                        </div>
                    )} */}
                </div>
            </div>

            <div className={styles.bottom}>
                <p>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's <Link href='#'>Terms of Service</Link> and <Link href='#'>Community Guidelines</Link>.</p>
                <p>
                Please be sure not to violate others' copyright or privacy rights. <Link href='#'>Learn more</Link></p>
            </div>

        </section>
    );
};

export default UploadVideos;