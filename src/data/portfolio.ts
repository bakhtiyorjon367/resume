import type { PortfolioProject } from "../types/resume";

const chuncheon = "/images/ChuncheonCafe";
const optom = "/images/Optomkoreya";
const rag = "/images/RAG";
const resells = "/images/ReSells";
const sabah = "/images/SabahSell";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "chuncheon-cafe",
    name: { en: "ChuncheonCafe", ko: "ChuncheonCafe" },
    domain: "https://chuncheon.uz",
    status: "live",
    description: {
      en: "Progressive Web App with a NestJS and MongoDB backend and a React/Ionic frontend. Admins manage restaurants via CRUD; each restaurant manages products, categories, profile info, working hours, and featured items (suggested/new). Order alerts are delivered through Telegram. Users browse available restaurants, open menus by category, like and comment on dishes, and order from the cart. Per-restaurant wishlists, reviews, addresses, and account settings are supported on the user side.",
      ko: "NestJS·MongoDB 백엔드와 React/Ionic 프론트엔드로 구성된 PWA입니다. 관리자는 레스토랑을 CRUD하고, 레스토랑은 제품·카테고리·영업 정보·근무 시간·추천/신메뉴를 관리하며 텔레그램으로 주문 알림을 받습니다. 사용자는 레스토랑 목록에서 매장을 선택해 메뉴를 보고, 상세에서 좋아요·댓글을 남기며 장바구니로 주문합니다. 매장별 위시리스트, 리뷰, 주소, 계정 관리 기능을 제공합니다.",
    },
    techStack: ["NestJS", "MongoDB", "React", "Ionic", "PWA", "Telegram"],
    images: [
      `${chuncheon}/LandingPage.PNG`,
      `${chuncheon}/UserMainPage.PNG`,
      `${chuncheon}/RestaurantProfile.PNG`,
      `${chuncheon}/ProductCategories.PNG`,
      `${chuncheon}/ProductDetails.PNG`,
      `${chuncheon}/AllProducts.PNG`,
      `${chuncheon}/UserFavourites.PNG`,
      `${chuncheon}/AdminPage.PNG`,
    ],
  },
  {
    id: "optomkoreya",
    name: { en: "Optomkoreya", ko: "Optomkoreya" },
    domain: "https://optomkoreya.uz",
    status: "live",
    description: {
      en: "Wholesale e-commerce platform for browsing product catalogs by category, viewing detailed listings, and managing user profiles. Includes a full admin area for inventory, product editing, and panel-based operations—built for scalable B2B product discovery and back-office control.",
      ko: "카테고리별 상품 탐색, 상세 페이지, 사용자 프로필을 제공하는 도매(B2B) 전자상거래 플랫폼입니다. 재고·상품 수정·운영을 위한 관리자 패널을 포함해, 도매 상품 검색과 백오피스 관리에 맞춘 구조로 구현했습니다.",
    },
    techStack: ["NestJS", "React", "MongoDB", "REST API"],
    images: [
      `${optom}/MainPage.PNG`,
      `${optom}/CategoryPage.PNG`,
      `${optom}/ProductDetails.PNG`,
      `${optom}/Profile.PNG`,
      `${optom}/AdminPanel.PNG`,
      `${optom}/AdminInventory.PNG`,
      `${optom}/AdminEdit.PNG`,
    ],
  },
  {
    id: "rag",
    name: { en: "RAG", ko: "RAG" },
    status: "offline",
    description: {
      en: "Retrieval-Augmented Generation platform with document ingestion, top-chunk search, and LLM-based chat. User login and per-user document isolation are handled by Supabase. Ingestion supports PDF (PyMuPDF), Word (python-docx), and HTML (BeautifulSoup4). Queries are embedded and searched by keyword and vector in Supabase; results are reranked with FlashRank, then passed to the LLM with the query to produce natural-language answers from chunks.",
      ko: "문서 수집, 상위 청크 검색, LLM 채팅 세 단계로 구성된 RAG 플랫폼입니다. Supabase로 로그인 및 사용자별 문서 분리를 처리합니다. PDF(PyMuPDF), Word(python-docx), HTML(BeautifulSoup4) 수집을 지원하며, 쿼리 임베딩 후 Supabase에서 키워드·벡터 하이브리드 검색을 수행하고 FlashRank로 재순위한 뒤 LLM에 전달해 청크 기반 자연어 응답을 생성합니다.",
    },
    techStack: [
      "FastAPI",
      "Uvicorn",
      "Supabase",
      "FastEmbed",
      "FlashRank",
      "python-mecab-ko",
    ],
    images: [
      `${rag}/RAGArchitecture.png`,
      `${rag}/RAGDiagram.png`,
      `${rag}/photo_2026-05-30 22.19.29.jpeg`,
      `${rag}/photo_2026-05-30 22.19.32.jpeg`,
      `${rag}/photo_2026-05-30 22.19.38.jpeg`,
      `${rag}/photo_2026-05-30 22.19.42.jpeg`,
      `${rag}/photo_2026-05-30 22.19.46.jpeg`,
    ],
  },
  {
    id: "resells",
    name: { en: "ReSells", ko: "ReSells" },
    status: "offline",
    description: {
      en: "Second-hand marketplace — resells.uz",
      ko: "중고 거래 플랫폼 — resells.uz",
    },
    techStack: [
      "NestJS",
      "GraphQL",
      "MongoDB",
      "Next.js",
      "WebSocket",
      "i18next",
    ],
    images: [],
    sections: [
      {
        id: "intro",
        description: {
          en: "Resells.uz is a web-based platform designed for buying and selling second-hand products. The project is built using the MVC (Model-View-Controller) architecture to ensure a clean and organized code structure. The backend is powered by the NestJS framework, featuring a GraphQL API for seamless data handling, while MongoDB is used for efficient and scalable database management. The frontend is developed with Next.js, delivering a smooth and responsive user experience. Resells.uz allows users to easily list products for sale and browse available items to purchase, providing a user-friendly interface and reliable functionality for online transactions.",
          ko: "Resells.uz는 중고 제품을 사고팔 수 있도록 설계된 웹 기반 플랫폼입니다. 깔끔하고 조직적인 코드 구조를 위해 MVC(모델-뷰-컨트롤러) 아키텍처로 구축했습니다. 백엔드는 NestJS 기반이며 GraphQL API로 데이터를 처리하고, MongoDB로 확장 가능한 데이터베이스를 운영합니다. 프론트엔드는 Next.js로 개발되어 매끄럽고 반응성 있는 사용자 경험을 제공합니다. 사용자는 판매할 제품을 쉽게 등록하고 구매할 항목을 탐색할 수 있습니다.",
        },
        images: [`${resells}/MainPage1.png`],
      },
      {
        id: "erd",
        title: { en: "ERD", ko: "ERD" },
        description: {
          en: "Entity-Relationship Diagram (ERD) representing the structure of a database. The ERD contains multiple entities (tables), each with attributes (fields) and relationships connecting them.",
          ko: "데이터베이스 구조를 나타내는 엔터티-관계 다이어그램(ERD)입니다. ERD는 여러 엔터티(테이블)로 구성되며, 각 엔터티는 속성(필드)과 이를 연결하는 관계를 포함합니다.",
        },
        images: [`${resells}/ERModeling2.png`],
      },
      {
        id: "product",
        title: { en: "Product page", ko: "제품 페이지" },
        layout: "pair",
        description: {
          en: "The Product Page on Resells.uz features an advanced filter for searching products, allowing users to refine results based on specific criteria, such as location or category. Each product listing includes a link to a Product Detail Page, where users can view comprehensive information about the product, including its specifications, pricing, and details about the seller.",
          ko: "Resells.uz의 제품 페이지는 고급 필터 기능을 제공하여 사용자가 위치나 카테고리와 같은 특정 기준에 따라 검색 결과를 세부적으로 조정할 수 있습니다. 각 제품 목록에는 제품의 사양, 가격, 판매자 정보 등 종합적인 정보를 볼 수 있는 제품 상세 페이지로 연결되는 링크가 포함되어 있습니다.",
        },
        images: [
          `${resells}/ProductsPage3.png`,
          `${resells}/ProductDetailsPage4.png`,
        ],
      },
      {
        id: "member",
        title: { en: "Member page", ko: "회원 페이지" },
        description: {
          en: "The Member Page on Resells.uz (resells.uz) allows logged-in users to manage their account with ease. They can add new products, view and manage their favorite products, track their followers, and update their personal information to keep their profile up to date.",
          ko: "회원 페이지(resells.uz)는 로그인한 사용자가 자신의 계정을 쉽게 관리할 수 있도록 합니다. 사용자는 새로운 제품을 추가하고, 즐겨찾기한 제품을 보고 관리하며, 팔로워를 추적하고, 개인 정보를 업데이트하여 프로필을 최신 상태로 유지할 수 있습니다.",
        },
        images: [`${resells}/MemberPage.png`],
      },
      {
        id: "blog",
        title: { en: "Blog page", ko: "블로그 페이지" },
        description: {
          en: "The Blog Page on Resells.uz is a space where users can share their thoughts and engage with the community. The website utilizes React-i18next for translation, allowing users to effortlessly switch between various languages directly from the user interface. The language selector is conveniently located in the navigation bar for quick access.",
          ko: "Resells.uz의 블로그 페이지는 사용자가 자신의 생각을 공유하고 커뮤니티와 소통할 수 있는 공간입니다. React-i18next를 사용하여 사용자 인터페이스에서 여러 언어 간에 손쉽게 전환할 수 있으며, 언어 선택기는 내비게이션 바에 편리하게 위치해 있습니다.",
        },
        images: [`${resells}/BlogPage.png`],
      },
      {
        id: "admin",
        title: { en: "Admin page", ko: "관리자 페이지" },
        description: {
          en: "The Admin Page on Resells.uz offers a robust management system, allowing administrators to oversee and control users, products, and articles. Additionally, it includes a CS Center where admins can create and manage FAQs and notices, ensuring effective communication and support for the platform's users.",
          ko: "Resells.uz의 관리자 페이지는 강력한 관리 시스템을 제공하여 관리자가 사용자, 제품, 글을 감독하고 제어할 수 있게 합니다. 또한 FAQ와 공지를 생성·관리할 수 있는 고객 서비스(CS) 센터가 포함되어 플랫폼 사용자와의 효과적인 소통과 지원을 보장합니다.",
        },
        images: [`${resells}/AdminPanel.png`],
      },
    ],
  },
  {
    id: "sabah-sell",
    name: { en: "SabahSell", ko: "SabahSell" },
    status: "offline",
    description: {
      en: "Cosmetics e-commerce — sabahsell.uz",
      ko: "화장품 전자상거래 — sabahsell.uz",
    },
    techStack: [
      "React",
      "MUI",
      "Redux",
      "Node.js",
      "Mongoose",
      "REST API",
      "EJS",
      "NGINX",
      "PM2",
    ],
    images: [],
    sections: [
      {
        id: "intro",
        description: {
          en: "Sabahsell.uz is an e-commerce platform dedicated to cosmetics, built using the MVC (Model-View-Controller) architecture for efficient and scalable development. The website offers a wide range of beauty products, allowing users to browse, purchase, and explore various cosmetics from trusted brands. With easy search feature, product category filter, and detailed descriptions, sabahsell.uz ensures that users can find the perfect cosmetics to suit their needs with ease.",
          ko: "sabahsell.uz는 효율적이고 확장 가능한 개발을 위해 MVC(모델-뷰-컨트롤러) 아키텍처로 구축된 화장품 전문 전자상거래 플랫폼입니다. 다양한 뷰티 제품을 제공하며, 사용자는 신뢰할 수 있는 브랜드의 화장품을 검색·구매·탐색할 수 있습니다. 검색 기능, 제품 카테고리 필터, 상세한 설명을 통해 필요에 맞는 화장품을 쉽게 찾을 수 있습니다.",
        },
        images: [`${sabah}/MainPage.png`, `${sabah}/ProductDetails.png`],
        layout: "pair",
      },
      {
        id: "erd",
        title: { en: "ERD", ko: "ERD" },
        description: {
          en: "Entity-Relationship Diagram (ERD) representing the structure of a database. The ERD contains multiple entities (tables), each with attributes (fields) and relationships connecting them.",
          ko: "데이터베이스 구조를 나타내는 엔터티-관계 다이어그램(ERD)입니다. ERD는 여러 엔터티(테이블)를 포함하며, 각 엔터티는 속성(필드)과 이를 연결하는 관계를 가집니다.",
        },
        images: [`${sabah}/SabahERModel.png`],
      },
      {
        id: "admin",
        title: { en: "Admin page", ko: "관리자 페이지" },
        description: {
          en: "The Admin Page of sabahsell.uz is developed using EJS (Embedded JavaScript), providing a dynamic and user-friendly interface for administrators. From the admin dashboard, administrators have the ability to control and change the status of users and products, ensuring effective moderation and management. Admins can easily create new products, and assign sales or discounts to specific products to enhance the shopping experience. This functionality empowers the admin to efficiently manage user accounts, product listings, and promotional activities, keeping the platform organized and up-to-date.",
          ko: "sabahsell.uz의 관리자 페이지는 EJS(Embedded JavaScript)로 개발되어 관리자가 직관적이고 동적인 인터페이스로 플랫폼을 효율적으로 관리할 수 있습니다. 관리자 대시보드에서 사용자와 제품의 상태를 제어·변경할 수 있으며, 새 제품을 생성하고 특정 제품에 판매나 할인을 부여할 수 있습니다. 사용자 계정, 제품 목록, 프로모션 활동을 체계적으로 유지할 수 있습니다.",
        },
        images: [`${sabah}/AdminPage.png`],
      },
    ],
  },
];
