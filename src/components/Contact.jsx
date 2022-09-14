import React from 'react';

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-[#333] flex justify-center items-center p-4'>
            {/* utilizado site para envio de form -> https://app.getform.io/login */}
            <form method='POST' action='https://getform.io/f/d728d353-b44d-40fd-943e-8a868fd6418f' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contato</p>
                </div>
                <input className='bg-[#ccc] p-2' type='text' placeholder='Nome' name='name' />
                <input className='my-4 p-2 bg-[#ccc]' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccc] p-2' name='message' rows='6' placeholder='Mensagem'></textarea>
                <button className='text-white border-2 hover:bg-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Me contate!</button>
            </form>
        </div>
    );
}

export default Contact;