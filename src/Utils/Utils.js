import { toast } from 'react-toastify';

export const EMOJI_URI = process.env.REACT_APP_URI_EMOJI

// function getEmojiFromCode(emoji, isLeft) {
//     var emoji = isLeft ? emoji.leftEmojiCodepoint : emoji.rightEmojiCodepoint;
//     try {
//         return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji}/emoji.svg`;
//     } catch (error) {
//         return "";
//     }
// }

export function getEmojiFromCode(emoji) {
    let modifiedEmoji = emoji.replace("fe0f-", "").replace("-fe0f", "");

    // Replace "-" with "_"
    modifiedEmoji = modifiedEmoji.replace(/-/g, '_');

    // Remove trailing "_", if any
    if (modifiedEmoji.endsWith("_")) {
        modifiedEmoji = modifiedEmoji.substring(0, modifiedEmoji.length - 1);
    }

    return `${EMOJI_URI}emoji_u${modifiedEmoji}.svg`;
}

export function getRandomEmoji(list) {
    if (list.length > 0) {
        return list[Math.floor(Math.random() * list.length)];
    } else {
        return "";
    }
}

export function getEmojiCombinations(emojiMixer, emoji) {
    try {
        var remainEmojiList = Object.keys(emojiMixer[emoji]?.combinations);
        return remainEmojiList;
    } catch (e) {
        return [];
    }
}

export function getEmojiCombinationsWithData(emojiMixer, emoji) {
    try {
        var remainEmojiList = emojiMixer[emoji].combinations;
        return remainEmojiList;
    } catch (e) {
        return [];
    }
}


export function checkEmojiEnableDisabled(emojiMixer, firstEmoji, mainEmoji) {
    var combinations = emojiMixer[firstEmoji]?.combinations;
    if (combinations) {
        var finalValue = combinations[mainEmoji]?.length > 0;
        return !finalValue;
    }
    return false;
}

export const fetchWithTimeout = async (url, options = {}, timeout = 5000) => {
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), timeout)
    );

    const response = await Promise.race([
        fetch(url, options),
        timeoutPromise
    ]);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const copyImageToClipboard = async (imageUrl) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const clipboardItem = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([clipboardItem]);
        toast.success("Copied Successfully");
    } catch (error) {
        console.error('Failed to copy image: ', error);
    }
};