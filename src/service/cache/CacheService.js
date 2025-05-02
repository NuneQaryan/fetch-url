// import AppConstants from "./../settings/constants";
// import moment from 'moment';

// class CacheService {
//     getCacheByType(type) {
//         switch (type) {
//             case AppConstants.cache.LOCATION:
//                 return this.getLocation();
//             case AppConstants.cache.USERNAME:
//                 return  this.getUserName();
//             default:
//                 return;

//         }
//     }

//     getUserToken() {
//         try {
//             return localStorage.getItem(AppConstants.cache.TOKEN);
//         } catch (err) {
       
//         }
//     }

//     getUserName() {
//         try {
//             return localStorage.getItem(AppConstants.cache.USERNAME);
//         } catch (err) {
         
//         }
//     }

//     getPermissions() {
//         try {
//             return JSON.parse(localStorage.getItem(AppConstants.cache.PERMISSIONS));
//         } catch (err) {
      
//         }
//     }

//     getLocation() {
//         try {
//             return JSON.parse(localStorage.getItem(AppConstants.cache.LOCATION));
//         } catch (err) {
           
//         }
//     }

//     saveUserToken(token) {
//         try {
//             if (!token) {
//                 localStorage.setItem(AppConstants.cache.TOKEN, '');
//                 return;
//             }
//             localStorage.setItem(AppConstants.cache.TOKEN, token);
//         } catch (err) {
//             console.log('Local Storage err == ', err);
//         }
//     }

//     saveUserName(name) {
//         try {
//             if (!name) {
//                 localStorage.setItem(AppConstants.cache.USERNAME, '');
//                 return;
//             }
//             localStorage.setItem(AppConstants.cache.USERNAME, name);
//         } catch (err) {
//             console.log('Local Storage err == ', err);
//         }
//     }

//     savePermissions(permissions) {
//         try {
//             if(Array.isArray(permissions)) {
//                 localStorage.setItem(AppConstants.cache.PERMISSIONS, JSON.stringify(permissions));
//             }
//         }catch (err) {
//             console.log('Local Storage err == ', err);
//         }
//     }

//     saveLocation(location) {
//         try {
//             if(Array.isArray(location)) {
//                 localStorage.setItem(AppConstants.cache.LOCATION, JSON.stringify(location));
//             }
//         } catch (err) {
//             console.log("Local Storage err == ", err)
//         }
//     }

//     removeUserToken() {
//         try {
//             return localStorage.removeItem(AppConstants.cache.TOKEN);
//         } catch (err) {
            
//         }
//     }

//     removeUserName() {
//         try {
//             return localStorage.removeItem(AppConstants.cache.USERNAME);
//         } catch (err) {
//             console.log("LocalStorage err == ", err);
//         }
//     }

//     removePermissions() {
//         try {
//             return localStorage.removeItem(AppConstants.cache.PERMISSIONS);
//         } catch (err) {
//             console.log("Local Storage err", err)
//         }
//     }
// }

// export default new CacheService();
