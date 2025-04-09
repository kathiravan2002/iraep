import React from 'react';
import right from '/assets/Right.png';
import icon from '/assets/rigt.png'
import point from '/assets/Aboutus.png';
import aim from '/assets/Journals.png'
import { useNavigate } from "react-router-dom";
import book from '/assets/books.jpg'
import { FaSackDollar } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';

const Home = () => {
  const navigate = useNavigate();

  const researchDomains = [

    'Applied Economics',
    'Economic Policy',
    'Fiscal Policy',
    'Monetary Policy',
    'Development Economics',
    'Public Finance',
    'Labor Economics',
    'International Trade',
    'Economic Growth',
    'Sustainable Development',
    'Public Policy',
    'Policy Analysis',
    'Economic Modeling',
    'Global Economics',
    'Economic Theory',

    'Inflation Control',
    'Urban Economics',
    'Regional Development',
    'Agricultural Economics',
    'Industrial Policy',
    'Income Inequality',
    'Poverty Reduction',
    'Education Policy',
    'Environmental Economics',
    'Health Economics',
    'Welfare Economics',
    'Regulatory Policy',
    'Government Policy',
    'Economic Reform',
    'Behavioral Economics',


    'Globalization',
    'Investment Policy',
    'Macroeconomic Stability',
    'Social Policy',
    'Economic Institutions',
    'Digital Economy',
    'Public Expenditure',
    'Innovation Policy',
    'Trade Policy',
    'Exchange Rates',
    'Market Regulation',
    'Policy Implementation',
    'Budgeting',
    'Economic Forecasting',
    'Productivity Analysis',

  ];

  return (

    <div >
      <main className="w-full text-justify ">
        <section className='  border-b-2 border-[#937D14] '>
          <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
            <div>
              <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 text-[#937D14]  poppins-bold">
                Welcome to IRAEP
              </h1>
              <img src={book} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
              <p className="  text-black mb-3 lg:mb-4   poppins-regular  ">
                <span className=" poppins-semibold ">
                  The International Review of Applied Economics and Policy
                </span>{' '}
                is a peer-reviewed journal dedicated to the exploration and analysis of contemporary economic issues and policy applications across the globe. The journal aims to bridge the gap between economic theory and real-world policy implementation, encouraging submissions that offer empirical insights and practical solutions. It welcomes interdisciplinary research spanning development economics, public policy, trade, labor, and fiscal analysis. With a global perspective, the journal serves as a platform for academics, policymakers, and practitioners to engage in meaningful economic discourse.
              </p>
            </div>
            <div className='hidden lg:block shadow-lg border'>
              <img src={book} alt="image" className=' max-w-[150px] max-w-auto  ' />
            </div>
          </div>
        </section>
        <div className='border-b-2 border-[#937D14] mb-4'>
          <div className=" grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-4 gap-4 ">
            <div className='flex flex-col mt-12'>

              <div className='bg-white  border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4   justify-center gap-3 items-center border-2 border-[#937D14] '><img src={point} alt='img' className='w-[50px] h-[45px] ' /> <h2 className='text-lg  text-center   text-[#937D14] poppins-bold'>About the Journal</h2></div>
                </div>
                <p className='poppins-regular px-4 -mt-4'>The International Review of Applied Economics and Policy is a leading journal dedicated to the application of economic theories in shaping effective policy decisions. Our mission is to provide a platform for high-quality, interdisciplinary research that bridges academic knowledge with real-world policy solutions.</p>
                <div className="px-4   flex justify-end items-end mb-3">
                  <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2   poppins-bold mt-3 " onClick={() => navigate('/aboutus')}>
                    <div className='flex justify-between items-center gap-2'>  Learn More
                      <GoArrowRight className=' text-lg'/>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-12'>

              <div className='bg-white  border-2 border-[#937D14] h-full'>
                <div className=' -translate-y-1/2  flex justify-center items-center  '>
                  <div className='flex bg-white  py-2 px-4  justify-center gap-3 items-center border-2 border-[#937D14]'><img src={aim} alt='img' className='w-[50px] h-[45px] ' /> <h2 className='text-lg  text-center   text-[#937D14] poppins-bold'>Aim and Scope</h2></div>
                </div>
                <p className='poppins-regular  px-4 -mt-4'>The International Review of Applied Economics and Policy aims to advance the understanding of economic theory and its practical applications in policymaking. We focus on publishing innovative research that addresses critical global economic issues, with an emphasis on development economics, trade, labor, and fiscal policies. </p>
                <div className="px-4   flex justify-end items-end mb-3">
                  <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2   poppins-bold mt-3 " onClick={() => navigate('/aimscope')}>
                    <div className='flex justify-between items-center gap-3'>  Learn More
                    <GoArrowRight className=' text-lg'/>
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div >
          <h2 className='poppins-bold lg:text-2xl text-xl text-center text-[#937D14]'>Featured Topics</h2>
          <div className='border-b-2 border-[#937D14] mb-4 '>
            <h2 className='poppins-bold lg:text-xl text-lg  text-[#937D14]'>Peer Review Process</h2>
            <div className='space-y-3'>
            <div className='flex gap-3 lg:px-2 px-1 mt-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy follows a rigorous double-blind peer review process to ensure the highest quality of research. Submissions are evaluated by experts in the field for originality, relevance, and methodological soundness, ensuring that only the most impactful work is published.</p></div>
            <div className='flex gap-3 lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The anonymity of both authors and reviewers helps maintain objectivity and fairness throughout the review process, fostering unbiased academic evaluation.</p></div>
            </div>
            <div className="px-4 lg:px-0  flex justify-end items-end mb-4 ">
            
              <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2  poppins-bold  "onClick={() => navigate('/peer')}>
                <div className='flex justify-between items-center gap-3'>  Learn More
                <GoArrowRight className=' text-lg'/>
                </div>
              </button>
            </div>
          </div>

          <div className='border-b-2 border-[#937D14] mb-4 '>
            <h2 className='poppins-bold lg:text-xl text-lg  text-[#937D14]'>Publications Ethics</h2>
            <div className='space-y-3'>
            <div className='flex gap-3 lg:px-2 px-1 mt-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy upholds the highest standards of integrity in academic publishing. We are committed to ethical practices, ensuring that all research is original, properly cited, and free from plagiarism, with transparency maintained throughout the submission and review process.</p></div>
            <div className='flex gap-3 lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>We strictly prohibit data fabrication, falsification, and unethical research conduct. All stakeholders—authors, reviewers, and editors—are expected to adhere to internationally recognized ethical guidelines.</p></div>
            </div>
            <div className="px-4 lg:px-0  flex justify-end items-end  mb-4 lg:mt-0 mt-2">
              <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2   poppins-bold " onClick={() => navigate('/publicationethicspage')}>
                <div className='flex justify-between items-center gap-3'>  Learn More
                <GoArrowRight className=' text-lg'/>
                </div>
              </button>
            </div>
          </div>
          <div className='border-b-2 border-[#937D14] mb-4'>
            <h2 className='poppins-bold lg:text-xl text-lg text-[#937D14]'>Article Processing</h2>
            <div className='space-y-3'>
            <div className='flex gap-3 lg:px-2 px-1 mt-3'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The International Review of Applied Economics and Policy applies a modest article processing fee to support the peer review and editorial processes. This fee is charged only after an article has been accepted for publication and helps cover the costs of administrative handling, peer review, and production.We are committed to maintaining transparency and fairness in all stages of publication.</p></div>
            <div className='flex gap-3 lg:px-2 px-1'><img src={icon} alt='icon' className='w-[22px] h-[20px]' /><p className='poppins-regular '>The processing fee ensures the sustainability of the journal's open-access model, enabling free and unrestricted access to published research for readers worldwide. Authors benefit from professional editorial support, timely communication, and enhanced visibility of their work across academic and policy communities.</p></div>
            </div>
            <div className="px-4 lg:px-0  flex justify-end items-end mb-4 lg:mt-0 mt-2">
              <button className="hover:text-white poppins-regular hover:bg-[#937D14]  cursor-pointer text-[#937D14] border-2 border-[#937D14] hover:border-2 hover:border-[#937D14]  transition-duration duration-300 px-4 py-2   poppins-bold " onClick={() => navigate('/articleprocessingpage')}>
                <div className='flex justify-between items-center gap-3 '>  Learn More
                <GoArrowRight className=' text-lg'/>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-10 mb-4'>

          <div className='bg-white  border-2 border-[#937D14] h-full'>
            <div className=' -translate-y-1/2  flex justify-center items-center  '>
              <div className='flex bg-white  py-2 px-4  justify-center gap-3 items-center border-2 border-[#937D14]'> <h2 className='text-lg  text-center   text-[#937D14] poppins-bold'> Key Research Domains</h2></div>
            </div>
            <p className="text-center text-base lg:text-xl mb-3 lg:mb-4  text-[#000000] poppins-bold px-4 lg:px-0  ">
              The journal covers the following areas of  Economics and Policy
            </p>
            <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  mb-4">
              {researchDomains.map((column, colIndex) => (

                <p key={colIndex} className="flex gap-2 lg:gap-5 md:gap-0 space-y-2 lg:space-y-4">
                  <span className="ml-4 lg:ml-24 "><FaSackDollar className='w-[22px] h-[23px] text-[#937D14]' /></span>
                  <span className="2xl:text-base xl:text-base lg:text-sm md:text-sm text-sm poppins-regular text-left">{column}</span>
                </p>

              ))}
            </div>
          </div>
        </div>
       


        {/* Submission Info Section */}
        <section className="w-full  text-center">
          <p className=" mb-2 poppins-regular lg:text-base px-4 lg:px-0 text-pretty">
            We publish original research articles, review articles, and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions. Our fast reviewing process is our strength.
          </p>
          <div className="bg-[#937D14] p-2 mx-4 lg:mx-0">
            <p className="text-white poppins-bold  text-sm lg:text-base">
              The last date for manuscript submission for the next issue is October 22, 2025
            </p>
          </div>
          <p className="text-black mt-2 poppins-regular   px-4 lg:px-0">
            With Warm Regards, <br />
            Editor-in-Chief<br />
            <span className="font-bold">IRAEP</span>
          </p>
        </section>
      </main>
    </div>

  );
};

export default Home;
