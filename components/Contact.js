import React, { useState } from 'react'
import validator from 'validator'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    //Form validation error state
    const [errors, setErrors] = useState({})

    //success and failure states
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true //default

        if(validator.isEmpty(name)){
            tempErrors['name'] = true
            isValid = false
        }else if(validator.isEmpty(email)){
            tempErrors['email'] = true
            isValid = false
        }else if(validator.isEmail(email) === false){
            tempErrors['emailValid'] = true
            isValid = false
        }else if(validator.isEmpty(message)){
            tempErrors['message'] = true
            isValid = false
        }

        setErrors({...tempErrors})
        console.log('errors', errors)
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let isValid = handleValidation()

        if(isValid){
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({name: name, email: email, message: message}),
                headers: {"Content-Type": "application/json"},
                method: "POST"
            })

            const error = await res.json()
            if(error.status !== 'Ok'){
                console.log(error)
                setFailure(true)
                setSuccess(false)
                return
            }else{
                setFailure(false)
                setSuccess(true)
            }
        }
    }

    return (
        <div className='bg-white py-9'>
            <div name="contact"></div>
            <h3 className='text-center text-2xl md:text-3xl font-bold underline decoration-4 underline-offset-8 mb-7'>Contact</h3>
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center content-center'>
                <section className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <h4 className='text-lg font-bold md:text-xl'>Phone:</h4>
                        <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>0789690660</h3>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <h4 className='text-lg md:text-xl font-bold'>Alt Phone:</h4>
                        <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>0730413695</h3>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <h4 className='text-lg md:text-xl font-bold'>Email:</h4>
                        <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>odwa.bungu1@gmail.com</h3>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <h4 className='text-lg md:text-xl font-bold'>Alt Email:</h4>
                        <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>3165478@myuwc.ac.za</h3>
                    </div>
                </section>


                <div>
                    <h3 className='text-xl md:text-2xl mt-3 mb-12 text-center'>You can also send me a message directly</h3>
                    <div className='flex justify-center'>
                        
                        <form onSubmit={handleSubmit} className='w-fit lg:w-96 text-lg'>
                            {errors?.name && (
                                <p className='text-red-500 my-2'>Name cannot be empty</p>
                            )}
                            <input 
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                placeholder='Your Name' 
                                className='appearance-none bg-transparent border-b-2 border-gray-400 w-full focus:outline-none focus:border-gray-800 mb-8' 
                            />

                            {errors?.email && (
                                <p className='text-red-500 my-2'>Email cannot be empty</p>
                            )}
                            {errors?.emailValid && (
                                <p className='text-red-500 my-2'>Please use valid email address</p>
                            )}
                            <input 
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Your Email' 
                                className='appearance-none bg-transparent border-b-2 border-gray-400 w-full focus:outline-none focus:border-gray-800 mb-8' 
                            />

                            {errors?.message && (
                                <p className='text-red-500 my-2'>Message cannot be empty</p>
                            )}
                            <textarea 
                                type='text'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} 
                                placeholder='Your Message' 
                                rows={6} 
                                className='appearance-none bg-transparent border-b-2 border-gray-400 w-full focus:outline-none focus:border-gray-800 mb-6' 
                            />

                            {success === true && <p className='text-green-500 my-2'>Message Sent!</p>} 
                            {failure === true && <p className='text-red-500 my-2'>Network issue. Please try again later!</p>}  

                            <div className='flex justify-center'>
                                <button className='text-white border-2 bg-sky-700 rounded-3xl py-1 px-3 mx-4 hover:bg-sky-900 hover:border-amber-400'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact