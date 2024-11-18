import React, { useEffect, useState } from 'react'
import appwriteService from "../../appWriter/config";
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../Components/container/Container';
import PostForm from '../../AdminComponents/PostForm';
import { startLoading, stopLoading } from '../../app/loadingSlice';
import { useDispatch } from 'react-redux';

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoading());

        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
                dispatch(stopLoading());
            })
        } else {
            dispatch(stopLoading());
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost