import { instance } from '@/redux/common/configs/axios-config'
import boardColumns from '../modul/columns'     

export const AllBoardsAPI = async (page: number) => {
    try {
        const response = await instance.get('/api/boards/list', {
            params: { page, limit: 10 } //1page 당 10 게시글
        })
        console.log("response " + response)
        return response.data
    } catch (error) {
        console.log(error + " fetchAllBoardsAPI EERR!!!")
        return error
    }

}

export const findBoardsAPI = async (id: number) => {
    try {
        const response = await instance.get('/api/boards/detail', {
            params: {id} //1page 당 10 게시글
        });
        console.log("response ",response)
        return response.data
    } catch (error) {
        console.log(error ," findBoardsAPI EERR!!!")
        return error
    }

}