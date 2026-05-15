// import axios from 'axios';
// const VITE_API_GW = import.meta.env.VITE_API_GW;

// //URL del backend
// const API_URL = `${VITE_API_GW}}/api/v1/publicaciones/`;

// //instancia de axios
// const apiClient = axios.create({
//     baseURL: API_URL,
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// export default class PublicacionService {

//     //todas las publicaciones
//     static async getPublicaciones() {
//         try {
//             const response = await apiClient.get('/');
//             return response.data;
//         } catch (error) {
//             console.error('Error al obtener publicaciones:', error);
//             throw error;
//         }
//     }

//     //publicacion por id
//     static async getPublicacionById(id) {
//         try {
//             const response = await apiClient.get(`/${id}`);
//             return response.data;
//         } catch (error) {
//             console.error(`Error al obtener la publicación con id ${id}:`, error);
//             throw error;
//         }
//     }

//     //crear publicacion
//     static async createPublicacion(publicacion) {
//         try {
//             const response = await apiClient.post('/', publicacion);
//             return response.data;
//         } catch (error) {
//             console.error('Error al crear la publicación:', error);
//             throw error;
//         }
//     }

//     //actualizar publicacion
//     static async updatePublicacion(id, publicacion) {
//         try {
//             const response = await apiClient.put(`/${id}`, publicacion);
//             return response.data;
//         } catch (error) {
//             console.error(`Error al actualizar la publicación con id ${id}:`, error);
//             throw error;
//         }
//     }

//     //eliminar publicacion
//     static async deletePublicacion(id) {
//         try {
//             const response = await apiClient.delete(`/${id}`);
//             return response.data;
//         } catch (error) {
//             console.error(`Error al eliminar la publicación con id ${id}:`, error);
//             throw error;
//         }
//     }

//     /*static async filtroPublicaciones(filtros) {
//         try {
//             const response = await apiClient.get("/filtro", { params: filtros });
//             return response.data;
//         } catch (error) {
//             console.error(`Error al filtrar publicaciones:`, error);
//             throw error;
//         }
//     }*/
// }
