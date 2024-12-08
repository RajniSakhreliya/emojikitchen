import React, { useState, useEffect } from 'react'
import appwriteService from "../../appWriter/config";
import Container from '../../Components/container/Container';
import PostCard from "../../AdminComponents/PostCard";
import CommonButton from '../../Components/Buttons/CommonButton';
import { useNavigate } from 'react-router-dom';
import Meta from '../../Components/Meta';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => { }, [])

    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8 flex flex-col'>
            <Meta />

            <Container className="flex-col">
                <CommonButton className='max-w-[200px] items-center px-4' onClick={() => {
                    navigate("/add-post")
                }}>
                    Add Post
                </CommonButton>
                <div className='flex flex-wrap w-full justify-center items-start'>
                    {posts.map((post) => (
                        <div key={post.$id} className='m-[10px]
                        w-[calc(90%-20px)]
                        tablet:w-[calc(45%-20px)]
                        laptop:w-[calc(30%-20px)]'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts