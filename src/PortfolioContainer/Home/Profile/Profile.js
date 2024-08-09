import React from 'react'
import { FaGithubSquare, FaLinkedin, FaWhatsapp, FaMailBulk } from 'react-icons/fa'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://wa.me/+254741103341' target='_blank' rel='noopener noreferrer'>
                                <FaWhatsapp />
                            </a>
                            <a href='https://www.linkedin.com/in/engineer-philemon/' target='_blank' rel='noopener noreferrer'>
                                <FaLinkedin />
                            </a>
                            <a href='https://github.com/PhilTech-Hub' target='_blank' rel='noopener noreferrer'>
                                <FaGithubSquare />
                            </a>
                            <a href='mailto:victorphilemon001@gmail.com' target='_blank' rel='noopener noreferrer'>
                                <FaMailBulk />
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='priamry-text'>
                            {" "}
                            Hello I'M <span className='highlighted-text'>Philemon</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Software Developer',
                                        1500,
                                        'MERN Fullstack Developer',
                                        1500,
                                        'Network Administrator',
                                        1500,
                                        'React/ React Native Develper',
                                        1500,
                                        'Software Engineer',
                                        1500,
                                    ]}
                                />
                            </h1>
                        
                        </span>
                        <span className='profile-role-tagline'>
                            Creative Software Developer turning ideas into powerful technology.
                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            Hire Me
                        </button>
                        <a href='Curriculam Vitae.pdf' download='Philemon Victor CV.pdf'>
                            <button className='btn highlighted-btn'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
