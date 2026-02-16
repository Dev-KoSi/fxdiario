import '../styles/Header.css'

export function Header() {

    return(
        <>
            <header className='header'>
                <div className="logo">
                    <img style={{width: '100%'}} className="logo-pic" src="/logo.png" alt="" />
                </div>
            </header>
        </>
    )
}