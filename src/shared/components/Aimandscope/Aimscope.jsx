import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import star from '/assets/star.png'

const Aimscope = () => {
    return (
        <div>

            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                Aim and Scope
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border border-[#937D14]' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                                The International Review of Applied Economics and Policy aims to promote high-quality research that bridges economic theory and practical policy applications. The journal focuses on a wide range of topics including development, trade, labor, fiscal policy, and public finance. It encourages interdisciplinary and empirical studies that address real-world economic challenges. By fostering academic and policy dialogue, the journal contributes to evidence-based policymaking and sustainable economic development.
                            </p>
                        </div>
                        <div className='hidden lg:block shadow-md'>
                            <img src={book} alt="image" className=' max-w-[150px] max-w-auto border border-[#937D14] ' />
                        </div>
                    </div>
                </section>
                <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Aim</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy aims to advance scholarly research that connects economic theory with real-world policy solutions. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal seeks to provide a platform for innovative, evidence-based studies that inform economic decision-making at both national and international levels. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It strives to bridge the gap between academic research and practical policy implementation. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The ultimate goal is to support sustainable and inclusive economic development through informed analysis and dialogue.</p></div>
                                </div>

                            </div>
                        </div>
                        
                         <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Scope</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy encompasses a broad range of topics that highlight the practical application of economic principles to public policy and real-world challenges. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Areas of interest include, but are not limited to, development economics, fiscal and monetary policy, labor markets, international trade, public finance, and regulatory frameworks.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal welcomes interdisciplinary research, empirical studies, theoretical analyses, and policy evaluations. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It aims to serve as a platform for work that influences policy decisions and contributes to economic advancement globally.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Research Areas </h2>
                        <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy covers a wide spectrum of research areas that explore the application of economic theories to real-world policy issues. </p></div>
                        <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Key areas include development economics, fiscal and monetary policy, labor and employment studies, international trade, and public finance.</p></div>
                        <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The journal also welcomes research on regulatory economics, environmental and health policy, innovation and digital economy, and poverty and inequality. </p></div>
                        <div className='flex gap-2   lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Both empirical and theoretical studies are encouraged, as well as interdisciplinary work that bridges economics with public policy, sociology, and political science. </p></div>

                    </div>

                    <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Global Perspectives</h2>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy embraces a global perspective, seeking to address economic challenges that transcend borders.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The journal welcomes research that explores both developed and developing economies, offering diverse viewpoints and solutions to common issues such as trade, inequality, and sustainable development.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>By incorporating a variety of global contexts, the journal aims to foster cross-cultural dialogue and promote policies that contribute to inclusive economic progress worldwide.</p></div>

                    </div>
                    <div className='space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Emerging Topics of Interest</h2>
                        <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy actively encourages research on emerging economic issues that shape the future of global policy.</p></div>
                        <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Topics of interest include the digital economy, climate change economics, fintech and blockchain technology, sustainable development, and the impact of artificial intelligence on labor markets. </p></div>
                        <div className='flex gap-2   lg:px-5 px-0 '><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The journal also welcomes studies on global economic disruptions, such as pandemics or geopolitical shifts, and their long-term policy implications.</p></div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default Aimscope;