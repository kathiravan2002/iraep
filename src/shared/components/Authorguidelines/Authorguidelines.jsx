import React from 'react';
import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import star from '/assets/star.png'

function Authorguidelines() {
  return (
    <div>
      <div className="text-justify ">
        <section className='  border-b-2 border-[#937D14] mb-4'>
          <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
            <div>
              <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                Author Guidelines
              </h1>
              <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
              <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                The International Review of Applied Economics and Policy provides clear and detailed author guidelines to ensure the smooth submission and publication process. Authors are required to follow specific formatting, referencing, and manuscript preparation instructions to meet the journal’s high academic standards. Submissions must align with the journal's scope, and authors should ensure their work is original, well-researched, and properly referenced. These guidelines are designed to help authors present their work clearly and professionally, facilitating a smooth review and publication process.
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
              <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Publishing Requirements</h2></div>
              <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>To submit to the International Review of Applied Economics and Policy, authors must ensure their manuscripts meet the journal's publishing standards.</p></div>
                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This includes adhering to formatting guidelines, providing a clear abstract and keywords, and ensuring proper citation practices.</p></div>
                <h2 className="text-base  poppins-bold mb-2  lg:px-2 px-1 mt-2">Key Requirements :</h2>
                <ul className="list-disc lg:pl-9 pl-9 pr-2 space-y-2 poppins-regular ml-1  ">
                  <li>Manuscripts must be original and unpublished.</li>
                  <li>Adhere to the journal’s formatting and referencing guidelines.</li>
                  <li>Provide a structured abstract and relevant keywords.</li>
                  <li>Ensure ethical research practices and disclose conflicts of interest.</li>
                  <li>Submissions must align with the journal's scope in applied economics and policy.</li>
                </ul>
              </div>
            </div>
            <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
              <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Submission Process</h2></div>
              <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors can submit their manuscripts through the International Review of Applied Economics and Policy's online submission system.</p></div>
                <h2 className="text-base  poppins-bold mb-2  lg:px-2 px-1 mt-2">Key Requirements :</h2>
                <ul className="list-disc lg:pl-9 pl-9 pr-2 space-y-2 poppins-regular ml-1  ">
                  <li>Initial manuscript screening by editorial team.</li>
                  <li>Double-blind peer review process.</li>
                  <li>Author revision period.</li>
                  <li>Final editorial decision.</li>
                  <li>Publication with Creative Commons licensing.</li>

                </ul>          
                 <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It aims to serve as a platform for work that influences policy decisions and contributes to economic advancement globally.</p></div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='border-b-2 border-[#937D14] mb-4'>
          <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
            <div className='flex flex-col mt-8'>
              <div className='bg-white   border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Publishing Requirements</h2></div>
                </div>
                <div className='pb-2 space-y-2 -mt-4'>

                  <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>To submit to the International Review of Applied Economics and Policy, authors must ensure their manuscripts meet the journal's publishing standards.</p></div>
                  <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This includes adhering to formatting guidelines, providing a clear abstract and keywords, and ensuring proper citation practices.</p></div>
                  <h2 className="text-base  poppins-bold mb-2  lg:px-2 px-1 mt-2">Key Requirements :</h2>
                  <ul className="list-disc lg:pl-11 pl-9 pr-3 lg:pr-4 space-y-2 poppins-regular ml-1  ">
                    <li>Manuscripts must be original and unpublished.</li>
                    <li>Adhere to the journal’s formatting and referencing guidelines.</li>
                    <li>Provide a structured abstract and relevant keywords.</li>
                    <li>Ensure ethical research practices and disclose conflicts of interest.</li>
                    <li>Submissions must align with the journal's scope in applied economics and policy.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='flex flex-col mt-8'>
              <div className='bg-white   border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Submission Process</h2></div>
                </div>
                <div className='pb-2 space-y-2 -mt-4'>

                <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>Authors can submit their manuscripts through the International Review of Applied Economics and Policy's online submission system.</p></div>
                <h2 className="text-base  poppins-bold mb-2  lg:px-2 px-1 mt-2">Key Requirements :</h2>
                <ul className="list-disc lg:pl-11 pl-9 pr-3 lg:pr-4 space-y-2 poppins-regular ml-1  ">
                  <li>Initial manuscript screening by editorial team.</li>
                  <li>Double-blind peer review process.</li>
                  <li>Author revision period.</li>
                  <li>Final editorial decision.</li>
                  <li>Publication with Creative Commons licensing.</li>

                </ul>          
                 <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>It aims to serve as a platform for work that influences policy decisions and contributes to economic advancement globally.</p></div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div >

          <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Research Article</h2>
            <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Research articles submitted to the International Review of Applied Economics and Policy should present original, data-driven studies that offer new insights into applied economics and policy issues.</p></div>
            <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors must clearly define their research question, use rigorous methodology, and provide evidence-based conclusions. </p></div>
            <div className='flex gap-2   lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Articles should contribute meaningfully to the field by addressing pressing economic or policy challenges, with the potential to inform both academic discourse and practical applications.</p></div>

          </div>

          <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>In-depth Review Article</h2>
            <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>In-depth review articles in the International Review of Applied Economics and Policy offer comprehensive examinations of existing literature on a specific topic within applied economics and policy. </p></div>
            <div className='flex gap-2  lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>These articles synthesize findings from multiple studies, identify trends, gaps, and emerging issues, and provide critical analysis to guide future research.</p></div>
            <div className='flex gap-2  lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> Authors are expected to contribute valuable insights that advance the understanding of complex economic and policy challenges.</p></div>

          </div>
          <div className=' space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Technical Article</h2>
            <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Technical articles in the International Review of Applied Economics and Policy focus on the application of advanced methodologies, models, or tools to address specific economic or policy problems. </p></div>
            <div className='flex gap-2   lg:px-5 px-0'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '> These articles should provide a clear explanation of the technical approach, detailed analysis, and practical implications of the findings. </p></div>
            <div className='flex gap-2   lg:px-5 px-0 '><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>Authors are expected to contribute novel solutions or enhancements to existing methods, contributing to the advancement of the field.</p></div>

          </div>
        </div>



      </div>
    </div>


  )
}

export default Authorguidelines