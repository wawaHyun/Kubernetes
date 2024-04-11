'use client'


import articleColumns from "@/app/component/articles/modul/columns";
import { fetchAllArticles } from "@/app/component/articles/service/article.service";
import { getAllArticles } from "@/app/component/articles/service/article.slice";
import { MyTypography } from "@/app/component/common/module/cell";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllarticlesPage: NextPage = () => {
    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)

    if (allArticles !== undefined) {
        console.log('allArticles is not undefined')

        console.log('length is ' + allArticles.length)
        for (let i = 0; i < allArticles.length; i++) {
            console.log(JSON.stringify(allArticles[i]))
        }
    } else {
        console.log('allArticles is undefined')
    }


    useEffect(() => {
        dispatch(fetchAllArticles(1))
    }, [dispatch])

    return (<>
        {MyTypography('ALL Articles '+allArticles.length,"1.5rem")}

        <div style={{ height: "100%", width: "100%", fontSize:30}}>
            {allArticles && <DataGrid// 🔥 4
                rows={allArticles}
                columns={articleColumns()}
                pageSizeOptions={[5,10,20,100]} // 4-1
                checkboxSelection
            />}
        </div>

    </>)
}

export default AllarticlesPage