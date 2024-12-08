import React from 'react'
import HtmlValue from '../Components/HtmlValue'
import Meta from '../Components/Meta'

const AboutUs = () => {
    const data = [
        {
            "heading": "",
            "value": "Welcome to our world of creativity and innovation! At EmojiKitchen, we believe in the power of expression and the joy of communication. Our mission is to enhance the way you connect with others through cutting-edge digital tools and features."
        },
        {
            "heading": "Emoji Kitchen: Unleash Your Creativity with Custom Emoji Mashups",
            "value": "One of our standout features is Emoji Kitchen, a delightful and innovative tool by Google that allows users to create custom emoji mashups. Launched within Gboard, Google’s keyboard app, Emoji Kitchen offers a playful way to express emotions and ideas by combining two existing emojis into a unique hybrid. This feature taps into the creative potential of emojis, letting users experiment with thousands of combinations to find the perfect visual representation of their feelings."
        },
        {
            "heading": "A New Way to Express Yourself",
            "value": "Imagine merging a smiley face with heart eyes to create a super-expressive emoji that conveys intense joy and love. Or mix a cactus with a party popper to depict a prickly celebration. The possibilities are vast and often humorous, adding a new layer of fun to digital communication. Emoji Kitchen not only enhances the way we communicate but also encourages users to think outside the box and get creative with their messages."
        },
        {
            "heading": "How to Use Emoji Kitchen",
            "value": "This feature is easy to use: simply tap on an emoji in Gboard, and the keyboard will suggest various mashup options. These suggestions are context-aware and change based on the emoji you select, making the creation process intuitive and seamless. Whether you’re trying to convey a complex emotion or just want to add a bit of whimsy to your text, Emoji Kitchen offers a versatile toolkit for self-expression."
        },
        {
            "heading": "Beyond Personal Messaging",
            "value": "Beyond personal messaging, Emoji Kitchen has found a place in social media, allowing users to craft unique emojis that stand out in their posts and stories. It’s a testament to the evolving nature of digital communication, where static images give way to dynamic and personalized expressions."
        },
        {
            "heading": "Conclusion",
            "value": "In essence, Emoji Kitchen is more than just a fun tool; it's a celebration of creativity and individuality in the digital age. By enabling users to craft their own emojis, it underscores the importance of personal expression and the endless possibilities of visual language. Whether you’re a casual texter or a social media enthusiast, Emoji Kitchen is sure to add a splash of creativity to your online interactions."
        },
        {
            "heading": "Contact Us",
            "value": "We'd love to hear from you! If you have any questions, feedback, or just want to share your Emoji Kitchen creations, feel free to reach out to us at our contact up page."
        },
    ]

    function SetParaHead(item) {
        return (
            <div className='flex flex-col'>
                <Meta />

                {item.heading && <h2 className="text-2xl md:text-4xl font-bold">
                    {item?.heading}
                </h2>
                }

                <HtmlValue value={item?.value} />
            </div>
        )
    };

    return (
        <div className="flex flex-col mx-3 my-3 p-5 bg-white rounded-sm overflow-auto max-w-screen-desktop self-center">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
                About Us
            </h1>

            {
                data?.map((item, index) => (
                    <div key={index}>
                        {
                            SetParaHead(item)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default AboutUs