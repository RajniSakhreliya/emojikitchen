import React from 'react'

const CommonButton = ({ btnText, onBtnClick, extraClass }) => {
    return (
            <button style={styles.button} className={`${extraClass} mt-1`} onClick={onBtnClick}>
                {btnText}
            </button>
    )
}

export default CommonButton
const styles = {
    button: {
        width: '100%',
        padding: '5px 0px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
    }
}