import React from 'react'
import { useTranslation } from 'react-i18next';

function Form() {
    let [t] = useTranslation()
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex mb-12 flex-col justify-center items-center text-center">
          <p className="text-[#6467F2] bg-[#6467F21A] py-2 mb-4 px-3.5 rounded-2xl">{t("contact.badge")}</p>
          <h2 className='text-[36px] font-bold mb-4.5'>{t("contact.title")}</h2>
          <p className='text-[#6B7280] text-[18px]'>{t("contact.description")}</p>
        </div>
        <form>
            <label>
                <span>{t("form.name")}</span>
                <input type="text" />
            </label>
            <label>
                <input type="email" />
            </label>
            <label>
                <textarea>

                </textarea>
            </label>
        </form>
      </div>
    </section>
  );
}

export default Form
