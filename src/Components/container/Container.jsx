import React from 'react'

const Container = ({children}) => {
    return (
        <div className='flex w-full max-w-7xl mx-auto justify-center items-center'>{children}</div>
    )
}

export default Container