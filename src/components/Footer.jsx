import Link from "../assets/img/Link.svg"
import { useTranslation } from "react-i18next";
import twitter from "../assets/img/Link-Twitter.svg"
import gitHup from "../assets/img/Link-GitHub.svg"
import linkedIn from "../assets/img/LinkedIn.svg"

function Footer() {
    const [t] = useTranslation()
  return (
    <section className="bg-[#F8F9FA] py-12">
      <div className="container  flex flex-col md:flex-row text-center justify-between items-center gap-8">
        <div className="flex flex-col  justify-center md:justify-start items-center md:items-start">
          <img src={Link} alt="" />
          <p className="text[#6B7280] mt-3">{t("footer.copyright")}</p>
        </div>
        <div className="flex gap-6 text-[#6B7280]">
          <h2>{t("footer.privacy")}</h2>
          <h2>{t("footer.terms")}</h2>
        </div>
        <div className="flex gap-4">
          <img src={gitHup} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedIn} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Footer
