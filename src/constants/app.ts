const appHead = {
  defaultTitle: "Apatel Indonesia",
  titleTemplate: "Reserllerindo - %s",
  openGraph: {
    title: "Apatel Indonesia",
    description: "Apatel Indonesia Web App Platform",
    locale: "en_US",
    site_name: "Apatel Indonesia - Platform",
    url: "Apatel Indonesia - Platform",
  },
  additionalMetaTags: [
    {
      name: "description",
      content: "Apatel Indonesia Platform",
    },
    { name: "theme-color", content: "#b59916" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "msapplication-navbutton-color", content: "#b59916" },
    { name: "format-detection", content: "telephone=no" },
    { name: "HandheldFriendly", content: "true" },
    { name: "robots", content: "noindex,follow" },
  ],
};

const today = new Date();

export { appHead, today };
