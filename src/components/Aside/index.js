import Image from "next/image";
import { useTranslation } from "next-i18next";
import NavLink from "./NavLink";
import Translations from "../Translations/Translations";
import ContactLink from "../Resume/ContactLinks/ContactLink"
import ContactLinks from "../Resume/ContactLinks"

const Aside = () => {
    const { t } = useTranslation('common')
    return (
        <aside className="bg-gray-100 md:w-[220px] md:h-[500px] md:flex-shrink-0 md:mx-0 md:px-0 text-center rounded-xl p-4">
            <Translations />
            <div className="text-center text-violet md:text-base text-xs uppercase my-auto">
                <Image
                    src="/icons/logoviolet.png"
                    alt="logo"
                    height={50}
                    width={50}
                    className="items-center align-middle mx-auto"
                />
                <h1
                    className="bg-violet uppercase p-2 mt-2 text-white rounded shadow-lg border border-transparent hover:shadow-lg transition duration-500"
                >
                    Julieta Dirzieh
                </h1>
            </div>
            <nav className="flex flex-row md:flex-col items-center relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
                <ul className="flex flex-row md:flex-col flex-wrap items-center justify-center gap-5 mx-auto p-8">
                    {/*                     <NavLink link="/education">Education</NavLink> */}
                    {/*                     <NavLink link="/skills">Skills</NavLink> */}
                    <NavLink link="/2023">2023</NavLink>
                    <NavLink link="/2022">2022</NavLink>
                    <NavLink link="/2021">2021</NavLink>
                </ul>
            </nav>
            <ContactLinks>
                <ContactLink
                    link="https://www.linkedin.com/in/julieta-erika-dirzieh-59b50a159/"
                    src="/icons/linkedin.svg"
                />
                <ContactLink
                    link="mailto:julidirzieh@gmail.com"
                    src="/icons/mail.svg"
                />
                <ContactLink
                    link="https://api.whatsapp.com/send?phone=5491158125574"
                    src="/icons/telefono.svg"
                />
            </ContactLinks>
        </aside >
    );
};

export default Aside;
