import { useState } from 'react'
import '../styles/Profile.css'
export function Profile() {
    const [username, setUsername] = useState<string>('Kojo')
    const [bio, setBio] = useState<string>('I love trading')
    const [delprompt, setDelprompt] = useState<string>('')
    const [del, setDel] = useState<Boolean>(false)

    return (
        <div>
            <section className="profilepage">
                <div>
                    <div className="username">
                        Username
                    </div>

                    <div className="username-input">
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className="bio">
                        Bio
                    </div>

                    <div className="textarea">
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                    </div>

                    <div className='save-btn'>
                        <button>
                            Save
                        </button>
                    </div>

                    {del && <div className="del-account-prompt">
                        <div className="info">
                            Type <span style={{fontWeight: 'bold'}}>"Username"</span> to confirm deletion.
                        </div>

                        <div>
                            <input placeholder='eg. Username' value={delprompt} onChange={(e) => setDelprompt(e.target.value)}/>
                        </div>
                        
                        <div>
                            <button className='btn' onClick={() => setDel(d => !d)}>
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