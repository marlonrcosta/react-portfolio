import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Bootstrap from '../assets/bootstrap.png'
import Javascript from '../assets/javascript.png';
import Typescript from '../assets/typescript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';
import MySQL from '../assets/mysql.png';
import PostgreSQL from '../assets/postgresql.png';
import SQLServer from '../assets/sqlserver.png';
import MariaDB from '../assets/mariadb.png';
import Mongo from '../assets/mongo.png';
import PHP from '../assets/php.png';
import Photoshop from '../assets/photoshop.png';

function Skills() {
    return (
        <div name='skill' className='w-full h-screen bg-[#333] text-gray-300'>
            {/*Container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
                    <p className='py-4'>As tecnologias que tenho conhecimento</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icone' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt='CSS icone' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt='Bootstrap icone' />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt='Javascript icone' />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Typescript} alt='Typescript icone' />
                        <p className='my-4'>Typescript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt='ReactJs icone' />
                        <p className='my-4'>ReactJs</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt='Node icone' />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt='Github icone' />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MySQL} alt='MySQL icone' />
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PostgreSQL} alt='PostgreSQL icone' />
                        <p className='my-4'>PostgreSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SQLServer} alt='SQLServer icone' />
                        <p className='my-4'>SQLServer</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MariaDB} alt='MariaDB icone' />
                        <p className='my-4'>MariaDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt='Mongo icone' />
                        <p className='my-4'>Mongo</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PHP} alt='PHP icone' />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Photoshop} alt='Photoshop icone' />
                        <p className='my-4'>Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;