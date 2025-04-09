import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import star from '/assets/star.png'


function Publicationethics() {
    return (
        <div>
            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                            Publications Ethics
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                            The International Review of Applied Economics and Policy is committed to upholding the highest standards of ethical publishing. Authors must ensure that their work is original, properly cited, and free from plagiarism or data fabrication. All parties involved—authors, editors, and reviewers—are expected to act with integrity, transparency, and accountability. The journal adheres to ethical guidelines for conflict of interest disclosure, authorship, and responsible research conduct, ensuring fairness and trust in the publication process.
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
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Research Integrity</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy upholds strong principles of research integrity to maintain the credibility and trustworthiness of published work. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors are expected to conduct research honestly, transparently, and responsibly, ensuring accurate data representation and proper citation of sources.</p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Any form of misconduct, including plagiarism, data manipulation, or unethical practices, is strictly prohibited. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal is dedicated to promoting a culture of accountability and ethical scholarship in all aspects of research and publication.</p></div>
                            </div>
                        </div>
                        <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                            <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Fail Review Process</h2></div>
                            <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>If a manuscript does not meet the standards of the International Review of Applied Economics and Policy, it may be rejected during the initial screening or after peer review. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Common reasons for rejection include lack of originality, poor methodological rigor, or misalignment with the journal’s scope. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors will be notified with constructive feedback to help improve their work for future submission. </p></div>
                                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Rejected articles may be resubmitted only after substantial revision and upon the editor’s recommendation.</p></div>
                            </div>
                        </div>
                    </div>
                </div> */}
  
                 <div className='border-b-2 border-[#937D14] mb-4'>
                          <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                            <div className='flex flex-col mt-8'>
                              <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Research Integrity</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>
                
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy upholds strong principles of research integrity to maintain the credibility and trustworthiness of published work. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors are expected to conduct research honestly, transparently, and responsibly, ensuring accurate data representation and proper citation of sources.</p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Any form of misconduct, including plagiarism, data manipulation, or unethical practices, is strictly prohibited. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal is dedicated to promoting a culture of accountability and ethical scholarship in all aspects of research and publication.</p></div>
                                </div>
                
                              </div>
                            </div>
                
                            <div className='flex flex-col mt-8'>
                              <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Fail Review Process</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>
                
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>If a manuscript does not meet the standards of the International Review of Applied Economics and Policy, it may be rejected during the initial screening or after peer review. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Common reasons for rejection include lack of originality, poor methodological rigor, or misalignment with the journal’s scope. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors will be notified with constructive feedback to help improve their work for future submission. </p></div>
                                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Rejected articles may be resubmitted only after substantial revision and upon the editor’s recommendation.</p></div>
                                </div>
                
                              </div>
                            </div>
                          </div>
                        </div>

                <div >

                    <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Open Acess Policy</h2>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy follows an open access model, ensuring that all published articles are freely available to readers worldwide without subscription or access fees. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>This policy promotes the wide dissemination of knowledge and encourages greater visibility and citation of authors' work. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors retain copyright under a Creative Commons license, allowing for broad sharing and reuse with proper attribution.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The journal is committed to supporting open, transparent, and equitable access to academic research.</p></div>

                    </div>

                    <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Creative Common License</h2>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>All articles published in the International Review of Applied Economics and Policy are made available under a Creative Commons Attribution (CC BY) license. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>This allows users to freely share, adapt, and build upon the work, provided the original authors are properly credited. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The license ensures maximum dissemination and reuse of research, fostering collaboration and innovation within the academic and policy communities.  </p></div>
                        <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors retain copyright, while granting the journal permission to publish their work under this open access model.</p></div>

                    </div>
                    <div className=' space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Community Standards</h2>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy is committed to fostering a respectful, inclusive, and collaborative academic community.</p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors, reviewers, and editors are expected to uphold the highest standards of professionalism and integrity in all interactions. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Discrimination, harassment, or any form of misconduct is strictly prohibited. </p></div>
                        <div className='flex gap-2  lg:px-5 px-0 '><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The journal encourages constructive dialogue, ethical scholarship, and mutual respect among all members of the academic and policy communities.</p></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publicationethics