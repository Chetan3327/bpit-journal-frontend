import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../components/Form'
import FireBaseUpload from '../pages/FireBaseUpload'
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || ''


const UploadPaper = ({title ,fields, route = 'manuscript', }) => {
    const [formData, setFormData] = useState(null)
    const [firebaseUrl, setFirebaseUrl] = useState(null)
    const postRequest = async (formData) => {
        console.log(formData)
        axios.post(`${BACKEND_URL}/${route}`, formData).then((response) => {
            console.log(response)
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
        <div className='flex flex-col mt-20 gap-5 items-center justify-center min-h-screen'>
                {firebaseUrl ? (
                <Form route={String(route)} fields={fields} data={{[`${route}_url`]: firebaseUrl}} toast={toast} postRequest={postRequest} />
                ) : (
                <FireBaseUpload setFirebaseUrl={setFirebaseUrl} title={String(title)} />)}
                <ToastContainer />
        </div>
    )
}


export default UploadPaper