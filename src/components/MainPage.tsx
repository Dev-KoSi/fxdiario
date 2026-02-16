import { Header } from "./Header";
import '../styles/MainPage.css'
import { HomePage } from "../pages/HomePage";


export function MainPage() {

    return (
        <div className="mainpage">
            <Header/>
            <HomePage/>
        </div>
    )
}