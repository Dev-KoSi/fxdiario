import '../styles/Header.css'

export function Header() {

    return(
        <>
            <div id='find'></div>
            <header className='header'>
                <div className="logo">
                    <img style={{width: '100%'}} className="logo-pic" src="/logo.png" alt="" />
                </div>

                <section className='go-up'>
                    <a href="#find"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
                        <path d="M12 9.00014V16.0002M15.5 11.5C15.5 11.5 12.9223 8.00001 12 8C11.0777 7.99999 8.50003 11.5 8.50003 11.5" />
                    </svg></a>
                </section>
            </header>
        </>
    )
}