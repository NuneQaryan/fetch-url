// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import useOutsideClick from "../hooks/OutsideClickHook";

// const Menu = ({ menuItems, location }) => {
//   const [status, setStatus] = useState(false);
//   const [activeMenuItem, setActiveMenuItem] = useState("");
//   const [activeSubMenuItem, setActiveSubMenuItem] = useState("");
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     setStatus(false);
//   }, [location]);

//   useOutsideClick(wrapperRef, () => setStatus(false));

//   const handleSelect = (menuItem) => {
//     if (menuItem === activeMenuItem) {
//       setActiveMenuItem("");
//     } else {
//       setActiveMenuItem(menuItem);
//       if (menuItem) {
//         setActiveSubMenuItem("");
//       }
//     }
//   };

//   return (
//     <div className={`menu ${status ? "active" : ""}`}>
//       <div className="navigation-w">
//         <div onClick={() => setStatus(!status)} className="h-left-c-icon">
//           <span className="m-i-t" />
//           <span className="m-i-t" />
//           <span className="m-i-t" />
//         </div>
//         <div ref={wrapperRef} className="nav-w-content">
//           <div className="nav-content-inner">
//             {menuItems.map((menu, i) => (
//               <div
//                 key={i}
//                 className={`nav-w-content-row  ${
//                   activeMenuItem === menu.key ? "active" : ""
//                 }`}
//               >
//                 <div
//                   onClick={() => handleSelect(menu.key)}
//                   className="nav-w-content-r-visible"
//                 >
//                   {menu.subMenus?.length ? (
//                     <i className="icon-chevron-right nav-w-content-r-icon" />
//                   ) : null}
//                   {menu.key ? (
//                     <Link to={menu.key} className="nav-w-content-r-name">
//                       {menu.menuName}
//                     </Link>
//                   ) : (
//                     <p className="nav-w-content-r-name">{menu.menuName}</p>
//                   )}
//                 </div>
//                 <div className="nav-w-content-r-hidden">
//                   {menu.subMenus?.map((subMenu, z) => (
//                     <Link
//                       onClick={() => setActiveSubMenuItem(subMenu.path)}
//                       to={subMenu.path}
//                       className={`nav-w-content-r-item ${
//                         activeSubMenuItem === subMenu.path ? "active" : ""
//                       }`}
//                       key={z}
//                     >
//                       {subMenu.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;