import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import star from '/assets/star.png'



function Malpractice() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                Malpractice Policy
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border border-[#937D14]' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                                The International Review of Applied Economics and Policy adheres to strict ethical standards to maintain the integrity of its publication process. We are committed to preventing publication malpractice, including plagiarism, data falsification, and unethical research practices. Authors, reviewers, and editors are expected to uphold the highest ethical standards, ensuring transparency, fairness, and accountability throughout the publication process. Any instances of unethical behavior are thoroughly investigated and addressed in accordance with established academic guidelines.
                            </p>
                        </div>
                        <div className='hidden lg:block shadow-md'>
                            <img src={book} alt="image" className=' max-w-[150px] max-w-auto border border-[#937D14] ' />
                        </div>
                    </div>
                </section>
                {/* <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Author's Responsibilities</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors submitting to the International Review of Applied Economics and Policy are responsible for ensuring that their work is original, accurate, and free from plagiarism. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>They must properly cite all sources and provide transparency in their research methodology. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors should disclose any conflicts of interest and ensure that ethical guidelines have been followed in their research. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It is also their responsibility to respond promptly to reviewer comments and make necessary revisions before publication.</p></div>
                            </div>
                        </div>
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Editor's Responsibilities</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Editors at the International Review of Applied Economics and Policy are responsible for ensuring the integrity, quality, and fairness of the publication process. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>They must evaluate submissions impartially, making decisions based on the relevance, originality, and scientific quality of the work. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Editors are also responsible for maintaining confidentiality throughout the review process and addressing any conflicts of interest. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>They ensure that ethical standards are upheld and provide constructive feedback to authors.</p></div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Author's Responsibilities</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors submitting to the International Review of Applied Economics and Policy are responsible for ensuring that their work is original, accurate, and free from plagiarism. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>They must properly cite all sources and provide transparency in their research methodology. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors should disclose any conflicts of interest and ensure that ethical guidelines have been followed in their research. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It is also their responsibility to respond promptly to reviewer comments and make necessary revisions before publication.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Editor's Responsibilities</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Editors at the International Review of Applied Economics and Policy are responsible for ensuring the integrity, quality, and fairness of the publication process. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>They must evaluate submissions impartially, making decisions based on the relevance, originality, and scientific quality of the work. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Editors are also responsible for maintaining confidentiality throughout the review process and addressing any conflicts of interest. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>They ensure that ethical standards are upheld and provide constructive feedback to authors.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <div className=' space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Reviewer's Responsibilities</h2>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Reviewers for the International Review of Applied Economics and Policy play a crucial role in maintaining the quality and integrity of the journal. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>They are expected to provide impartial, constructive, and timely feedback on submitted manuscripts. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Reviewers must evaluate the originality, methodology, and significance of the research while maintaining confidentiality and avoiding conflicts of interest. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> Their objective feedback helps authors improve their work and supports editors in making informed publication decisions.                     </p></div>
                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2   poppins-bold" onClick={() => navigate('/authorguidelinespage')}>
                                <div className='flex justify-between items-center gap-2 '>  Review Guidelines
                                <GoArrowRight className=' text-lg'/></div>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Malpractice