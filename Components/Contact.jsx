'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactformSchema } from '../Schema/ContactformSchema';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Design from '../app/components/Design'

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(ContactformSchema),
    });

    const sendEmail = async (data) => {
        try {
            await emailjs.send("service_b2vvzcs", "template_s8uhvof", data, "XiP2NlijuYm_Urohk");
            toast.success('Message sent successfully!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            toast.error('Failed to send message. Please try again.', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.error('Email sending error:', error);
        }
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
        setIsLoading(false);
        await sendEmail(data);
        reset();
    };

    return (
        <>
            <Design />
            <section id="contact" className="contact">
                <h2 className="heading">Contact <span>Me</span></h2>
                <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <div className="input-box">
                            <input {...register("name")} type="text" placeholder="Full Name *" className={errors.name ? "field-while-error" : "fields"} />
                            {errors.name && <p className="errors">{errors.name.message}</p>}
                            <input {...register("email")} type="email" placeholder="Email *" className={errors.email ? "field-while-error" : "fields"} />
                            {errors.email && <p className="errors">{errors.email.message}</p>}
                        </div>

                        <div className="input-box">
                            <input {...register("phoneNumber")} type="text" placeholder="Phone Number *" className={errors.phoneNumber ? "field-while-error" : "fields"} />
                            {errors.phoneNumber && <p className="errors">{errors.phoneNumber.message}</p>}
                            <input {...register("subject")} type="text" placeholder="Subject *" className={errors.subject ? "field-while-error" : "fields"} />
                            {errors.subject && <p className="errors">{errors.subject.message}</p>}
                        </div>
                    </div>
                    <div className="input-group-2">
                        <textarea {...register("message")} placeholder="Your Message" className={errors.message ? "field-while-error" : "fields"}></textarea>
                        {errors.message && <p className="errors">{errors.message.message}</p>}
                        <button type='submit' className="btn">
                            {isLoading ? "Loading..." : "Send"}
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </section>
        </>
    );
}

