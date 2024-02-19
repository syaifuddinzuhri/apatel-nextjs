export const loginRoutes = "/login";
export const authRoutes = [loginRoutes, "/register"];
export const publicRoutes = [...authRoutes, "/", "/units", "/units/*", "/promo", "/about-us", "/partnership"];
export const privateRoutes = ["/profile"];
