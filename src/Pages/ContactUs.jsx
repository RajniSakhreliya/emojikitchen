import React from 'react'
import HtmlValue from '../Components/HtmlValue'

const ContactUs = () => {
    const data = [
        {
            "heading": "",
            "value": "Welcome to EmojiKitchen.pro, your ultimate guide to EmojiKitchen.pro."
        },
        {
            "heading": "Email",
            "value": "Please contact us via the contact form below for inquiries, assistance, or to share your dining experiences. We strive to respond to all emails within 24 hours."
        },
        {
            "heading": "Feedback and suggestions",
            "value": "We value your feedback and suggestions. Please help us improve EmojiKitchen.pro by sharing your thoughts."
        },
        {
            "heading": "Join our community",
            "value": "Become a part of our growing community of gaming enthusiasts and bargain hunters. Share your findings, tips, and questions with other members and help us create a resourceful space for all things gaming around the world."
        },
        {
            "heading": "Thank you for choosing us",
            "value": ""
        }
    ]

    function SetParaHead(item) {
        return (
            <div className='flex flex-col'>
                {item.heading &&
                    <h2 className="text-2xl md:text-4xl font-bold">
                        {item?.heading}
                    </h2>
                }

                {item.heading &&
                    <HtmlValue value={item?.value} />
                }
            </div>
        )
    };

    return (
        <div className="flex flex-col mx-3 my-3 p-5 bg-white rounded-sm overflow-auto max-w-screen-desktop self-center">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
                Contact Us
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

export default ContactUs
