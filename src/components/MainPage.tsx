import { Header } from "./Header";
import '../styles/MainPage.css'
import { HomePage } from "../pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profile } from "../pages/Profile";


export function MainPage() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div>
                    <HomePage/>
                </div>
            )
        },{
            path: '/account',
            element: (
                <div>
                    <Profile/>
                </div>
            )
        },{
            path: '/',
            element: (
                <div>
                    <HomePage/>
                </div>
            )
        },
        
    ])

    return (
        <div className="mainpage">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    )
}