import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import star from '/assets/star.png'


function Correction() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                Journal Correction Policy
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                            The International Review of Applied Economics and Policy is committed to ensuring the accuracy and reliability of its published content. In the event that significant errors, omissions, or inaccuracies are identified in a published article, we will issue corrections, errata, or retractions as needed. The journal follows established ethical guidelines for handling corrections and ensures transparency throughout the process. Authors, reviewers, and editors are encouraged to report any discrepancies to uphold the integrity of the journal.
                            </p>
                        </div>
                        <div className='hidden lg:block shadow-lg border'>
                            <img src={book} alt="image" className=' max-w-[150px] max-w-auto  ' />
                        </div>
                    </div>
                </section>
                {/* <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Version of Record (VoR)</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The Version of Record (VoR) refers to the final, peer-reviewed, and fully edited version of a manuscript that has been accepted for publication in the International Review of Applied Economics and Policy. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Once the article is published online, the VoR becomes the official version of the article. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Any subsequent updates or corrections to the article will be clearly indicated, and the VoR remains the definitive source for citation and reference.  </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The VoR ensures the accuracy and reliability of published research.</p></div>
                            </div>
                        </div>
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Correction Criteria</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Corrections in the International Review of Applied Economics and Policy are made when significant errors or inaccuracies in the published article are identified that may affect the integrity or interpretation of the research. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This includes, but is not limited to, factual errors, misinterpretation of data, or problems with authorship.  </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Minor typographical errors or formatting issues are typically addressed without formal correction.  </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>When necessary, a formal erratum or corrigendum will be issued to ensure the accuracy of the published work.</p></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                 
                 <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Version of Record (VoR)</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The Version of Record (VoR) refers to the final, peer-reviewed, and fully edited version of a manuscript that has been accepted for publication in the International Review of Applied Economics and Policy. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Once the article is published online, the VoR becomes the official version of the article. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Any subsequent updates or corrections to the article will be clearly indicated, and the VoR remains the definitive source for citation and reference.  </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The VoR ensures the accuracy and reliability of published research.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Correction Criteria</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Corrections in the International Review of Applied Economics and Policy are made when significant errors or inaccuracies in the published article are identified that may affect the integrity or interpretation of the research. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This includes, but is not limited to, factual errors, misinterpretation of data, or problems with authorship.  </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Minor typographical errors or formatting issues are typically addressed without formal correction.  </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>When necessary, a formal erratum or corrigendum will be issued to ensure the accuracy of the published work.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
               

                <div >

                    <div className=' space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Correction Process</h2>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>When an error is identified in a published article, the International Review of Applied Economics and Policy follows a clear process for issuing corrections. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors are notified of the issue and asked to submit a corrected version of the manuscript if necessary.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The editorial team reviews the correction and determines whether an erratum or corrigendum is needed. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Once approved, the correction is published alongside the original article, and readers are informed through the journal’s platform.  </p></div>
                        <div className='flex gap-2  lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The correction ensures that the academic record remains accurate and reliable. </p></div>

                        <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                            <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2  poppins-bold" onClick={() => navigate('/editorial')}>
                                <div className='flex justify-between items-center gap-2'>  Contact Editorial Team
                                <GoArrowRight className=' text-lg'/></div>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Correction