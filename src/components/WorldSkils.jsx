import React from 'react'
import { useTranslation } from 'react-i18next'

function WorldSkils() {
    let{t} = useTranslation()
  return (
    <section className='py-24'>
      <div className='container'>
        <div>
            <p>{t("skills.badge")}</p>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default WorldSkils
