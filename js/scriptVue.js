document.addEventListener("DOMContentLoaded", function () {
  const texts = {
      pt: {
          inicio: "Início",
          sobre: "Sobre",
          servicos: "Serviços",
          port: "Portfólio",
          contato: "Contato",
          hero1: "DESENVOLVENDO SOLUÇÕES DIGITAIS PARA O FUTURO",
          hero2: "Inovação, Design, Performance",
          descricaoHero: "Unindo criatividade e tecnologia para criar experiências que irão transformar e agregar valor ao seu negócio!",
          saibaMais: "Saiba mais",
          aboutMeTitle: "Sobre mim",
          textMe1: "Sou um desenvolvedor de software especializado na criação de produtos digitais únicos, personalizados e atrativos.",
          textMe2: "Projeto sites e sistemas que otimizam operações empresariais, transformando conceitos e necessidades em soluções de alto desempenho que se destacam no mercado.",
          conheca: "Conheça meu trabalho",
          servicosPage: "Serviços",
          textService: "Soluções digitais inovadoras que potencializam o crescimento do seu negócio.",
          intuitivo: "Design Intuitivo",
          textoIntuitivo: "Criação de interfaces amigáveis e funcionais, focadas na melhor experiência do usuário.",
          seo: "SEO",
          textoSeo: "Estratégias para otimizar seu posicionamento nos motores de busca e atrair o público certo.",
          monitoramento: "Monitoramento e Atualização",
          textoMonitoramento: "Acompanhamento contínuo para garantir que seu site permaneça sempre disponível e atualizado.",
          responsivo: "Design Responsivo",
          textoResponsivo: "Layouts que se ajustam perfeitamente a qualquer dispositivo, oferecendo uma navegação fluida.",
          banco: "Gestão de Banco de Dados",
          textoBanco: "Desenvolvimento de soluções de banco de dados seguras, escaláveis e de alto desempenho.",
          tituloPortifolio: "Portfólio",
          meetPortifolio: "Conheça alguns dos meus projetos.",
          entreEmContato: "Entre em contato",
          broad: "Desenvolvedor apaixonado por inovação, que tem o objetivo de criar produtos que impulsionam negócios através da tecnologia.",
          meEncontre: "Entre em contato",
          formularioContato: "Pronto para iniciar seu projeto?\nEntre em contato para transformar suas ideias em realidade",
      },
      eng: {
          inicio: "Home",
          sobre: "About",
          servicos: "Services",
          port: "Portfolio",
          contato: "Contact",
          hero1: "DEVELOPING DIGITAL SOLUTIONS FOR THE FUTURE",
          hero2: "Innovation, Design, Performance",
          descricaoHero: "Combining creativity and technology to create experiences that will transform and add value to your business!",
          saibaMais: "Learn more",
          aboutMeTitle: "About me",
          textMe1: "I am a software developer specializing in creating unique, customized, and attractive digital products.",
          textMe2: "I design websites and systems that optimize business operations, transforming concepts and needs into high-performance solutions that stand out in the market.",
          conheca: "Check out my work",
          servicosPage: "Services",
          textService: "Innovative digital solutions that boost your business growth.",
          intuitivo: "Intuitive Design",
          textoIntuitivo: "Creation of user-friendly and functional interfaces, focused on the best user experience.",
          seo: "SEO",
          textoSeo: "Strategies to optimize your search engine ranking and attract the right audience.",
          monitoramento: "Monitoring and Updating",
          textoMonitoramento: "Continuous monitoring to ensure your site remains available and up to date.",
          responsivo: "Responsive Design",
          textoResponsivo: "Layouts that adapt perfectly to any device, offering a smooth navigation experience.",
          banco: "Database Management",
          textoBanco: "Development of secure, scalable, and high-performance database solutions.",
          tituloPortifolio: "Portfolio",
          meetPortifolio: "Check out some of my projects.",
          entreEmContato: "Get in touch",
          broad: "A developer passionate about innovation, aiming to create products that drive business through technology.",
          meEncontre: "Contact me",
          formularioContato: "Ready to start your project?\nGet in touch to turn your ideas into reality",
      }
  };

  function setLanguage(lang) {
      document.querySelectorAll("[id]").forEach((element) => {
          if (texts[lang][element.id]) {
              element.innerText = texts[lang][element.id];
          }
      });
  }

  const languageSelector = document.getElementById("toggleLanguage");
  const hero2 = document.querySelector('#hero2')
  const heroEnglish = document.querySelector('#heroEnglish')
  const nome = document.querySelector('#name')
  const msg = document.querySelector('#message')
  const submit = document.querySelector('#submit')
  languageSelector.addEventListener("change", function () {
      if(languageSelector.value == 'eng') {
        hero2.style.display = 'none'
        heroEnglish.style.display = 'block'
        nome.placeholder = 'Name'
        msg.placeholder = 'Messege'
        submit.textContent = 'Send'
      } else if(languageSelector.value == 'pt') {
        hero2.style.display = 'block'
        heroEnglish.style.display = 'none'
        nome.placeholder = 'Nome'
        msg.placeholder = 'Mensagem'
        submit.textContent = 'Enviar'
      }
      setLanguage(this.value);
  });

  // Define o idioma padrão como PT
  setLanguage("pt");
});
