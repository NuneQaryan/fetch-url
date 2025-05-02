// import React, { useEffect } from "react";

// const useOutsideClick = (ref, action, deps = [], multiModal) => {
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEsc);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.addEventListener("keydown", handleEsc);
//     };
//   }, [ref, ...deps]);
//   const handleEsc = (event) => {
//     if (event.key === "Escape") {
//       handleClickOutside(event);
//     }
//   };
//   const handleClickOutside = (e) => {
//     if (multiModal) {
//       return;
//     }

//     if (
//       e.target.classList.contains("h-left-c-icon") ||
//       e.target.classList.contains("m-i-t")
//     ) {
//       handleDropdownStatus();
//     }

//     if (ref.current && !ref.current.contains(e.target)) {
//       if (
//         e.target.classList.contains("dropdown-type-3-no-v-r-i-item") ||
//         e.target.classList.contains("dropdown-type-3-no-v-r-i-i-c-text") ||
//         e.target.classList.contains("dropdown-type-3-no-visible-r-bottom") ||
//         e.target.classList.contains("icon-filter") ||
//         e.target.classList.contains("dropdown-type-1-no-visible-row") ||
//         e.target.classList.contains("c-l-checkbox") ||
//         e.target.classList.contains("dropdown-type-1-no-v-r-i-item") ||
//         e.target.classList.contains("dropdown-type-1-no-v-r-i-i-column") ||
//         e.target.classList.contains("dropdown-type-1-no-v-r-i-i-c-text") ||
//         (e.target.classList.contains("input-type-1") &&
//           e.target.classList.contains("dropdown")) ||
//         e.target.classList.contains("dropdown-type-1-no-visible-row-content") ||
//         e.target.classList.contains("navigation-w") ||
//         e.target.classList.contains("h-left-c-icon") ||
//         e.target.classList.contains("m-i-t") ||
//         e.target.classList.contains("context-m")
//       )
//         return;

//       handleDropdownStatus();

//       typeof action === "function" && action();
//     }
//   };

//   const handleDropdownStatus = () => {
//     let dropdowns = document.getElementsByClassName(
//       "dropdown-type-1-no-visible-row"
//     );
//     let filterDropdowns = document.getElementsByClassName(
//       "dropdown-type-2-no-visible-row"
//     );
//     let otherDropdowns = document.getElementsByClassName(
//       "dropdown-type-3-no-visible-row"
//     );
//     for (let dropdown of dropdowns) {
//       if (!dropdown.classList.contains("hide")) dropdown.classList.add("hide");
//     }
//     for (let filterDropdown of filterDropdowns) {
//       if (!filterDropdown.classList.contains("hide"))
//         filterDropdown.classList.add("hide");
//     }
//     for (let otherDropdown of otherDropdowns) {
//       if (!otherDropdown.classList.contains("hide"))
//         otherDropdown.classList.add("hide");
//     }
//   };
// };

// export default useOutsideClick;
