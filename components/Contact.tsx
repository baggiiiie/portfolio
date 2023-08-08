'use client';
import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    firstname: string,
    lastname: string,
    email: string,
    message: string,
};

type Props = {};

function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href =
            `mailto:yingchao.dai22@gmail.com?subject=${data.firstname}
            &body=${data.message}`;
    };


    return (
        <div className='pageDiv'>
            <h3 className='pageTitle'>Contact</h3>
            <div className="m-auto flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need. &nbsp;
                    <span className=" decoration-[#F7ABOA]/50 underline">Lets talk.</span>
                </h4>
                <div className="space-y-10 ">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+1234567890</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2x1">myemail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">123 Developer Lane</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='
                        flex flex-col space-y-2 w-fit mx-auto
                    '>
                        <div className='
                            flex space-x-2
                        '>
                            <input {...register('firstname')} className='contactInput' type="text" placeholder='First Name' />
                            <input {...register('lastname')} className='contactInput' type="text" placeholder='Last Name' />
                        </div>
                        <input {...register('email')} className='contactInput' type="email" placeholder='Email' />
                        <textarea {...register('message')} className='contactInput' placeholder='Message' />
                        <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;