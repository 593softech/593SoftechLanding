"use client"

import { FacebookMessengerShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, } from 'react-share';
import { FaFacebookMessenger, FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaRedditAlien } from 'react-icons/fa';
import { IoCopy, IoShareSocial } from 'react-icons/io5';
import Sheet, { closeSheet } from '../modal/Sheet';
import { FaXTwitter } from 'react-icons/fa6';
import copy from 'clipboard-copy';
import React from 'react';
import toast from 'react-hot-toast';
import { RiWhatsappFill } from 'react-icons/ri';

interface ShareProps {
    title: string;
    btnText?: string;
    url: string;
}

const ShareButton: React.FC<ShareProps> = (props) => {

    const handleCopyLink = () => {
        copy(props.url)
            .then(() => {
                toast.success('Enlace copiado');
                closeSheet();
            })
    };

    return (
        <Sheet
            showBtnText={true}
            btnText={props.btnText}
            title={props.title}
            icon={<IoShareSocial size={16} />}
        >
            <div className='grid grid-cols-3 gap-3 pb-10 z-50'>
                <div className='flex justify-center'>
                    <div
                        onClick={handleCopyLink}
                        className='text-center'
                    >
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <IoCopy size={25} />
                        </div>
                        <span className='text-black-200 text-sm'>Copiar enlace</span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <WhatsappShareButton url={props.url}>
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <RiWhatsappFill size={25} />
                        </div>
                        <span className='text-black-200'>WhatsApp</span>
                    </WhatsappShareButton>
                </div>
                <div className='flex justify-center'>
                    <FacebookMessengerShareButton url={props.url} appId={''}>
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <FaFacebookMessenger size={25} />
                        </div>
                        <span className='text-black-200'>Messenger</span>
                    </FacebookMessengerShareButton>
                </div>
                <div className='flex justify-center'>
                    <FacebookShareButton url={props.url}>
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <FaFacebookF size={25} />
                        </div>
                        <span className='text-black-200'>Facebook</span>
                    </FacebookShareButton>
                </div>
                <div className='flex justify-center'>
                    <TelegramShareButton url={props.url}>
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <FaTelegramPlane size={25} />
                        </div>
                        <span className='text-black-200'>Telegram</span>
                    </TelegramShareButton>
                </div>
                <div className='flex justify-center'>
                    <LinkedinShareButton url={props.url}>
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <FaLinkedinIn size={25} />
                        </div>
                        <span className='text-black-200'>LinkedIn</span>
                    </LinkedinShareButton>
                </div>
                <div className='flex justify-center'>
                    <TwitterShareButton url={props.url}>
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <FaXTwitter size={25} />
                        </div>
                        <span className='text-black-200'>Twitter</span>
                    </TwitterShareButton>
                </div>
                <div className='flex justify-center'>
                    <RedditShareButton url={props.url}>
                        <div className='p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto'>
                            <FaRedditAlien size={25} />
                        </div>
                        <span className='text-black-200'>Reddit</span>
                    </RedditShareButton>
                </div>
            </div>
        </Sheet>
    );
};

export default ShareButton;
