import React from 'react'
import { useTranslation } from 'react-i18next'
import StudentImages from "../assets/img/StudentImg.png"


function Hero() {
    let {t} = useTranslation()
  return (
    <section className='bg-[#F3F4F6]  pb-25 pt-45'>
      <div className='container gap-12 flex flex-col lg:flex-row items-center'>
        <div className='w-full flex flex-col justify-center items-center text-center max-w-161'>
        <p className='bg-[#6467F21A] w-fit py-2 rounded-2xl font-medium mb-6 px-0.5 flex text-[14px] text-[#6467F2] gap-1'>🚀{t("hero.badge")}</p>
        <h2 className="text-[36px] md:text-[48px] lg:text-[60px] pb-4 font-extrabold leading-13 bg-linear-to-r mb-7 from-[#2d24c7] to-[#b360e2] bg-clip-text text-transparent ">
          {t("hero.title")}
        </h2>

        <p className='text-[20px] text-[#6B7280] w-full max-w-146 mb-9'>{t("hero.description")}</p>
        <div className='flex gap-4 mb-12'>
            <button className=' inline-block  rounded-2xl py-4 px-8 text-white cursor-pointer bg-linear-to-r  from-[#6B64F1]  to-[#AF49EB]'>  {t("hero.getStarted")} <i className="fa-solid fa-arrow-right"></i></button>
            <button className='bg-white rounded-2xl py-4 px-8 border-2 border-[#E5E7EB] cursor-pointer'>  <i className="fa-regular fa-comment"></i>  {t("hero.contactUs")}</button>
        </div>
        <div className='flex'>
            <div className='text-center pr-8'>
                <h2 className='text-[#030711] text-[24px] font-bold'>1,000+</h2>
                <p>{t("hero.students")}</p>
            </div>
            <div className='text-center px-8 border-r-2 border-[#E5E7EB]  border-l-2 '>
                <h2 className='text-[#030711] text-[24px] font-bold'>50+</h2>
                <p>{t("hero.projects")}</p>
            </div>
            <div className='text-center pl-8'>
                <h2 className='text-[#030711] text-[24px] font-bold'>4.9 <i className="fa-solid fa-star"></i></h2>
                <p>{t("hero.rating")}</p>
            </div>
        </div>
      </div>
        <div className='relative w-full max-w-234 h-full max-h-132 z-10'>
            <div className='flex z-20 top-25 absolute items-center gap-2 p-3 rounded-2xl bg-white w-fit'>
                <div className='p-2.5 bg-[#8419e2] rounded-2xl'>⚛️</div>
                <p className='text-[20px]'>React</p>
            </div>
            <img className=' w-full max-w-234 h-full max-h-132 animate-[move_3s_ease-in-out_infinite]' src={StudentImages} alt="" />
            <div className='flex z-20 bottom-25 absolute right-0 items-center gap-2 p-3 rounded-2xl bg-white w-fit'>
                <div className='p-2.5 bg-[#0da392] rounded-2xl'>🌐</div>
                <p className='text-[20px]'>i18n</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
