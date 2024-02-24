
type LocationData = {
    question: string;
    answer: string;
  };

  type DataObject = {
    questions: LocationData[];
    // You can add more arrays or properties if needed
  };

 export const FaqQuestions: DataObject = {
    questions: [
        { question: "How much does it cost to create a website?",
        answer: "The cost of creating a website can vary significantly depending on various factors such as the complexity of the design, the features and functionalities required.", },
        { question: "How long does it take to create a website?",
        answer: "The time it takes to create a website can vary widely depending on several factors such as the complexity of the design, the number of pages, the functionality required, the availability of content, and the responsiveness of the client in providing feedback and approvals. On average, the creation of a simple website can take from a few days to a few weeks, while more complex projects can take even longer.", },
        { question: "What information and materials do I need to prepare?",
        answer: `<b>Cilj web stranice:</b> Koje je svrhe web stranice i što se želi postići putem nje.<br/><br/>
        <b>Ciljna publika:</b> Koja je ciljna publika web stranice i koje su njihove potrebe.<br/><br/>
        
        
        <b>Sadržaj:</b> Koji sadržaj će biti prikazan na stranici, uključujući tekstove, slike i video sadržaj.<br/><br/>
        
        
        <b>Funkcionalnosti:</b> Koje funkcionalnosti su potrebne na stranici, poput formulara za kontakt, e-trgovine ili integracije s društvenim mrežama.
        <br/><br/>
        
        <b>Dizajn:</b> Opći stil i boje koji će se koristiti na stranici, kao i druge specifične zahtjeve za dizajn.
        <br/><br/>
        
        <b>Budžet:</b> Raspoloživi budžet za izradu stranice.
        <br/><br/>
        
        <b>Rokovi:</b> Rokovi za završetak projekta.<br/><br/>`, },
        { question: "Will I get support and maintenance after the website is built?",
        answer: "Yes, we provide support and maintenance after the website is built. Depending on the needs of the modification, you can work as needed. And billing can be one-time or prepaid.", },
        { question: "What is a domain and how to buy/get a domain?",
        answer: "A domain is a unique name used to identify a website on the Internet.<br/>You can buy a domain from various servers and we can help you with that.", },
    ],
  };