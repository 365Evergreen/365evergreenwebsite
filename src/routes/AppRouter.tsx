import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '../layouts/AppShell/AppShell'
import HomePage from '../pages/HomePage/HomePage'
import LatestPostsArchive from '../pages/LatestsPostsArchive/LatestPostsArchive'
import WhatWeDo from '../pages/WhateWeDo/WhatWeDo'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppShell />}>
                <Route path="/" element={<HomePage/>}>  </Route>
                <Route path="/latest-updates" element={<LatestPostsArchive/>}></Route>
                <Route path="/what-we-do" element={<WhatWeDo/>}></Route>
              
                </Route>
            </Routes></BrowserRouter>
    )
}