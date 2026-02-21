import { useState } from 'react';
import '../styles/Sign.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(null);
    const [showPassword, setShowPassword] = useState('password');

    useEffect(() => {
        if(loginSuccess === true) {
            window.location.href = "/"

            setLoginSuccess(null);
        }
    }, [loginSuccess]);

    const loginFunc = async () => {
        const user = {
            email,
            password
        };

        try {
            const res = await fetch('https://fxjournal-be.onrender.com/fxlog/login', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(user)
            });

            const result = await res.json();
            console.log(result)

            if(result) {
                alert(result.message);
            }

            setLoginSuccess(l => l = result.success);

            localStorage.setItem('token', result.accessToken);

            localStorage.setItem('email', result.email);

            localStorage.setItem('user-id', result.userId);

            localStorage.setItem('username', result.username);

            localStorage.setItem('bio', result.bio);

            localStorage.setItem('loginTime', Date.now().toString());
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='sign-page' style={{width : "fit-content", margin : "0 auto"}}>
            <div className="login-page">
                <div className="the-uer-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                        <path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div className="txt">
                    Log In
                </div>

                <div className="login-email bb">
                    <input type='email' placeholder="Email" value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </div>

                <div className="login-password bb">
                    <input type={showPassword} placeholder="Password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>

                <div className="show-password">
                    <input type="checkbox" onClick={() => {
                        setShowPassword((s) => s === '' ? 'password' : '')
                    }}/> <div>Show password</div>
                </div>

                <div className="login-btn hover">
                    <button onClick={() => {
                        loginFunc();
                    }}>Log in</button>
                </div>

                <div className="sign-othwewise">
                    Don't have an account? <Link className='Link' to={'/signup'}><span>Create an account.</span></Link>
                </div>
            </div>

            {/* keeping flex in check */}
            <div>
                <span className='text' style={{opacity: '0'}}>
                    - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eveniet, omnis possimus repudiandae pariatur cupiditate quis, sequi laborum commodi veritatis fugiat magni rerum laudantium molestias tenetur quia enim? Autem, delectus.
                </span>
            </div>
        </div>
    )
}