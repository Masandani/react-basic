import React, { useState ,useRef, useEffect } from 'react'
import './Contact.css'
import Button from '../../components/Button/Button'
import { validateEmail, validateSubject } from '../../utils/validatin'

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [textArea, setTextArea] = useState('');
    const [errors, setErrors] = useState({})
    const inputSubjectRef = useRef(null)

    const handleChangeSubject = (event) => {
        if(validateSubject(event.target.value)) {
            setSubject(event.target.value)
            setErrors({
                ...errors,
                email: null,
            })
        } else {
            setSubject('');
            setErrors({
                ...errors,
                email: 'Subject must be more than 8 characters'
            });
        }      
    }
    
    const handlelChangeEmail = (event) => {
        if (validateEmail(event.target.value)) {
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email: null,
            })
        } else {
            setEmail('');
            setErrors({
                ...errors,
                email: 'Email is not valid'
            });
        }

        
    }
    const handleChangeTextArea = (event) => {
        setTextArea(event.target.value);
        
    }
    const handleSubmit = () => {
        console.log('subject',subject)
        console.log('Email',email)
        console.log('setTextArea',textArea)
    }

    useEffect(() =>{
        inputSubjectRef.current.focus();
    }, [])

    return (
        <div className="Contact">
            <div className="formControl">
                <input
                ref = {inputSubjectRef} onChange={handleChangeSubject} type="text" placeholder="subject" />
                 {errors.subject && <span>{errors.subject}</span>}
            </div>
            <div className="formControl">
                <input onChange={handlelChangeEmail} type="email" placeholder="Email" />
            </div>
            {errors.email && <span>{errors.email}</span>}
            <div className="formControl">
                <textarea onChange={handleChangeTextArea}>
                    your request here
                </textarea>
            </div>
            <div className="formControl">
                <Button handleClick={handleSubmit}>Submit</Button>
            </div>

        </div>
    );
}

export default Contact;