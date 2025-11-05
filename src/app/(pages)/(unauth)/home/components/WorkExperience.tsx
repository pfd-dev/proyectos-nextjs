// Hooks
import { useThemeController } from "@/libs/hooks/useThemeController";
// Components
import { ModalPortal } from "@/components/customized";
// Lang
import dataLeng from "@/lang/lang-es.json";

import HTMLIcon from "@/utils/icons/html-icon.png";
import CSSIcon from "@/utils/icons/css-icon.png";
import JAVASCRIPTIcon from "@/utils/icons/javascript-icon.png";
import MYSQLIcon from "@/utils/icons/mysql-icon.png";
import PHPIcon from "@/utils/icons/php-icon.png";
import CSHARPIcon from "@/utils/icons/c-sharp-icon.png";
import REACTIcon from "@/utils/icons/react-icon.png";
import ANGULARIcon from "@/utils/icons/angular-icon.png";
import MONGODBIcon from "@/utils/icons/mongodb-icon.png";

export function WorkExperience() {
  const { tones, UI_COLORS } = useThemeController();

  return (
    <section className={`${UI_COLORS.container} rounded-xl p-6 space-y-6 overflow-hidden w-full`}>
      <header>
        <h2 className="text-3xl font-bold text-center uppercase">{dataLeng.HomePage.workExperience.overview.title}</h2>
        <h3 className="text-center">{dataLeng.HomePage.workExperience.overview.subtitle}</h3>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={HTMLIcon.src} alt="HTML" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={CSSIcon.src} alt="CSS" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={JAVASCRIPTIcon.src} alt="JAVASCRIPT" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={MYSQLIcon.src} alt="MySQL" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={PHPIcon.src} alt="PHP" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={MONGODBIcon.src} alt="MONGO DB" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={REACTIcon.src} alt="REACT JS" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={CSHARPIcon.src} alt="C#" width={100} height={100} />
        </figure>

        <figure className="bg-stone-100 p-2 rounded-xl flex items-center justify-center">
          <img src={ANGULARIcon.src} alt="ANGULAR JS" width={100} height={100} />
        </figure>
      </div>
    </section>
  );
}
