import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from './Form'
import {useParams, useSearchParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || ''
const isAdmin = localStorage.getItem(process.env.REACT_APP_SECRET_KEY) === process.env.REACT_APP_SECRET_VALUE

const Render = () => {
    const {route} = useParams() || 'issues'
    const [content, setContent] = useState(null)
    const [fields, setFields] = useState(null)
    const removeFields = ['__v', '_id']
    useEffect(() => {
        console.log(`${BACKEND_URL}/${route}`)
        axios.get(`${BACKEND_URL}/${route}`).then((response) => {
            console.log(response.data[0])
            console.log('data', response.data[0])
            setContent(response.data)
            console.log('fields', Object.keys(response.data[0]))
            const allFields = Object.keys(response.data[0])
            const reqFields = allFields.filter((item) => !removeFields.includes(item))
            setFields(reqFields)
        })
    }, [route])

    const postRequest = async (formData) => {
        axios.post(`${BACKEND_URL}/${route}`, formData).then((response) => {
            console.log(response)
            console.log('response')
            if(response.status === 200){
                toast.success('Form Submited Successfully!' , {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000,
                });
            }
        }).catch((error) => {
            console.log('error')
            toast.error('Something went wrong!' , {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
            });
            if (error.message === 'Network Error') {
                toast.error('Please Check your Internet Connection!' , {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000,
                });
            } else {
                toast.error(error.response.data.error , {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000,
                });
            }
        })
    }

    return (
        <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
            {content ? (
            <div className='flex flex-col p-5 mt-32 bg-white rounded-xl max-w-[80%] min-w-[80%] shadow-2xl border-2 border-black'>
                <h2 className='text-primary text-2xl font-bold mb-3'>{route.toUpperCase()}</h2>
                <div>
                    {content.map((item, idx) => {
                        return (
                        <div key={idx} className='pl-3 my-2 mb-2 hover:shadow-md p-2 cursor-pointer'>
                            {fields.map((field, index) => {
                                return(<p key={index}><b>{field}</b>: {item[String(field)]}</p>)
                            })}
                            {/* <hr className='w-48 my-2 h-[2px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700' /> */}
                        </div>)
                    })}
                </div>

            </div>) :  (
                <div className='text-3xl font-bold text-primary'>
                Loading {route}...
            </div>)}
            {content && isAdmin && (<Form route={route} fields={fields} toast={toast} postRequest={postRequest} />)}
            <ToastContainer /> 
        </div>
    )
}

export default Render
