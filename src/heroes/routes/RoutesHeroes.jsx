import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'
export const RoutesHeroes =()=>{
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage/>}></Route>
                    <Route path='dc' element={<DcPage/>}></Route>
                    <Route path='search' element={<SearchPage/>}></Route>
                    <Route path='hero/:id' element={<HeroPage/>}></Route>

                    <Route path='/' element={<Navigate to='/dc'/>}></Route>
                </Routes>
            </div>

        </>
    )
}