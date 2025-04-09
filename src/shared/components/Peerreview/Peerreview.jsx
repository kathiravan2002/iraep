import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import star from '/assets/star.png'

function Peerreview() {
  return (
    <div>
      <div className="text-justify ">
        <section className='  border-b-2 border-[#937D14] mb-4'>
          <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
            <div>
              <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                Peer review Process
              </h1>
              <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
              <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                The International Review of Applied Economics and Policy follows a rigorous double-blind peer review process to ensure the integrity and quality of published research. Each submission is evaluated by independent experts based on originality, relevance, methodology, and contribution to the field. Reviewers and authors remain anonymous to maintain objectivity throughout the evaluation process. The editorial team ensures a fair, timely, and transparent review experience for all contributors.
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
              <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Requirements</h2></div>
              <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors submitting to the International Review of Applied Economics and Policy must ensure their manuscripts are original, clearly written, and relevant to the journal’s scope. </p></div>
                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Submissions should follow the prescribed formatting guidelines, include an abstract, keywords, and proper references.</p></div>
                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>All figures and tables must be properly labeled and cited within the text. </p></div>
                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors are also expected to disclose any conflicts of interest and adhere to ethical research standards.</p></div>
              </div>
            </div>
            <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
              <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Benefits</h2></div>
              <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Publishing with the International Review of Applied Economics and Policy offers authors global visibility, rigorous peer review, and a platform to influence real-world economic policymaking.</p></div>
                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal supports timely publication and provides academic recognition for impactful research.</p></div>
                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors benefit from wide dissemination of their work among scholars, practitioners, and policymakers. </p></div>
                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Additionally, the journal fosters collaboration and engagement within the international economics community.</p></div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='border-b-2 border-[#937D14] mb-4'>
          <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
            <div className='flex flex-col mt-8'>
              <div className='bg-white   border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Requirements</h2></div>
                </div>
                <div className='pb-2 space-y-2 -mt-4'>

                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors submitting to the International Review of Applied Economics and Policy must ensure their manuscripts are original, clearly written, and relevant to the journal’s scope. </p></div>
                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Submissions should follow the prescribed formatting guidelines, include an abstract, keywords, and proper references.</p></div>
                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>All figures and tables must be properly labeled and cited within the text. </p></div>
                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors are also expected to disclose any conflicts of interest and adhere to ethical research standards.</p></div>
                </div>

              </div>
            </div>

            <div className='flex flex-col mt-8'>
              <div className='bg-white   border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Benefits</h2></div>
                </div>
                <div className='pb-2 space-y-2 -mt-4'>

                <div className='flex gap-3 lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Publishing with the International Review of Applied Economics and Policy offers authors global visibility, rigorous peer review, and a platform to influence real-world economic policymaking.</p></div>
                <div className='flex gap-3 lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>The journal supports timely publication and provides academic recognition for impactful research.</p></div>
                <div className='flex gap-3 lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors benefit from wide dissemination of their work among scholars, practitioners, and policymakers. </p></div>
                <div className='flex gap-3 lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Additionally, the journal fosters collaboration and engagement within the international economics community.</p></div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div >

          <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Research Article</h2>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[22px]' /><p className='poppins-regular '>Research articles submitted to the International Review of Applied Economics and Policy should present original, high-quality research that contributes to the understanding and application of economic theories in policy contexts.</p></div>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[22px]' /><p className='poppins-regular '>Articles must include a clear research question, robust methodology, data analysis, and well-supported conclusions.</p></div>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[22px]' /><p className='poppins-regular '>Submissions should address relevant economic issues with practical implications for policymakers or practitioners.</p></div>
            <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[22px]' /><p className='poppins-regular '>All research articles undergo a double-blind peer review process to ensure academic rigor and relevance.</p></div>

          </div>

          <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Review Article</h2>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Review articles in the International Review of Applied Economics and Policy offer comprehensive overviews of current research and developments within specific areas of applied economics and policy. </p></div>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>These articles synthesize existing literature, highlight key trends, debates, and gaps, and provide critical analysis to guide future research.</p></div>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>They serve as valuable resources for both scholars and policymakers seeking to understand evolving economic issues. </p></div>
            <div className='flex gap-2 lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>All review articles are subject to peer review to ensure clarity, depth, and academic integrity.</p></div>

          </div>
          <div className=' space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Technical Article</h2>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Technical articles in the International Review of Applied Economics and Policy focus on methodological advancements, data analysis techniques, and applied economic models relevant to policy formulation.</p></div>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>These articles provide detailed explanations of tools, frameworks, or software that support empirical research and decision-making.</p></div>
            <div className='flex gap-2 lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Submissions should clearly demonstrate the practical utility of the methods discussed. </p></div>
            <div className='flex gap-2 lg:px-5 px-0 '><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>All technical articles are peer-reviewed to ensure accuracy, innovation, and relevance to the field.</p></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Peerreview