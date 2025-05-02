// import moment from "moment";
// import AppConstants from "../settings/constants";

// export function parseJwt(token) {
//   const base64Url = token.split(".")[1];
//   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   const jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split("")
//       .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//       .join("")
//   );

//   return JSON.parse(jsonPayload);
// }

// export function isEmptyObject(obj) {
//   return !obj || (Object.keys(obj).length === 0 && obj.constructor === Object);
// }

// export function imageExists(image_url) {
//   const http = new XMLHttpRequest();

//   try {
//     http.open("HEAD", image_url, false);
//     http.send();
//   } catch (e) {
//     http.status = 404;
//   }

//   return http.status !== 404;
// }

// export function validName(name) {
//   const onlyLatinRegex = new RegExp(
//     "[a-zA-Z\\s\\d`~!@#$%^&*()+=\\-\\[\\]\\{\\}\\\\|;:'\"<>,.\\/\\?]+"
//   );

//   return onlyLatinRegex.test(name);
// }

// export function getTimezone() {
//   return new Date().getTimezoneOffset();
// }

// export function getCurrentTime() {
//   const date = new Date();
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   hour = updateTime(hour);
//   min = updateTime(min);
//   sec = updateTime(sec);

//   return `${hour}:${min}:${sec}`;
// }

// function updateTime(k) {
//   return k < 10 ? "0" + k : k;
// }

// export function getTimezoneOffset() {
//   return `(${moment().format("Z")})`;
// }

// export function getNestedValue(item, array) {
//   let nestedValue = item;

//   try {
//     array.forEach((value) => {
//       nestedValue = nestedValue[value];
//     });
//   } catch (e) {
//     nestedValue = "";
//   }
//   return nestedValue;
// }

// export function convertArrayToMap(array, key = "id", value = "name") {
//   return new Map(
//     array.map((item) => [item[key], value === "item" ? item : item[value]])
//   );
// }

// export function getRandomColor() {
//   return (
//     "rgba(" +
//     (Math.floor(Math.random() * 140) + 50) +
//     "," +
//     (Math.floor(Math.random() * 140) + 50) +
//     "," +
//     (Math.floor(Math.random() * 140) + 50) +
//     ",0.7)"
//   );
// }

// export function datasetKeyProvider() {
//   return btoa(`${Math.random()}`).substring(0, 12);
// }

// export function splitCamelCase(str) {
//   if (str.charAt(0).toLowerCase() === "b") return str;

//   const rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;

//   return str.replace(rex, "$1$4 $2$3$5");
// }

// export function parseSiteUrl(url) {
//   const rex = "^(?:https?:\\/\\/)?(?:[^@\\/\\n]+@)?(?:www\\.)?([^:\\/?\\n]+)";
//   const regex = new RegExp(rex);

//   const match = regex.exec(url);

//   return match[1] || "link";
// }

// export function getPathname(pathname) {
//   return pathname.slice(pathname.indexOf("/") + 1);
// }

// export function correctTimeFormatForBack(time) {
//   return moment(time).format("YYYY-MM-DDTHH:mm:ss");
// }

// export function uuidv4() {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//     const r = (Math.random() * 16) | 0;
//     const v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }

// export function removeUnusedFields(state, unusedFields) {
//   return Object.keys(state).reduce((target, key) => {
//     if (!unusedFields.includes(key)) {
//       target[key] = state[key];
//     }
//     return target;
//   }, {});
// }

// export const tableDataSort = (data, sortFilter, columns) => {
//   const { logic, fieldName } = sortFilter;
//   const sortedData = [...data];
//   const field = columns.find((item) => item.field === fieldName);

//   switch (logic) {
//     case AppConstants.sort_types.ASC:
//       sortedData.sort((a, b) =>
//         field?.type === "date"
//           ? new Date(a[fieldName]) - new Date(b[fieldName])
//           : a[fieldName] - b[fieldName]
//       );
//       return sortedData;
//     case AppConstants.sort_types.DESC:
//       sortedData.sort((a, b) =>
//         field?.type === "date"
//           ? new Date(b[fieldName]) - new Date(b[fieldName])
//           : b[fieldName] - a[fieldName]
//       );
//       return sortedData;
//     default:
//       return data;
//   }
// };

// export const getRouteName = (routes, location) => {
//   return routes.find((route) => route.path === location.pathname)?.name || "";
// };

// const convertArrayToObject = (helperArray, convertByKey) => {
//   return helperArray.reduce((obj, item) => {
//     obj[item[convertByKey]] = item;
//     return obj;
//   }, {});
// };

// export const addPropertyToObject = (
//   key,
//   addingKey,
//   mainArray,
//   helperArray,
//   convertByKey
// ) => {
//   let newObj = convertArrayToObject(helperArray, convertByKey);

//   return mainArray.map((item) => {
//     return {
//       ...item,
//       [addingKey]: newObj[item[key]] && newObj[item[key]].name,
//     };
//   });
// };

// export const findPermission = (firstArray, secondArray) => {
//   return firstArray.some((item) => secondArray.includes(item));
// };

// class QueryString {
//   constructor() {}

//   stringify(params) {
//     const urlSearchParams = new URLSearchParams(params);
//     return urlSearchParams.toString();
//   }

//   parse(params) {
//     const urlSearchParams = new URLSearchParams(params);
//     return Object.fromEntries(urlSearchParams.entries());
//   }
// }

// export const sortByString = (array, key) => {
//   const sortedArray = [...array];
//   sortedArray.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
//   return sortedArray;
// };

// export const changeArrayByIndex = (state, key, index, objectData) => {
//   return [
//     ...state[key].slice(0, index),
//     { ...objectData },
//     ...state[key].slice(index + 1),
//   ];
// };

// export const queryString = new QueryString();
