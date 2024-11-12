import React from 'react'
import { Route, Routes } from "react-router";
import Home from '../Pages/Home'
import Cooking from '../Pages/Cooking';
import Combinations from '../Pages/Combinations';

const Router = () => {
    return (
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            {/* <Route path="*" exact={true} element={<NotFound />} /> */}

            <Route path="/cooking" exact={true} element={<Cooking />} />
            <Route path="/emoji-kitchen-combinations" exact={true} element={<Combinations />} />

        </Routes>
    )
}

export default Router
