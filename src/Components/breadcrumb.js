import React from 'react'

const breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/category">Category</a></li>
                <li aria-current="page">Page Title</li>
            </ol>
        </nav>
    )
}

export default breadcrumb