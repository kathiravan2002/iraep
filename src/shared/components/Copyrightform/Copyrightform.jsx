import point from '/assets/fingers.png'
import book from '/assets/books.jpg'
import icon from '/assets/rigt.png'
import star from '/assets/star.png'

function Copyrightform() {
  return (
    <div>
      <div className="text-justify ">
        <section className='  border-b-2 border-[#937D14] mb-4'>
          <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
            <div>
              <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                Copyright Declaration
              </h1>
              <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border border-[#937D14]' />
              <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                Authors publishing in the International Review of Applied Economics and Policy retain full copyright of their work. However, they grant the journal a license to publish and distribute the article under the terms of the Creative Commons Attribution License (CC BY). This allows for broad dissemination while ensuring authors receive proper credit. All users are free to share and adapt the content with appropriate attribution.
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
              <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px] ' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Copyright Declaration </h2></div>
              <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IRAEP. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p></div>
              </div>
            </div>
            <div className='bg-[#937D14] pl-2 pt-2 rounded-2xl flex flex-col'>
              <div className='flex justify-center gap-3 items-center mb-3 lg:mb-2'><img src={point} alt='img' className='w-[34px] h-[30px]' /> <h2 className='text-lg  text-center   text-white poppins-bold'>Author Agreement </h2></div>
              <div className='bg-white rounded-tr-[25px]  rounded-br-2xl  rounded-bl-2xl p-3 border border-[#937D14]  h-full space-y-2'>

                <div className='flex gap-3  lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p></div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='border-b-2 border-[#937D14] mb-4'>
          <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
            <div className='flex flex-col mt-8'>
              <div className='bg-white   border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px]' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Copyright Declaration</h2></div>
                </div>
                <div className='pb-2 space-y-2 -mt-4'>

                  <div className='flex gap-3  lg:px-4 px-3 '><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IRAEP. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p></div>
                </div>

              </div>
            </div>

            <div className='flex flex-col mt-8'>
              <div className='bg-white   border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14]  '><img src={point} alt='img' className='w-[40px]  h-[38px] ' /> <h2 className='lg:text-xl text-lg  text-center   text-[#937D14] poppins-bold'>Author Agreement</h2></div>
                </div>
                <div className='pb-2 space-y-2 -mt-4'>

                  <div className='flex gap-3  lg:px-4 px-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /> <p className='poppins-regular'>This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p></div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div >

          <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Publication Rights</h2>
            <div className='flex gap-2   lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>I/We will not publish the above-mentioned contribution anywhere else without the prior written permission of the publisher, unless it has been substantially changed.</p></div>

          </div>

          <div className='border-b-2 border-[#937D14] mb-4 space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Content Warranty</h2>
            <div className='flex gap-2  lg:px-5 px-0 mb-4'><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>I/We declare and warrant that the contribution is original, except for excerpts from copyrighted works that may be included with the permission of the copyright holder and author thereof.</p></div>

          </div>
          <div className=' space-y-3'>
            <h2 className='poppins-bold text-xl  text-[#937D14] text-center'>Legal Compliance</h2>
            <div className='flex gap-2   lg:px-5 px-0 '><img src={star} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The Author warrants the right to enter into this Agreement and that the Article contains no libelous or unlawful statements, harmful instructions, and does not violate any rights or privacy of others.</p></div>

          </div>
        </div>



      </div>
    </div>
  )
}

export default Copyrightform