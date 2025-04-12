import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import star from '/assets/star.png'

function publicationrights() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                Publication Rights Policy
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border border-[#937D14]' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                                The International Review of Applied Economics and Policy ensures that authors retain the rights to their intellectual work while granting the journal permission to publish and distribute it. All articles are published under an open-access license, allowing unrestricted access and use with proper attribution. This policy promotes global knowledge sharing while protecting the rights and recognition of contributing authors. Authors are free to reuse and archive their work in institutional or personal repositories.
                            </p>
                        </div>
                        <div className='hidden lg:block shadow-md'>
                            <img src={book} alt="image" className=' max-w-[150px] max-w-auto  border border-[#937D14]' />
                        </div>
                    </div>
                </section>
                {/* <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Copyright Policy</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>All articles published in the International Review of Applied Economics and Policy are protected under copyright held by the authors.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors grant the journal a non-exclusive license to publish, distribute, and archive their work.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Content is made available under a Creative Commons Attribution (CC BY) license, allowing others to use, share, and adapt the work with appropriate credit.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This policy supports both author rights and open access to scholarly research.</p></div>
                            </div>
                        </div>
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Key Benefits</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Publishing with the International Review of Applied Economics and Policy offers authors global visibility and open access to a wide academic audience. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Submissions undergo a rigorous double-blind peer review process ensuring high-quality publication standards.  </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors retain copyright of their work and benefit from rapid publication and professional editorial support. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal also offers indexing in major databases, enhancing discoverability and citation potential.</p></div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Copyright Policy</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>All articles published in the International Review of Applied Economics and Policy are protected under copyright held by the authors.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors grant the journal a non-exclusive license to publish, distribute, and archive their work.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Content is made available under a Creative Commons Attribution (CC BY) license, allowing others to use, share, and adapt the work with appropriate credit.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This policy supports both author rights and open access to scholarly research.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Key Benefits</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Publishing with the International Review of Applied Economics and Policy offers authors global visibility and open access to a wide academic audience. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Submissions undergo a rigorous double-blind peer review process ensuring high-quality publication standards.  </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors retain copyright of their work and benefit from rapid publication and professional editorial support. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal also offers indexing in major databases, enhancing discoverability and citation potential.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <div className=' space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Rights Management</h2>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='star' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy ensures transparent rights management by allowing authors to retain copyright of their work while granting the journal a license to publish and distribute it.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='star' className='w-[22px] h-[20px]' /><p className='poppins-regular '>All published content is licensed under Creative Commons (CC BY), enabling broad use with proper attribution.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='star' className='w-[22px] h-[20px]' /><p className='poppins-regular '>This approach balances author ownership with open access dissemination.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='star' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors are also free to archive their work in repositories and share it across platforms.</p></div>

                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2 poppins-bold" onClick={() => navigate('/authorguidelinespage')}>
                                <div className='flex justify-between items-center gap-2 '> View Author Instruction
                                <GoArrowRight className=' text-lg'/></div>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default publicationrights;