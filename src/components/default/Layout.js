// import React, { useEffect, Suspense } from "react";
// import { Route, Navigate } from "react-router-dom";
// import Header from "../header/Header";
// import Menu from "../menu/LeftMenu";
// import NotFound from "../NotFound";

// const Layout = ({ routes }) => {
//   const spinner = <span />;

//   useEffect(() => {
//     // Any side effects can be handled here
//   }, []);

//   // Function to match the current route based on the URL path
//   const matchRoute = (path) => {
//     const matchedRoute = routes.find((route) =>
//       path.startsWith(route.path)
//     );
//     return matchedRoute;
//   };

//   // Render the component for the matched route
//   const renderRoute = ({ location }) => {
//     const matchedRoute = matchRoute(location.pathname);

//     if (matchedRoute) {
//       const { component: Component, routes } = matchedRoute;
//       return <Component routes={routes} />;
//     } else {
//       // If no route matches, render the NotFound component
//       return <NotFound />;
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Menu menuItems={routes} />
//       <Suspense fallback={spinner}>
//         <Route render={renderRoute} />
//       </Suspense>
//     </>
//   );
// };

// export default Layout;                                       