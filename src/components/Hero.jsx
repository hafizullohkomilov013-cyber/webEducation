import React from 'react'
import { useTranslation } from 'react-i18next'


function Hero() {
    let {t, i18n} = useTranslation()
  return (
    <section>
      <div className='w-full max-w-161 '>
        <p className='bg-[#6467F21A] w-fit py-2 rounded-2xl font-medium mb-6 px-0.5 flex text-[14px] text-[#6467F2] gap-1'>🚀{t("hero.badge")}</p>
        <h2
  className="text-[60px] font-extrabold leading-13 bg-gradient-to-r mb-7 from-[#2d24c7] to-[#b360e2] bg-clip-text text-transparent ">
  {t("hero.title")}
</h2>

        <p>{t("hero.description")}</p>
        <div>
            <button> {t("hero.getStarted")} <i class="fa-solid fa-arrow-right"></i></button>
            <button>  <i class="fa-regular fa-comment"></i>  {t("hero.contactUs")}</button>
        </div>
        <div>
            <div>
                <h2>1,000+</h2>
                <p>{t("hero.students")}</p>
            </div>
            <div>
                <h2>50+</h2>
                <p>{t("hero.projects")}</p>
            </div>
            <div>
                <h2>4.9 <i class="fa-solid fa-star"></i></h2>
                <p>{t("hero.rating")}</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
