import React from 'react'
import aboutImage from '../assets/images/image2.png'
const About = () => {
  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className=' text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className=' flex md:flex-row  flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='py-2'></div>
          <div className='text-gray-400 my-3'>
            <p className=' text-justify leading-7 w-11/12 mx-auto'>I Am Omprakash Abhyankar. & I Am Software Developer Currently Working In Fort InFotech. This Is My Official Portfolio Website Which Is Shows My Experience & My Project & All About Me .</p>
            <br />
            <br />
            <a href="Omprakash-Abhyankar-8999624923.pdf" download>
            <button type="submit" className='btn-primary'>Download CV</button></a>
          </div>         
          <div className='flex-1 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
              <img src={aboutImage} alt=""  className='w-full object-cover bg-cyan-600 rounded-xl'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
