import { useEffect, useState } from 'react'
import '../styles/Profile.css'
import { useNavigate } from 'react-router-dom'
export function Profile() {
    const username = localStorage.getItem('username') || ""
    const bio = localStorage.getItem('bio') || ""
    const [newUsername, setNewUsername] = useState<string>(username)
    const [newBio, setNewBio] = useState<string>(bio)
    const [delprompt, setDelprompt] = useState<string>('')
    const [del, setDel] = useState<Boolean>(false)
    const userId = localStorage.getItem('user-id');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    useEffect(() => {

        if(token === null) {
            navigate('/login');
        }
    }, []); 

    const updateProfile = async () => {
        const newProfile = {
            newUsername,
            newBio
        }

        try {
            const req = await fetch(`https://fxjournal-be.onrender.com/fxlog/update/profile/${userId}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${token}`
                },
                body: JSON.stringify(newProfile)
            })

            const res = await req.json();

            if(res) {
                alert(res.message);
            }

            localStorage.setItem('username', res.newProfile.username);

            localStorage.setItem('bio', res.newProfile.bio);

        } catch (error) {
            console.log(error)
        }

        window.location.reload()
    }

    const deleteAccount = async () => {
        try {
            const req = await fetch(`https://fxjournal-be.onrender.com/fxlog/del/user/${userId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${token}`
                }
            })

            const res = await req.json();

            if(res) {
                localStorage.clear()
                alert(res.message)
            }

        } catch (error) {
            console.log(error)
        }

        window.location.reload()
        
    }

    return (
        <div>
            <section className="profilepage">
                <div>
                    <div className="username">
                        Username
                    </div>

                    <div className="username-input">
                        <input type='text' value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                    </div>

                    <div className="bio">
                        Bio
                    </div>

                    <div className="textarea">
                        <textarea value={newBio} onChange={(e) => setNewBio(e.target.value)}></textarea>
                    </div>

                    <div className='save-btn'>
                        <button onClick={() => updateProfile()}>
                            Save
                        </button>
                    </div>

                    {del && <div className="del-account-prompt">
                        <div className="info">
                            Type <span style={{fontWeight: 'bold'}}>"{username}"</span> to confirm deletion.
                        </div>

                        <div>
                            <input placeholder='eg. Username' value={delprompt} onChange={(e) => setDelprompt(e.target.value)}/>
                        </div>
                        
                        <div>
                            <button className='btn' onClick={() => {
                                if(delprompt === username) {
                                    deleteAccount()
                                }
                            }}>
                                Delete account
                            </button>
                        </div>
                    </div>}

                    {!del && <div className='del-btn'>
                        <button onClick={() => setDel(d => !d)}>
                            Delete your Account
                        </button>
                    </div>}

                    {/* keeping flex in check */}
                    <div>
                        <span className='text' style={{opacity: '0'}}>
                            - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eveniet, omnis possimus repudiandae pariatur cupiditate quis, sequi laborum commodi veritatis fugiat magni rerum laudantium molestias tenetur quia enim? Autem, delectus.
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}