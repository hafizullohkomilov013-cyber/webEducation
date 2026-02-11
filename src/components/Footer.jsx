import Link from "../assets/img/Link.svg"
import { useTranslation } from "react-i18next";

function Footer() {
    const [t] = useTranslation()
  return (
    <section className="bg-[#F8F9FA] py-12">
      <div className="container">
        <div>
          <img src={Link} alt="" />
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </section>
  );
}

export default Footer
