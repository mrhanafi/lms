const BE_URL = "https://lmsbe.hanafirahman.com/api";

export const REGISTER_USER = BE_URL + "/auth/local/register";
export const LOGIN_USER = BE_URL + "/auth/local";
export const GET_COURSES = BE_URL + "/courses?populate=*";
export const GET_CATEGORIES = BE_URL + "/categories?fields=category_name";
export const GET_COURSES_BY_CATEGORY =
  BE_URL +
  "/courses?populate=*&filters[category_name][category_name][$contains]=";
export const GET_COURSES_BY_SEARCH =
  BE_URL + "/courses?populate=*&filters[title][$contains]=";
