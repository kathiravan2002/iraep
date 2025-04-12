import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import star from '/assets/star.png'


function Articalprocessing() {
    return (
        <div>
            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                Article Processing
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border border-[#937D14]' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                                The International Review of Applied Economics and Policy follows a transparent and efficient article processing workflow. Upon submission, manuscripts undergo an initial screening for relevance and quality before being sent for peer review. Once accepted, articles are processed for publication, including copyediting, typesetting, and final approval. Authors are kept informed throughout the process, and the journal strives to ensure a swift, smooth, and rigorous publication experience. The goal is to ensure that all articles meet the journal’s high standards for academic quality and integrity.
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
                        <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Publication Process</h2></div>
                        <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The publication process for the International Review of Applied Economics and Policy begins with manuscript submission, followed by a thorough initial screening for quality and relevance. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Accepted manuscripts are then subjected to a double-blind peer review to ensure academic rigor and impartiality. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Once reviewed, authors are provided with feedback for revisions, and the revised manuscript is re-evaluated.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>After final approval, the article undergoes copyediting, typesetting, and formatting before being published online. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The entire process is designed to ensure that only high-quality research is published, contributing to the advancement of knowledge in applied economics and policy.</p></div>
                        </div>
                    </div>
                    <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                        <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Author Benefits</h2></div>
                        <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Publishing in the International Review of Applied Economics and Policy offers authors global visibility and broad dissemination of their work through open access, ensuring free access to a wide audience. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal’s rigorous peer review process guarantees high academic quality and constructive feedback, helping authors refine and strengthen their research. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors also benefit from increased exposure via citation indexes and leading discovery services and impact. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal’s quick publication turnaround helps authors gain timely recognition. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Moreover, authors maintain copyright under a Creative Commons license, allowing for broader sharing and reuse. </p></div>
                        </div>
                    </div>
                </div>
            </div> */}

                <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Publication Process</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The publication process for the International Review of Applied Economics and Policy begins with manuscript submission, followed by a thorough initial screening for quality and relevance. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Accepted manuscripts are then subjected to a double-blind peer review to ensure academic rigor and impartiality. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Once reviewed, authors are provided with feedback for revisions, and the revised manuscript is re-evaluated.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>After final approval, the article undergoes copyediting, typesetting, and formatting before being published online. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The entire process is designed to ensure that only high-quality research is published, contributing to the advancement of knowledge in applied economics and policy.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Author Benefits</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Publishing in the International Review of Applied Economics and Policy offers authors global visibility and broad dissemination of their work through open access, ensuring free access to a wide audience. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal’s rigorous peer review process guarantees high academic quality and constructive feedback, helping authors refine and strengthen their research. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors also benefit from increased exposure via citation indexes and leading discovery services and impact. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal’s quick publication turnaround helps authors gain timely recognition. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Moreover, authors maintain copyright under a Creative Commons license, allowing for broader sharing and reuse. </p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Initial Submission</h2>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors wishing to submit to the International Review of Applied Economics and Policy must first ensure their manuscript adheres to the journal's formatting guidelines, including proper referencing and abstract requirements. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The initial submission should be accompanied by a cover letter that briefly outlines the significance of the research. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Submissions are made through the journal’s online submission system, where authors can upload their manuscript files for review.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> An initial screening is performed to ensure the manuscript aligns with the journal's scope and quality standards before proceeding to the peer review stage.</p></div>

                    </div>

                    <div className='border-b-2 border-[#937D14] mb-4  space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Peer Review</h2>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy follows a double-blind peer review process, ensuring impartial evaluation of submitted manuscripts.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Each manuscript is reviewed by independent experts in the relevant field who assess the quality, originality, and relevance of the research.  </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Reviewers provide constructive feedback, which helps authors improve their work. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> The editorial team ensures that the review process is thorough, fair, and timely, with the goal of maintaining high academic standards and integrity in published research.</p></div>

                    </div>
                    <div className=' space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Publications</h2>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Once a manuscript has passed the peer review and revision stages, it undergoes final copyediting, typesetting, and formatting before publication.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Accepted articles are published online and made freely available to a global audience through the journal’s open access model.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The journal aims for quick publication to ensure timely dissemination of research.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0 '><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>TAuthors are notified promptly when their article is live, and they are provided with citation details for their work.</p></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articalprocessing