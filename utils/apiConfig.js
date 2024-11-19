const BE_URL = "https://lmsbe.hanafirahman.com/api";

export const REGISTER_USER = BE_URL + "/auth/local/register";
export const LOGIN_USER = BE_URL + "/auth/local";
export const GET_COURSE_USER =
  BE_URL + "/course-users?populate=courses&filter[users][$eq]=";
export const AUTH_USER = BE_URL + "/users/me?populate=courses";
export const GET_COURSES = BE_URL + "/courses?populate=*";
export const GET_COURSE_BY_ID = BE_URL + "/courses/";
export const GET_CATEGORIES = BE_URL + "/categories?fields=category_name";
export const GET_COURSES_BY_CATEGORY =
  BE_URL +
  "/courses?populate=*&filters[category_name][category_name][$contains]=";
export const GET_COURSES_BY_SEARCH =
  BE_URL + "/courses?populate=*&filters[title][$contains]=";

export const SECRET_KEY =
  "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";
