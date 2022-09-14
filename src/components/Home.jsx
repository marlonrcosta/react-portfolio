import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#fff] pl-12'>
            {/* Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-2xl text-red-600'>Meu nome é</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#222]'>Marlon R. Costa</h1>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>Eu sou desenvolvedor Full-Stack.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Mais sobre os meus trabalhos, segue no menu lateral o endereço do meu LinkedIn com minhas experiências, e também alguns de meus trabalhos no GItHub.</p>
                <div>
                    <Link to="skill" smooth={true} duration={500} className='bg-[#222] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800'>
                        Minhas Skills
                        <span className='group-hover:ml-1 duration-300 flex items-center'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;