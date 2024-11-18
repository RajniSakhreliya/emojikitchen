import React from 'react'

const HtmlValue = ({ value = "" }) => {
    return (
        <div
            className="text-gray-700 pt-2 pb-8 text-base"
            dangerouslySetInnerHTML={{ __html: value }}
        />
    );
}

export default HtmlValue;
