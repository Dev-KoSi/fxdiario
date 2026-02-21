import { useState } from 'react'
import '../styles/SideBar.css'

export function SideBar() {
    const [theme, setTheme] = useState<Boolean>(false);

    return (
        <div>
            <section className='sidebar'>
                <div className="profile">
                    <div className="pic">K</div>

                    <div className="name-email">
                        <div className="name">
                            Kojo Sika
                        </div>

                        <div className="email">
                            otpog23@gmail.com
                        </div>
                    </div>

                    <div className="theme" style={{cursor: 'pointer'}}>
                        {theme && <svg onClick={() => setTheme(t => !t)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" />
                        </svg>}

                        {!theme && <svg onClick={() => setTheme(t => !t)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="#141B34" stroke-width="1.5">
                            <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" />
                            <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" />
                        </svg>}
                    </div>
                </div>

                <div className="bio">
                    Trading with Jesus
                </div>

                <a href="/account"><div className="account">
                    Account
                </div></a>

                <a href="/favourite"><div className="fav">
                    Favourite
                </div></a>

                <a href="/addlog"><div className="add-log">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12.001 5.00003V19.002" />
                        <path d="M19.002 12.002L4.99998 12.002" />
                    </svg>
                    Add
                </div></a>

                <div className="logout">
                    Log out
                </div>
            </section>
        </div>
    )
}