import { instance } from "@/redux/common/configs/axios-config"

export const fetchAllUsersAPI = async (page: number) => {
    try {
        const response = await instance.get('/api/users/list', {
            params: { page, limit: 10 } //1page 당 10 게시글
        })
        return response.data
    } catch (error) {
        console.log(error + " fetchAllUsersAPI EERR!!!")
        return error
    }
}