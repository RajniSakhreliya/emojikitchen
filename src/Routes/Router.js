import React from 'react'
import { Route, Routes } from "react-router";
import Home from '../Pages/Home'
import Cooking from '../Pages/Cooking';
import Combinations from '../Pages/Combinations';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Disclaimer from '../Pages/Disclaimer';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import Login from '../Pages/Admin/Login';
import Signup from "../Pages/Admin/Signup";
import AuthLayout from "../AdminComponents/AuthLayout";
import AllPosts from '../Pages/Admin/AllPosts';
import AddPost from '../Pages/Admin/AddPost';
import Post from '../Pages/Admin/Post';
import EditPost from '../Pages/Admin/EditPost';

const Router = () => {
    return (
            <Routes>
                <Route path="/" exact={true} element={<Home />} />

                <Route path="/cooking" exact={true} element={<Cooking />} />
                <Route path="/emoji-kitchen-combinations" exact={true} element={<Combinations />} />
                <Route path="/about-us" exact={true} element={<AboutUs />} />
                <Route path="/contact" exact={true} element={<ContactUs />} />
                <Route path="/disclaimer" exact={true} element={<Disclaimer />} />
                <Route path="/privacy-policy" exact={true} element={<PrivacyPolicy />} />

                <Route path="/login" exact={true}
                    element={<AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                    } />

                <Route path="/signup"
                    exact={true} element={
                        <AuthLayout authentication={false}>
                            <Signup />
                        </AuthLayout>
                    } />

                <Route path="/all-posts"
                    exact={true} element={
                        <AllPosts />
                    } />

                <Route path="/add-post"
                    exact={true} element={
                        <AuthLayout authentication>
                            <AddPost />
                        </AuthLayout>
                    } />

                <Route path="/edit-post/:slug"
                    exact={true} element={
                        <AuthLayout authentication>
                            <EditPost />
                        </AuthLayout>
                    } />

                <Route path="/post/:slug"
                    exact={true}
                    element={<Post />} />

            </Routes>
    )
}

export default Router
