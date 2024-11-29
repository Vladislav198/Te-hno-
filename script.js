const translations = {
    en: {
        title: "TechnoMax",
        home: "Home",
        products: "Products",
        about: "About Us",
        contact: "Contact",
        bannerTitle: "Affordable Computer Equipment!",
        bannerText: "Find the best equipment for work and entertainment in our store.",
        product1Title: "Acer Predator Helios Laptop",
        product1Desc: "Powerful laptop for work and entertainment.",
        product1Money:"Price: UAH 17,999",
        buyBtn: "Buy",
        product2Title: "HP desktop computer",
        product2Desc:"An ideal computer for office work.",
        product2Money:"Price: UAH 11,500",
        buyBtn: "Buy",
        product3Title: "Gamer's mechanical keyboard",
         product3Desc:"Professional keyboard for real gamers.",
         product3Money:"Price: UAH 2000",
         buyBtn: "Buy",
         product4Title: "Samsung tablet",
          product4Desc: "A convenient tablet for home use.",
          product4Money:"Price: UAH 9,999",
          buyBtn: "Buy",
          aboutTechno:" About TechnoMax",
          about1Techno:" TechnoMax is not just a store, but a place where technology becomes available to everyone. We work to make your shopping experience as comfortable and profitable as possible.",
          about2Techno:" Our team of experts is always ready to help you choose the best solution for work, study or entertainment.",
          about3Techno:" Why choose us?",
          list1:"✔ A large selection of products",
          list2:"✔ Quality guarantee",
          list3:"✔ Affordable prices",
          list4:"✔ Professional support",
          rights: "All rights reserved.",
          email:"Email: v.vladislav@gmail.com | Telephone: +380 685 136 277"

    },
        
       
    uk: {
        title: "TechnoMax",
        home: "Головна",
        products: "Продукція",
        about: "Про нас",
        contact: "Контакти",
        bannerTitle: "Вибір комп'ютерної техніки за доступними цінами!",
        bannerText: "У нашому магазині ви знайдете найкраще обладнання для роботи та розваг.",
        product1Title: "Ноутбук Acer \"Predator Helios\"",
        product1Desc: "Потужний ноутбук для роботи та розваг.",
        product1Money:"Ціна: 17,999 грн",
        buyBtn: "Купити",
        product2Title: "Настільний комп'ютер HP",
        product2Desc:"Ідеальний комп'ютер для офісної роботи.",
        product2Money:"Ціна: 11,500 грн",
        buyBtn: "Купити",
        product3Title: "Механічна клавіатура геймерська",
        product3Desc:"Професійна клавіатура для справжніх геймерів.",
        product3Money:"Ціна: 2000 грн",
        buyBtn: "Купити",
        product4Title: "Планшет Samsung",
        product4Desc:"Зручний планшет для домашнього користування.",
        product4Money:"Ціна: 9,999 грн",
        buyBtn: "Купити",
        aboutTechno:"Про TechnoMax",
        about1Techno:" TechnoMax — це не просто магазин, а місце, де технології стають доступними для кожного. Ми працюємо, щоб зробити ваш досвід покупки максимально комфортним і вигідним.",
        about2Techno:"Наша команда експертів завжди готова допомогти вам обрати найкраще рішення для роботи, навчання чи розваг.",
        about3Techno:" Чому обирають нас?",
        list1:"✔ Великий вибір продукції",
        list2:"✔ Гарантія якості",
        list3:"✔ Доступні ціни",
        list4:"✔ Професійна підтримка",
        rights: "Усі права захищені.",
        email:"Email: v.vladislav@gmail.com | Телефон: +380 685 136 277"
       
    }
};

document.getElementById('language-select').addEventListener('change', function() {
    const lang = this.value;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        el.innerText = translations[lang][key];
    });
});