import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '002d8c12-7d92-45d9-a62f-6a35ff500bbf'
      }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize=10) {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
    });
}
}
