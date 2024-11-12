import React, { useEffect, useState } from 'react'
import iconCopy from "../../assets/icons/ic_copy.svg";
import icError from "../../assets/icons/ic_error.png";
import { copyImageToClipboard } from '../../Utils/Utils';

const ResultComponent = ({ finalEmoji, width = 70 }) => {
    const [imageCopied, setimageCopied] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoading(false);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageLoading(false);
        setImageError(true);
    };

    const styles = {
        view: {
            width: width,
            height: width,
        },
    };

    useEffect(() => {
        setImageLoading(false);
        setImageError(false);
        setimageCopied(false);
    }, [finalEmoji])

    return (
        <div className='resultComponent m-2 hover:bg-[#F1F3F4]'
            onClick={() => {
                copyImageToClipboard(finalEmoji);
                setimageCopied(true);
            }}>

            <div className={`relative transition duration-100`} style={styles.view}>

                {imageLoading && !imageError && (
                    <div className="loading-circle"></div>
                )}

                {!imageError && (
                    <img
                        loading="lazy"
                        className='p-1'
                        src={finalEmoji}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                )}

                {imageError && (
                    <img
                        loading="lazy"
                        className='p-3'
                        src={icError}
                        alt='Emoji'
                    />
                )}
            </div>

            <div className='randomComponent mt-1'>
                <img
                    loading="lazy"
                    src={iconCopy}
                    style={{ width: 20, height: 20 }}
                    className={`${imageCopied ? "hidden" : ""}`} />
                {imageCopied && (
                    <div>copied</div>
                )}
            </div>
        </div>
    )
}

export default ResultComponent
