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
            className="w-full min-w-50 bg-white rounded-2xl p-6 shadow-sm"
          >
            <img src={t(item.icon)} alt="" />
            <h2>{t(item.titleKey)}</h2>
            <p>{t(item.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkilsCard
