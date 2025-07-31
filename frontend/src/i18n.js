import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    navbar: {
      home: "Home",
      menu: "Menu",
      mobileApp: "Mobile App",
      contactUs: "Contact Us",
      signIn: "Sign In",
    },
    banner: {
      title: "Order your favourite food here",
      descr:
        "Choose froma diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.",
      btn: "View Menu",
    },
    exploreMenu: {
      title: "Explore our Menu",
      descr:
        "Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.",
    },
  },

  hy: {
    navbar: {
      home: "Գլխավոր",
      menu: "Մենյու",
      mobileApp: "Բջջային հավելված",
      contactUs: "Կապ մեզ հետ",
      signIn: "Մուտք",
    },
    banner: {
      title: "Պատվիրեք ձեր սիրելի ուտեստը այստեղ",
      descr:
        "Ընտրեք բազմազան ճաշացանկից, որը ներառում է համեղ ուտեստների լայն տեսականի, որը պատրաստված է լավագույն բաղադրիչներով և խոհարարական փորձով: Մեր առաքելությունն է բավարարել ձեր ցանկությունները և բարձրացնել ձեր ճաշի փորձը՝ միաժամանակ մեկ համեղ կերակուրով:",
      btn: "Դիտել մենյուն",
    },
    exploreMenu: {
      title: "Բացահայտեք մեր ընտրացանկը",
      descr:
        "Ընտրեք բազմազան ճաշացանկից, որը ներառում է համեղ ուտեստների լայն տեսականի: Մեր առաքելությունն է բավարարել ձեր ցանկությունները և բարելավել ձեր ճաշի փորձը՝ միաժամանակ մեկ համեղ կերակուրով:",
    },
  },

  ru: {
    navbar: {
      home: "Главная",
      menu: "Меню",
      mobileApp: "Мобильное приложение",
      contactUs: "Связаться с нами",
      signIn: "Войти",
    },
    banner: {
      title: "Закажите здесь свою любимую еду",
      descr:
        "Выбирайте из разнообразного меню с восхитительным ассортиментом блюд, приготовленных из лучших ингредиентов с использованием кулинарного мастерства. Наша миссия — удовлетворить ваши потребности и поднять качество еды на новый уровень, предлагая одно восхитительное блюдо за другим.",
      btn: "Меню просмотра",
    },
    exploreMenu: {
      title: "Изучите наше меню",
      descr:
        "Выбирайте из разнообразного меню с восхитительным ассортиментом блюд. Наша миссия — удовлетворить ваши потребности и поднять качество еды на новый уровень, предлагая одно восхитительное блюдо за другим.",
    },
  },
};

i18n.use(initReactI18next).init({
  ns: ["navbar"],
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
