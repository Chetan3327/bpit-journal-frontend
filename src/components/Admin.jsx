import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || ''
const isAdmin = localStorage.getItem(process.env.REACT_APP_SECRET_KEY) === process.env.REACT_APP_SECRET_VALUE


const postRequest = async (formData) => {
    axios.post(`${BACKEND_URL}/admin`, formData).then((response) => {
        console.log(response)
        console.log('registerd')
        if(response.status === 200){
            toast.success('Admin Login Successfully!' , {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
            });
            console.log('made admin')
            localStorage.setItem(process.env.REACT_APP_SECRET_KEY, process.env.REACT_APP_SECRET_VALUE)
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }).catch((error) => {
        console.log(error)
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

const logout = (e) => {
    localStorage.removeItem(process.env.REACT_APP_SECRET_KEY)
    toast.info('Logout Successfully' , {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
    });
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}

const Admin = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen '>
        {!isAdmin ? (<Form route='admin' fields={['userId', 'password']} toast={toast} postRequest={postRequest} />):
        (<button className='p-2 px-4 border-1 bg-red-500 text-white' onClick={(e) => logout(e)}>Admin Logout</button>)}
        <ToastContainer />
    </div>
  )
}

export default Admin
