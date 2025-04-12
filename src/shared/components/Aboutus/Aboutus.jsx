import React from 'react'
import point from '/assets/fingers.png'
import right from '/assets/Right.png'
import { useNavigate } from "react-router-dom";
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import { GoArrowRight } from 'react-icons/go';
import star from '/assets/star.png'

function Aboutus() {

    const navigate = useNavigate();

    return (
        <div>

            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                About us
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border border-[#937D14]' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                                The International Review of Applied Economics and Policy is a scholarly journal committed to publishing high-quality research that connects economic theory with real-world policy applications. We provide a global platform for academics, researchers, and policymakers to share insights that drive impactful economic decisions. Our focus is on fostering innovation, critical thinking, and evidence-based policy solutions.
                            </p>
                        </div>
                        <div className='hidden lg:block shadow-md'>
                            <img src={book} alt="image" className=' max-w-[150px] max-w-auto  border border-[#937D14]' />
                        </div>
                    </div>
                </section>
                <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Scope</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy covers a broad range of topics related to the practical application of economic theories in policy formulation and implementation. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal welcomes interdisciplinary research in areas such as development economics, public finance, trade, labor markets, and regulatory policy.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It encourages both empirical and theoretical contributions that address current global economic challenges. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The scope also includes case studies, comparative analyses, and policy evaluations that inform decision-making at national and international levels. </p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Mission</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The mission of the International Review of Applied Economics and Policy is to advance the understanding and application of economic principles in shaping effective public policies.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal aims to serve as a bridge between academic research and practical policymaking by publishing high-quality, impactful studies.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>We are committed to fostering global dialogue, promoting evidence-based solutions, and supporting innovation in economic thought.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Our goal is to contribute to sustainable and inclusive economic development worldwide.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Publication Ethics</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is committed to maintaining the highest standards of publication ethics. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>We expect all authors to submit original, unpublished work and to properly acknowledge the contributions of others. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal follows a transparent peer review process and ensures fairness, confidentiality, and integrity throughout the editorial workflow.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors, reviewers, and editors are expected to adhere to ethical guidelines and promote academic honesty.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Audience</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is intended for a diverse audience that includes academic researchers, economists, policymakers, practitioners, and graduate students.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal serves those interested in the intersection of economic theory and real-world policy challenges.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It is especially valuable to professionals involved in economic planning, development programs, and policy evaluation. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>By fostering dialogue across disciplines, the journal supports informed decision-making and practical impact in the field of economics.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Scope</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy covers a broad range of topics related to the practical application of economic theories in policy formulation and implementation. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal welcomes interdisciplinary research in areas such as development economics, public finance, trade, labor markets, and regulatory policy.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It encourages both empirical and theoretical contributions that address current global economic challenges. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The scope also includes case studies, comparative analyses, and policy evaluations that inform decision-making at national and international levels. </p></div>
                            </div>
                        </div>
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Mission</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The mission of the International Review of Applied Economics and Policy is to advance the understanding and application of economic principles in shaping effective public policies.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal aims to serve as a bridge between academic research and practical policymaking by publishing high-quality, impactful studies.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>We are committed to fostering global dialogue, promoting evidence-based solutions, and supporting innovation in economic thought.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Our goal is to contribute to sustainable and inclusive economic development worldwide.</p></div>
                            </div>
                        </div>
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Publication Ethics</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is committed to maintaining the highest standards of publication ethics. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>We expect all authors to submit original, unpublished work and to properly acknowledge the contributions of others. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal follows a transparent peer review process and ensures fairness, confidentiality, and integrity throughout the editorial workflow.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors, reviewers, and editors are expected to adhere to ethical guidelines and promote academic honesty.</p></div>
                            </div>
                        </div>
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Audience</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is intended for a diverse audience that includes academic researchers, economists, policymakers, practitioners, and graduate students.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal serves those interested in the intersection of economic theory and real-world policy challenges.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It is especially valuable to professionals involved in economic planning, development programs, and policy evaluation. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>By fostering dialogue across disciplines, the journal supports informed decision-making and practical impact in the field of economics.</p></div>
                            </div>
                        </div>

                    </div>
                </div> */}

                <div className='space-y-3'>
                    <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Submission Guidelines</h2>
                    <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors wishing to submit their work to the International Review of Applied Economics and Policy should ensure their manuscript is original, unpublished, and not under review elsewhere. </p></div>
                    <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Submissions must adhere to the journal's formatting and referencing guidelines, which are available on the website. </p></div>
                    <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Manuscripts should be accompanied by an abstract, keywords, and a brief cover letter outlining the research's significance.</p></div>
                    <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> All submissions undergo a double-blind peer review process to ensure quality and relevance. </p></div>
                    <div className="text-center px-4 lg:px-0 mt-2 mb-2">
                        <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2 poppins-bold" onClick={() => navigate('/authorguidelinespage')} >
                            <div className='flex justify-between items-center gap-2'>  View Guidelines
                                <GoArrowRight className=' text-lg'/></div>
                        </button>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Aboutus