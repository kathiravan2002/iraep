import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import star from '/assets/star.png'


function Plagiarism() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                Plagiarism
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border border-[#937D14]' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                                The International Review of Applied Economics and Policy is committed to maintaining the highest standards of academic integrity. Plagiarism in any form, including the use of others' ideas, data, or text without proper citation, is strictly prohibited. All submitted manuscripts are screened for plagiarism, and any work found to have violated this policy will be rejected. Authors are expected to ensure the originality of their research and provide proper attribution to all sources used in their work.
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
                        <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Types of Plagiarism</h2></div>
                        <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Direct Plagiarism: Copying text verbatim from a source without proper citation or acknowledgment.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Self-Plagiarism: Reusing one’s own previously published work or parts of it without citation or permission.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Mosaic Plagiarism: Borrowing phrases or ideas from a source and blending them into one's own work without proper citation.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Accidental Plagiarism: Unintentional failure to properly cite sources or paraphrase correctly, often due to lack of awareness or knowledge. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Paraphrasing Plagiarism: Rewriting someone else's ideas or text in one’s own words without proper attribution.</p></div>
                        </div>
                    </div>
                    <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                        <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Definition and Scope</h2></div>
                        <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Copying text, ideas, or results from another source without proper attribution.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Reproducing substantial parts of another author's work without permission.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Submitting duplicate publication or redundant publication.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Using previously published data without acknowledging the source.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Failing to cite relevant previous works.</p></div>
                        </div>
                    </div>
                </div>
            </div> */}


                <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Types of Plagiarism</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Direct Plagiarism: Copying text verbatim from a source without proper citation or acknowledgment.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Self-Plagiarism: Reusing one’s own previously published work or parts of it without citation or permission.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Mosaic Plagiarism: Borrowing phrases or ideas from a source and blending them into one's own work without proper citation.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Accidental Plagiarism: Unintentional failure to properly cite sources or paraphrase correctly, often due to lack of awareness or knowledge. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Paraphrasing Plagiarism: Rewriting someone else's ideas or text in one’s own words without proper attribution.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Definition and Scope</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Copying text, ideas, or results from another source without proper attribution.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Reproducing substantial parts of another author's work without permission.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Submitting duplicate publication or redundant publication.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Using previously published data without acknowledging the source.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Failing to cite relevant previous works.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <div className=' space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Detection and Consequences</h2>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy uses advanced plagiarism detection tools to ensure the originality of all submitted manuscripts.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Any submission found to contain plagiarized content will be subject to rejection, and authors may be banned from submitting future work.  </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>In cases of significant plagiarism, the issue will be reported to the author’s institution or relevant academic bodies. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> Maintaining academic integrity is a core value, and violations will be addressed promptly and transparently.</p></div>
                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2  poppins-bold" onClick={() => navigate('/authorguidelinespage')}>
                                <div className='flex justify-between items-center gap-2'>  Review Guidelines
                                <GoArrowRight className=' text-lg'/></div>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default Plagiarism