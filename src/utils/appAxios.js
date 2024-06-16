import axios from "axios";

//const baseURL = "https://backend.ahmetselimboz.com.tr/api"
const baseURL = import.meta.env.VITE_API_URL;

const appAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// appAxios.interceptors.request.use(
//     async config => {
//         const token = store.getters.Token;
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//             try {
//                 await axios.get(`${baseURL}/homepage/test-token`, {
//                     headers: {
//                         "Authorization": `Bearer ${token}`
//                     }
//                 });
//             } catch (error) {
//                 if (error.response && (error.response.status === 401 || error.response.status === 403)) {

//                     store.commit('setAuth', false);
//                     store.commit('clearToken'); // Vuex store'dan token'ı temizle
//                     router.push({name:"LoginPage"}); // Login ekranına yönlendir
//                     toast.error(error.response.data.error.message);
//                     return Promise.reject(error); // İstek iptal edilsin
//                 }
//             }
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// appAxios.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response && (error.response.status == 401 || error.response.status == 403)) {

//             store.commit('setAuth', false);
//             store.commit('clearToken'); // Vuex store'dan token'ı temizle
//             router.push({name:"LoginPage"}); // Login ekranına yönlendir
//             toast.error(error.response.data.error.message);
//         }
//         return Promise.reject(error);
//     }
// );

export default appAxios;
