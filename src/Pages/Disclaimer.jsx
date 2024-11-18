import React from 'react'
import HtmlValue from '../Components/HtmlValue'

const Disclaimer = () => {
    const data = [
        {
            "heading": "",
            "value": "If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at example@gmail.com."
        },
        {
            "heading": "",
            "value": "All the information on this website is published in good faith and for general information purpose only. Emoji Kitchen does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (<a href='https://google.com/' target='_blank' rel='noopener noreferrer'>Emoji Kitchen</a>), is strictly at your own risk. We will not be liable for any losses and/or damages in connection with the use of our website."
        },
        {
            "heading": "",
            "value": "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’."
        },
        {
            "heading": "",
            "value": "Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information."
        },
        {
            "heading": "Consent",
            "value": "By using our website, you hereby consent to our disclaimer and agree to its terms."
        },
        {
            "heading": "Update",
            "value": "Should we update, amend or make any changes to this document, those changes will be prominently posted here."
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
                Disclaimer
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

export default Disclaimer
