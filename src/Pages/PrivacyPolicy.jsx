import React from 'react'
import HtmlValue from '../Components/HtmlValue'

const PrivacyPolicy = () => {
    const data = [
        {
            "heading": "",
            "value": "At EmojiKitchen.pro accessible from <a href='https://google.com/' target='_blank' rel='noopener noreferrer'>Emoji Kitchen</a> one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Emoji Kitchen and how we use it."
        },
        {
            "heading": "",
            "value": "If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at hello.emojikitchen@gmail.com"
        },
        {
            "heading": "Log Files",
            "value": "Emoji Kitchen follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information."
        },
        {
            "heading": "Cookies and Web Beacons",
            "value": "Like any other website, Emoji Kitchen uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information."
        },
        {
            "heading": "Google DoubleClick DART Cookie",
            "value": "Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <a href='https://cxfileexplorerapk.net/' target='_blank' rel='noopener noreferrer'>Website</a> and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href='https://policies.google.com/technologies/ads' target='_blank' rel='noopener noreferrer'>ADS</a>"
        },
        {
            "heading": "Privacy Policies",
            "value": "You may consult this list to find the Privacy Policy for each of the advertising partners of Emoji Kitchen."
        },
        {
            "heading": "",
            "value": "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Emoji Kitchen, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."
        },
        {
            "heading": "",
            "value": "Note that Emoji Kitchen has no access to or control over these cookies that are used by third-party advertisers."
        },
        {
            "heading": "Children’s Information",
            "value": "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."
        },
        {
            "heading": "",
            "value": "Emoji Kitchen does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records."
        },
        {
            "heading": "Online Privacy Policy Only",
            "value": "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Emoji Kitchen. This policy is not applicable to any information collected offline or via channels other than this website."
        },
        {
            "heading": "Consent",
            "value": "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."
        }
    ]

    function SetParaHead(item) {
        return (
            <div className='flex flex-col'>
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
                Privacy Policy
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

export default PrivacyPolicy
