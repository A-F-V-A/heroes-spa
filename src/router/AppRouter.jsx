import { Routes ,Route } from "react-router-dom"
import { LoginPage } from "../auth"
import { RoutesHeroes } from '../heroes/'




export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path='login' element={<LoginPage/>}></Route>
                <Route path='/*' element={<RoutesHeroes/>}></Route>
            </Routes>
        </>
    )
}