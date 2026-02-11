import React from 'react'
import { skillsData } from '../data/SkilsData';
import { useTranslation } from 'react-i18next';
console.log(skillsData);


function SkilsCard() {
    let [t] =useTranslation()
  return (
    <section className="container">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col justify-between items-start min-w-50 bg-white rounded-2xl p-6 shadow-sm"
          >
            <img className='mb-6' src={t(item.icon)} alt="" />
            <h2 className='text-[20px] font-bold mb-4.5'>{t(item.titleKey)}</h2>
            <p className='text-[#6B7280] text-[20px] mb-7.5'>{t(item.descKey)}</p>
            <button className='text-[#6467F2]  flex justify-center items-center gap-2'><a className='text-[#6467F2] text-[18px] inline-flex' href="#">{t(item.linkKey)}</a><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkilsCard
