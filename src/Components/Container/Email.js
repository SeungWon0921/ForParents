    import React, { useRef } from 'react';
    import emailjs from '@emailjs/browser';

    export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f33yntf', 'template_e2yexle', form.current, 'user_iLhYvW5dgWfXXroiHYAYY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="subject" />
        <label>Email</label>
        <input type="text" name="to_name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Email</label>
        <input type="text" name="from_name" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    );
    };