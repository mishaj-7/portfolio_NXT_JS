'use server';

import React from 'react'
import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';
import  contactFormEmail  from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
 
export const sendEmail = async (formData: FormData) => {
const message = formData.get('message');
const senderEmail = formData.get("senderEmail");

// simple server-side validation
if(!validateString(senderEmail,500)) {
    return {
        error:'invalid sender email'
    }
}

if(!validateString(message, 5000)) {
    return {
        error: 'invalid message'
    }
}
let data;
try {
    data = await resend.emails.send({
    from:'portfolio <onboarding@resend.dev>',
    to:'amstig100@gmail.com',
    subject:'Message from portfolio',
    reply_to: senderEmail as string,
    // text: message as string ,
    react: React.createElement(contactFormEmail, {
        message:message as string,
        senderEmail:senderEmail as string,
    })
});
} catch(error:unknown){
    return {
        error: getErrorMessage(error)
    }
}
return {
    data,
}

};
