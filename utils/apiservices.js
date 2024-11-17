import axios from "axios";
import {
  GET_CATEGORIES,
  GET_COURSES,
  GET_COURSES_BY_CATEGORY,
  GET_COURSES_BY_SEARCH,
} from "./apiConfig";
import services from "./services";

export const getCourses = async () => {
  const token = await services.getData("token");
  const AuthStr = "Bearer " + token;
  const options = {
    method: "GET",
    url: GET_COURSES,
    headers: {
      Accept: "application/json",
      Authorization: AuthStr,
    },
  };

  return await axios.request(options);
};

export const getCategories = async () => {
  const token = await services.getData("token");
  const AuthStr = "Bearer " + token;
  const options = {
    method: "GET",
    url: GET_CATEGORIES,
    headers: {
      Accept: "application/json",
      Authorization: AuthStr,
    },
  };

  return await axios.request(options);
};

export const getCoursesByCategory = async (category_name) => {
  const token = await services.getData("token");
  const AuthStr = "Bearer " + token;
  const options = {
    method: "GET",
    url: GET_COURSES_BY_CATEGORY + category_name,
    headers: {
      Accept: "application/json",
      Authorization: AuthStr,
    },
  };

  return await axios.request(options);
};

export const getCoursesBySearch = async (search) => {
  const token = await services.getData("token");
  const AuthStr = "Bearer " + token;
  const options = {
    method: "GET",
    url: GET_COURSES_BY_SEARCH + search,
    headers: {
      Accept: "application/json",
      Authorization: AuthStr,
    },
  };

  return await axios.request(options);
};
