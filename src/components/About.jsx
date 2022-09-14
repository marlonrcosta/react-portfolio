import React from 'react';

function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#222] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-red-800'>Sobre</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Minhas experiências e capacitação na carreira de desenvolvedor Full-Stack.</p>
                    </div>
                    <div>
                        <p>Graduado em Análise e Desenvolvimento de Sistemas, com mais de 6 anos de experiência em projetos de sistemas web, atuando integralmente com Back-End e Front-End.
                            Além da graduação na área de Tecnologia, possuo cursos técnicos e de aprimoramento, que me capacita como desenvolvedor Full-Stack.</p>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default About;