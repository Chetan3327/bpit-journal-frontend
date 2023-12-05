import React, { useState } from 'react'

const Form = ({route, fields, toast, postRequest, data={}}) => {
    const [formData, setFormData] = useState(data)
    const handleInput = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(fields.some((field) => !formData[field])){
            toast.error("Required Fields Missing!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
            });
            return;
        }
        postRequest(formData)
    }
    return (
        <div className='mt-32 flex flex-col p-5 bg-white rounded-xl mb-12 min-w-[50%] shadow-lg border-2 border-gray-500'>
            <h3 className='text-primary text-2xl font-bold mb-3'>{route.toUpperCase()} FORM</h3>
            <form className='flex flex-col gap-4 mt-2 min-w-[300px]'>
                {fields.map((field, idx) => {
                    return(<input key={idx} readOnly={Object.keys(data).includes(field)} value={Object.keys(data).includes(field) ? data[field] : undefined} className='outline-none rounded-xl border p-2 border-1 border-gray-300 bg-gray-100' placeholder={field} name={field} onChange={(e)=> handleInput(e)}  />)
                })}
               <button className='p-2 px-4 border-1 bg-purple-500 text-white' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>   
        </div>
    )
}

export default Form
