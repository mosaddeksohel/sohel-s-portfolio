import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';



const Result = () => {

    return (
        <div>
            <p>Your message has been sent successfully. I will contact with you soon</p>
        </div>
    )
}

const Form = () => {
    const { reset } = useForm();
    const [result, showResult] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gzsp7d4', 'template_us3m3wg', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        showResult(true);
        reset();
    };
    return (
        <div style={{ backgroundColor: "pink" }}>
            <form onSubmit={sendEmail}>
                <div>
                    <input style={{ width: '50%', height: '50px', margin: '10px' }} type="text" placeholder="your name" />
                    <br />
                    <input style={{ width: '50%', height: '50px', margin: '10px' }} type="email" placeholder="your email" />
                    <br />
                    <textarea style={{ width: '50%' }} type="text" name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
                    <br />
                    <button style={{ width: '20%', backgroundColor: 'goldenrod' }} type="submit">Submit</button>
                </div>
                <div>

                    {
                        result ? <Result /> : null
                    }
                </div>
            </form>
        </div>
    );
};

export default Form;