import React from 'react'
import PostForm from "../../AdminComponents/PostForm"
import Container from '../../Components/container/Container'

function AddPost() {
    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost