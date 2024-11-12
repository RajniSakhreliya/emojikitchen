import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import EmojiView from '../Components/EmojiComponents/EmojiView';
import { getEmojiCombinationsWithData, getRandomEmoji } from '../Utils/Utils';

const Combinations = () => {
    const itemsPerPage = 54;

    const emojiList = useSelector(state => state.emojiData);
    const emojiMixer = useSelector(state => state.emojiMixer);

    const [selectedEmoji, setselectedEmoji] = useState();
    const [combinations, setcombinations] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [totalPages, setTotalPages] = useState(0)

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        var currentItemList = combinations.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
        setCurrentItems(currentItemList);
    }, [currentPage])

    useEffect(() => {
        if (!selectedEmoji) {
            return;
        }

        var list = Object.values(getEmojiCombinationsWithData(emojiMixer, selectedEmoji));
        setcombinations(list);

        setTotalPages(Math.ceil(list.length / itemsPerPage));

        var currentItemList = list.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
        setCurrentItems(currentItemList);

        setCurrentPage(1);

    }, [selectedEmoji])

    useEffect(() => {
        if (emojiList && emojiList.length > 0) {
            console.log("setselectedEmoji - " + emojiList[1]);
            setselectedEmoji(emojiList[1]);
        }
    }, [emojiList])

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };
    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className='flex flex-col mx-5 bg-white rounded-sm p-8 overflow-auto'>
            <h1 className='m-2.5 text-4xl font-bold'>
                Let Loose your Creative Grit with Google Emoji Kitchen Combinations
            </h1>

            <p className='pt-2 pb-8'>
                Why use plain simple language to communicate with your loved ones, when you can be more creative, playful, and fun through emoji combinations? Sometimes words are insufficient to express your true emotions. Or you might hesitate to convey your feelings. That’s where emoji combinations come in handy. Engaging with friends for a late-night group conversation gets more exciting with Emoji Kitchen.
            </p>

            <p className='pt-2 pb-8'>
                You can customize and personalize your expressions giving you more freedom. Moreover, using the best emoji combinations makes you the coolest in your gang. Keeping up with the latest social media trends makes you feel connected and relevant.
            </p>

            <div className='h-[10rem] flex flex-col'>
                <div className="emoji-container">
                    {emojiList.map((emoji, index) => {
                        return (
                            <EmojiView
                                isSelected={selectedEmoji === emoji}
                                key={index}
                                emoji={emoji}
                                width={40}
                                radius={8}
                                emojiClicked={() => {
                                    setselectedEmoji(emoji);
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className='flex w-full justify-end items-center mt-4 mb-4'>
                <span className='font-bold mr-1'>
                    {combinations.length}
                </span>
                emoji combos found
            </div>

            <div className='flex flex-wrap gap-4 w-full p-3 bg-[#F1F7FE]'>
                {
                    currentItems?.map((item, index) => (
                        <div className="w-[calc(16.666%_-_16px)] sm:w-[calc(25%_-_12px)] md:w-[calc(33.333%_-_8px)] p-4 bg-white text-center rounded-md">
                            <img src={item[0].gStaticUrl} />
                        </div>
                    ))
                }
            </div>

            <div>
                <button onClick={goToPrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Combinations


// return (
//     <EmojiView
//         key={index}
//         emoji={emoji}
//         width={40}
//         radius={8}
//         emojiClicked={() => {
//         }}
//     />
// );