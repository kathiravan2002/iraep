import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import star from '/assets/star.png'


function Abstractindexing() {
    return (
        <div>
            <div className="text-justify ">
                <section className='  border-b-2 border-[#937D14] mb-4'>
                    <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                        <div>
                            <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                                Abstracting and Indexing
                            </h1>
                            <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                            <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                                The International Review of Applied Economics and Policy is committed to ensuring the wide visibility and accessibility of its published research. The journal is indexed in prominent academic databases and abstracting services, facilitating the discovery and citation of its articles. By being listed in these platforms, we aim to provide global reach and enhance the impact of high-quality research in applied economics and policy. Authors benefit from increased exposure and recognition in the academic community.
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
                        <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Global Visibility </h2></div>
                        <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is dedicated to offering authors global visibility for their research,  policymakers, and practitioners.</p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>By adopting an open access model and being indexed in leading academic databases, the journal enhances the accessibility and citation of published articles. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This broad visibility helps to amplify the impact of research, promoting knowledge exchange and fostering collaborations worldwide. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Our aim is to position the journal as a key resource for addressing critical economic and policy issues on a global scale.</p></div>
                        </div>
                    </div>
                    <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
                        <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Quality Assurance</h2></div>
                        <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is committed to maintaining the highest standards of academic quality. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>All submissions undergo a rigorous double-blind peer review process to ensure that published research is original, methodologically sound, and relevant to the field. </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The editorial team carefully evaluates each manuscript for clarity, accuracy, and contribution to the advancement of applied economics and policy.  </p></div>
                            <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>We are dedicated to upholding the integrity and reliability of all published content.</p></div>
                        </div>
                    </div>
                </div>
            </div> */}

                <div className='border-b-2 border-[#937D14] mb-4'>
                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Global Visibility</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is dedicated to offering authors global visibility for their research,  policymakers, and practitioners.</p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>By adopting an open access model and being indexed in leading academic databases, the journal enhances the accessibility and citation of published articles. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This broad visibility helps to amplify the impact of research, promoting knowledge exchange and fostering collaborations worldwide. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Our aim is to position the journal as a key resource for addressing critical economic and policy issues on a global scale.</p></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col mt-8'>
                            <div className='bg-white   border-2 border-[#937D14] h-full'>
                                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                                    <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Quality Assurance</h2></div>
                                </div>
                                <div className='pb-2 space-y-2 -mt-4'>

                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The International Review of Applied Economics and Policy is committed to maintaining the highest standards of academic quality. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>All submissions undergo a rigorous double-blind peer review process to ensure that published research is original, methodologically sound, and relevant to the field. </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The editorial team carefully evaluates each manuscript for clarity, accuracy, and contribution to the advancement of applied economics and policy.  </p></div>
                                    <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>We are dedicated to upholding the integrity and reliability of all published content.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div >

                    <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Primary Database</h2>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy is indexed in leading primary databases that ensure the global visibility of its research.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>These include well-established platforms such as Scopus, Web of Science, and others, which provide widespread access to scholarly articles. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> Being featured in these databases enhances the journal's citation potential and increases its reach within the academic and policy communities.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> Researchers and policymakers worldwide can easily access and engage with the journal’s published content. This indexing supports the journal's mission to contribute to global economic and policy discussions.</p></div>

                    </div>

                    <div className='border-b-2 border-[#937D14] mb-4  space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Citation Indexes</h2>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy is included in several prominent citation indexes, ensuring that its articles are easily discoverable and citable by researchers worldwide.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Indexed in platforms like Scopus, Web of Science, and Google Scholar, the journal's content receives broad exposure across academic and policy research networks. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>These citation indexes help increase the visibility and impact of published work, enabling authors to gain recognition for their contributions.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> By being listed in these key indexes, the journal fosters knowledge dissemination and facilitates further research in applied economics and policy.</p></div>

                    </div>
                    <div className=' space-y-3'>
                        <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Discovery Services</h2>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy is included in leading discovery services, ensuring that its research is easily accessible to scholars, policymakers, and practitioners worldwide.</p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Through integration with platforms like Google Scholar, PubMed, and other academic search engines, the journal enhances its discoverability across various disciplines.  </p></div>
                        <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>These discovery services help users quickly locate relevant articles, boosting the journal's citation rate and contributing to its global impact. </p></div>
                        <div className='flex gap-2 lg:px-5 px-0 '><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The journal’s inclusion in such services facilitates broader academic engagement and promotes the dissemination of knowledge in applied economics and policy.</p></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abstractindexing