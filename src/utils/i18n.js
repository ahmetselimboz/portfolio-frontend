// src/i18n.js
import { createI18n } from "vue-i18n";

// Çeviri metinleri
const messages = {
  en: {
    Home: "Home",
    Work: "Work",
    Blog: "Blog",
    About: "About",
    Contact: "Contact",
    Iam: "I'm a",
    Hello: "Hi there, I'm",
    Portfolio: "Portfolio",
    Check_My_Works: "Check My Works",
    Check_My_Works_Desc:
      "You can explore the projects I have developed. Each of them is a special work that reflects my talents and creativity and has been a learning and discovery experience for me.",
    See_All_Works: "See all works",
    Jobs: "Jobs",
    Look_At_My_Work_Experience: "Look At My Work Experience",
    Look_At_My_Work_Experience_Desc: "  You can find the experiences I have gained throughout my career. Each experience has provided new learning opportunities and made me a more well-rounded developer.",
    More_Info: "More Info",
    See_All_Experiences: "See all experiences",
    Blogs: "Blogs",
    Latest_News: "Latest News",
    Latest_News_Desc: "This section is a window into my adventures and solutions in the world of code. In each post, I share my experiences from my software development process and try to guide my readers through technical issues.",
    See_All_Posts: "See all posts",
    Work_Desc:"You can find information about the projects I have realized, the work experience I have gained, the skills I have developed and the thoughts of my valuable references.",
    Projects: "Projects",
    Experiences: "Experiences",
    Skills: "Skills",
    Date: "Date",
    Technologies: "Technologies",
    Link: "Link",
    Blog_Desc:"You can find the posts where I share my passion for software and technology. In my posts, I share with you the innovations in the industry, my experiences and my insights into technology.",
    Releated_Posts:"Releated Posts",
    Contact_Desc:"If you have any questions or want to work together, you can contact to me.",
    Name:"Name",
    Email:"Email",
    Message:"Message",
    Send_Message:"Send Message",
    Got_Message: "Got Your Message",
    Subscribe_Email: "Your Email Adress...",
    Subscribe_Button: "Subscribe",
    Subscribe_Desc: "To be informed about my posts;",
    Title_Modal: "Already Subscribe",
    Subs_Title_Modal:"Thanks"
  },
  tr: {
    Home: "Ana sayfa",
    Work: "Çalışmalar",
    Blog: "Bloglar",
    About: "Hakkımda",
    Contact: "İletişim",
    Iam: "Kısaca;",
    Hello: "Merhaba, ben",
    Portfolio: "Portfolyo",
    Check_My_Works: "Çalışmalarıma Göz Atın",
    Check_My_Works_Desc:
      "Geliştirdiğim projeler, hem yeteneklerimi hem de yaratıcılığımı sergileyen, aynı zamanda öğrendiğim ve kendimi keşfettiğim heyecan verici yolculuklar oldu.",
    See_All_Works: "Tümüne Göz At",
    Jobs: "İş",
    Look_At_My_Work_Experience: "İş Deneyimlerime Göz Atın",
    Look_At_My_Work_Experience_Desc: "Kariyerim boyunca edindiğim tecrübeler, benim için değerli hazinelerdir. Her biri, yeni bilgiler öğrenmeme ve çok yönlü bir yazılım geliştirici olmama imkan tanımıştır.",
    More_Info: "Daha Fazla",
    See_All_Experiences: "Tümüne Göz At",
    Blogs: "Bloglar",
    Latest_News: "Son Paylaşımlarım",
    Latest_News_Desc: "Bu bölüm, yazılım geliştirme sürecinde öğrendiklerimi sizinle paylaştığım bir platform. Her gönderide, yazılım geliştirme yolculuğumdan edindiğim tecrübeleri paylaşarak teknik konularda size rehberlik etmeye çalışacağım.",
    See_All_Posts: "Tümüne Göz At",
    Work_Desc:"Bu sayfada, gerçekleştirdiğim projeleri, kazandığım iş deneyimlerini ve edindiğim becerileri bulabilirsiniz.",
    Projects: "Projelerim",
    Experiences: "Deneyimlerim",
    Skills: "Yeteneklerim",
    Date: "Tarih",
    Technologies: "Teknolojiler",
    Link: "Link",
    Blog_Desc:" Bu sayfada, yazılıma ve teknolojiye olan tutkumu sizlerle paylaşıyorum. Sektördeki yenilikleri, tecrübelerimi ve teknolojiye dair derinlemesine bakış açımı keşfedebilirsiniz.",
    Releated_Posts:"Diğer Paylaşımlar",
    Contact_Desc:"Herhangi bir sorunuz varsa veya birlikte çalışmak istiyorsanız benimle iletişime geçebilirsiniz.",
    Name:"Ad-Soyad",
    Email:"Email",
    Message:"Mesaj",
    Send_Message:"Mesaj Gönder",
    Got_Message: "Mesajınızı Aldım",
    Subscribe_Email: "Email Adresiniz...",
    Subscribe_Button: "Abone Ol",
    Subscribe_Desc: "Paylaşımlarımdan haberdar olmak için;",
    Title_Modal: "Zaten Abonesiniz",
    Subs_Title_Modal:"Teşekkürler"
  },
};

const i18n = createI18n({
  locale: "en", // Varsayılan dil
  fallbackLocale: "en",
  messages,
});

export default i18n;
