import { instance } from '@/redux/common/configs/axios-config'

export const AllArticlesAPI = async (page: number) => {
    try {
        const response = await instance.get('/api/articles/list', {
            params: { page, limit: 10 } //1page 당 10 게시글
        })
        console.log("response " + response)
        return response.data
    } catch (error) {
        console.log(error + " fetchAllArticlesAPI EERR!!!")
        return error
    }

}