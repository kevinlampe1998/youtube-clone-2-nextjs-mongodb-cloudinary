'use client';

import styles from './page.module.css';
import Img from '@/components/image/image';
import Link from 'next/link';

const PageTwo = ({ video, setVideo, preview, setPreview, uploading,
    setUploading, uploadedVideo, setUploadedVideo }) => {

    return (
        <div className={styles.pageTwo}>

            <div className={styles.mainLeft}>
                <section>
                    <h2>Details</h2>
                    <span>Reuse details</span>
                </section>

                <section>
                    <div>
                        <h5>Title (required)</h5>
                        <Img props={[ '/svg/studio/upload-videos/close.png',
                            18, 18, 'close' ]}/>
                    </div>
                    <textarea></textarea>
                    <p>87/100</p>
                </section>

                <section>
                    <div>
                        <h5>Description</h5>
                        <Img props={[ '/svg/studio/upload-videos/close.png',
                            18, 18, 'close' ]}/>
                    </div>
                    <textarea></textarea>
                </section>

                <section>
                    <h2>Thumbnail</h2>
                    <p>Set a thumbnail that stands out and draws viewers' attention. <Link href='#'>Learn more</Link></p>
                    <div>
                        <div>
                            <Img props={[ '/svg/studio/upload-videos/close.png',
                                18, 18, 'close' ]}/>
                            <Img props={[ '/svg/studio/upload-videos/close.png',
                                18, 18, 'close' ]}/>
                            <p>Upload file</p>
                        </div>

                        <div>
                            <Img props={[ '/svg/studio/upload-videos/close.png',
                                18, 18, 'close' ]}/>
                            <p>Auto-generated</p>
                        </div>

                        <div>
                            <Img props={[ '/svg/studio/upload-videos/close.png',
                                18, 18, 'close' ]}/>
                            <p>Test & compared</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Playlists</h2>
                    <p>Add your video to one or more playlists to organize your content for viewers. <Link href='#'>Learn more</Link></p>
                    <div>
                        <p>Select</p>
                        <Img props={[ '/svg/studio/upload-videos/close.png',
                                18, 18, 'close' ]}/>
                    </div>
                </section>

                <section>
                    <h2>Audience</h2>
                    <div>Is this video made for kids? (required)</div>
                    <p>Regardless of your location, you're legally required to comply with the Children's Online</p>
                    <p>Privacy Protection Act (COPPA) and/or other laws. You're required to tell us whether your</p>
                    <p>videos are made for kids. <Link href='#'>What's content made for kids?</Link></p>
                    <div>
                        <div>
                            <Img props={[ '/svg/studio/upload-videos/close.png',
                                    18, 18, 'close' ]}/>
                        </div>
                        <div>
                            <p>Features like personalized ads and notifications won’t be available on videos made for</p>
                            <p>kids. Videos that are set as made for kids by you are more likely to be recommended</p>
                            <p>alongside other kids’ videos. <Link href='#'>Learn more</Link></p>
                        </div>
                    </div>
                    <div>
                        <Img props={[ '/svg/studio/upload-videos/close.png',
                                        18, 18, 'close' ]}/>
                        <p>Yes, it's made for kids</p>
                    </div>
                    <div>
                    <Img props={[ '/svg/studio/upload-videos/close.png',
                                        18, 18, 'close' ]}/>
                        <p>No, it's not made for kids</p>
                    </div>
                </section>

            </div>


            <div className={styles.mainRight}>
                { uploadedVideo ?
                    <video src={uploadedVideo} controls width="300" height='175' />
                    : <div className={styles.videoPlaceholder}
                    >Video placeholder</div> }
            </div>

        </div>
    );
};

export default PageTwo;