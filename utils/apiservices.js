import axios from "axios";
import {
  AUTH_USER,
  GET_CATEGORIES,
  GET_COURSE_BY_ID,
  GET_COURSE_USER,
  GET_COURSES,
  GET_COURSES_BY_CATEGORY,
  GET_COURSES_BY_SEARCH,
  GET_ME,
  TYPEFORM_KEY,
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

export const getCourseById = async (documentId) => {
  const token = await services.getData("token");
  const AuthStr = "Bearer " + token;
  const options = {
    method: "GET",
    url: GET_COURSE_BY_ID + documentId + "?populate=*",
    headers: {
      Accept: "application/json",
      Authorization: AuthStr,
    },
  };

  return await axios.request(options);
};

export const getCourseUser = async (userId) => {
  const token = await services.getData("token");
  const AuthStr = "Bearer " + token;
  const options = {
    method: "GET",
    url: GET_COURSE_USER + userId,
    headers: {
      Accept: "application/json",
      Authorization: AuthStr,
    },
  };

  return await axios.request(options);
};

export const getAuthUser = async () => {
  const token = await services.getData("token");
  const AuthStr = "Bearer " + token;
  const options = {
    method: "GET",
    url: AUTH_USER,
    headers: {
      Accept: "application/json",
      Authorization: AuthStr,
    },
  };

  return await axios.request(options);
};

export const getTypeformQuestions = async () => {
  try {
    const formID = "UaTNT6PC"; // Replace with your Typeform form ID
    const apiKey = TYPEFORM_KEY; // Replace with your Typeform API key

    const response = await axios.get(
      `https://api.typeform.com/forms/${formID}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const questions = response.data.fields;
    // console.log(questions); // Logs all questions
    return questions;

    // You can then use this data to display in your React Native app
  } catch (error) {
    console.error("Error fetching Typeform questions:", error);
  }
};
