import React from 'react'
import appwriteService from "../appWriter/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='flex flex-col w-full bg-white rounded-xl items-center shadow-md'>
                <img
                    style={{ borderRadius: "inherit" }}
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className='w-full h-[250px] object-cover justify-center mb-2 flex-shrink-0 ' />
                <h2
                    className='w-full text-[18px] p-2 truncate'
                >{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard