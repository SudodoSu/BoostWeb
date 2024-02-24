
type LinksData = {
    title: string;
    path: string;
  };

  type DataObject = {
    NavData: LinksData[];
    Services: LinksData[];
  };

 export const NavigationLinks: DataObject = {
    NavData: [
        {title: "Home", path: "/#home"},
        {title: "About", path: "/#about"},
        {title: "References", path: "/#references"},
        {title: "Faq", path: "/#faq"},
      ],
    Services: [
        {title: "Design and Development", path: "/services/design&development"},
        {title: "Search Engine Optimization (SEO)", path: "/services/seo"},
        {title: "Image Processing and Gallery", path: "/services/image-gallery"},
        {title: "Google Maps Integratoin", path: "/services/map-integration"},
        {title: "Business solutions", path: "/services/business-solutions"},
    ]
  };