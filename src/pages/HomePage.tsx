import { useEffect, useState } from 'react'
import '../styles/HomePage.css'
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const [more, setMore] = useState<Boolean>(false);
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    
    useEffect(() => {

        if(token === null) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        const home = async () => {
            try {
                const req = await fetch(`https://friendi-be.onrender.com/friendi/home`, {
                    headers : {
                        'Authorization' : `Bearer ${token}`
                    }
                });

                req
            } catch (error) {
                console.log(error);
            }
        }

        home();
    }, []);

    return (
        <div className='homepage'>
            <section className='find'>
                <input className='search' placeholder='Search post...'/>

                <input className='date' type="date"/>
            </section>

            <section className='posts'>
                <div className="post">
                    <div className="details">
                        <div className='asr-date'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#9b9b9b" fill="none" stroke="#9b9b9b" stroke-width="0.5">
                                <path d="M21 19.5C21 18.6716 20.3284 18 19.5 18C18.6716 18 18 18.6716 18 19.5C18 20.3284 18.6716 21 19.5 21C20.3284 21 21 20.3284 21 19.5Z" />
                                <path d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z" />
                                <path d="M6 19.5C6 18.6716 5.32843 18 4.5 18C3.67157 18 3 18.6716 3 19.5C3 20.3284 3.67157 21 4.5 21C5.32843 21 6 20.3284 6 19.5Z" />
                                <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" />
                                <path d="M21 4.5C21 3.67157 20.3284 3 19.5 3C18.6716 3 18 3.67157 18 4.5C18 5.32843 18.6716 6 19.5 6C20.3284 6 21 5.32843 21 4.5Z" />
                                <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" />
                                <path d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z" />
                                <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" />
                                <path d="M6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6C5.32843 6 6 5.32843 6 4.5Z" />
                            </svg>
                            </div>
                            
                            <div className="asr">
                                ASR:
                            </div>

                            <div className="date">
                                16/02/2026 : 11:45
                            </div>
                        </div>

                        <div className="fav">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" />
                            </svg>
                        </div>

                        <div className="edit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="#141B34" stroke-width="1.5">
                                <path d="M6.53792 2.32172C6.69664 1.89276 7.30336 1.89276 7.46208 2.32172L8.1735 4.2443C8.27331 4.51403 8.48597 4.72669 8.7557 4.8265L10.6783 5.53792C11.1072 5.69664 11.1072 6.30336 10.6783 6.46208L8.7557 7.1735C8.48597 7.27331 8.27331 7.48597 8.1735 7.7557L7.46208 9.67828C7.30336 10.1072 6.69665 10.1072 6.53792 9.67828L5.8265 7.7557C5.72669 7.48597 5.51403 7.27331 5.2443 7.1735L3.32172 6.46208C2.89276 6.30336 2.89276 5.69665 3.32172 5.53792L5.2443 4.8265C5.51403 4.72669 5.72669 4.51403 5.8265 4.2443L6.53792 2.32172Z" />
                                <path d="M14.4039 9.64136L15.8869 11.1244M6 22H7.49759C8.70997 22 9.31617 22 9.86124 21.7742C10.4063 21.5484 10.835 21.1198 11.6923 20.2625L19.8417 12.1131C20.3808 11.574 20.6503 11.3045 20.7944 11.0137C21.0685 10.4605 21.0685 9.81094 20.7944 9.25772C20.6503 8.96695 20.3808 8.69741 19.8417 8.15832C19.3026 7.61924 19.0331 7.3497 18.7423 7.20561C18.1891 6.93146 17.5395 6.93146 16.9863 7.20561C16.6955 7.3497 16.426 7.61924 15.8869 8.15832L7.73749 16.3077C6.8802 17.165 6.45156 17.5937 6.22578 18.1388C6 18.6838 6 19.29 6 20.5024V22Z" />
                            </svg>
                        </div>

                        <div className="delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" />
                                <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" />
                                <path d="M9.5 16.5L9.5 10.5" />
                                <path d="M14.5 16.5L14.5 10.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="caption">
                        <span className='text' id={`${more == false ? 'text' : ''}`}>
                            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eveniet, omnis possimus repudiandae pariatur cupiditate quis, sequi laborum commodi veritatis fugiat magni rerum laudantium molestias tenetur quia enim? Autem, delectus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quo saepe eius, fugiat temporibus architecto quaerat unde sunt animi vero debitis repudiandae ducimus molestias tempora distinctio sit expedita quos? Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad nam beatae iste id officia maxime. Laboriosam ut tempora aliquid non. Dolorem quasi, ducimus qui ipsam facere esse quae non?
                        </span>

                        <span className='more' onClick={() => setMore(m => !m)}>
                            {more == false ? 'more' : 'less'}
                        </span>
                    </div>

                    <img style={{width: '100%'}} src="/fx.png" alt="" />
                </div>
            </section>
        </div>
    )
}