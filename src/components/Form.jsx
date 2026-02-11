import React from 'react'
import { useTranslation } from 'react-i18next';

function Form() {
    const [t] = useTranslation()
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex mb-12 flex-col justify-center items-center text-center">
          <p className="text-[#6467F2] bg-[#6467F21A] py-2 mb-4 px-3.5 rounded-2xl">{t("contact.badge")}</p>
          <h2 className='text-[30px] md:text-[36px] font-bold mb-4.5'>{t("contact.title")}</h2>
          <p className='text-[#6B7280] text-[18px]'>{t("contact.description")}</p>
        </div>
        <form className='border-2 m-auto w-full max-w-lg p-8.5 rounded-2xl border-[#E5E7EB]'>
            <label className='flex flex-col mb-7.5'>
                <span className='mb-3'>{t("contact.form.name")}</span>
                <input required className='w-full p-2.5 rounded-[10px] border-[#E5E7EB] border-2 outline-0' placeholder={t("contact.form.namePlaceholder")} type="text" />
            </label>
            <label className='flex flex-col mb-7.5'>
                <span className='mb-3'>{t("contact.form.email")}</span>
                <input required className='w-full p-2.5 rounded-[10px] border-[#E5E7EB] border-2 outline-0' placeholder={t("contact.form.emailPlaceholder")} type="text" />
            </label>
            <label>
                <span>{t("contact.form.message")}</span>
                <textarea  required placeholder={t("contact.form.messagePlaceholder")} className='w-full mt-3 h-full min-h-25 rounded-[10px] border-[#E5E7EB] border-2 p-2.5 outline-0 '>

                </textarea>
            </label>
            <button className='cursor-pointer w-full text-white rounded-2xl mt-6 py-3.5 bg-linear-to-r from-[#6B64F1] to-[#AF49EB]' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Form
