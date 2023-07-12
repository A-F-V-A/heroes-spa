import { Routes ,Route, Navigate } from "react-router-dom"
import { MarvelPage, DcPage } from "../heroes"
import { LoginPage } from "../auth"
import { Navbar } from "../ui"




export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='marvel' element={<MarvelPage/>}></Route>
                <Route path='dc' element={<DcPage/>}></Route>
                <Route path='login' element={<LoginPage/>}></Route>
                <Route path='/' element={<Navigate to='/dc'/>}></Route>
            </Routes>
        </>
    )
}