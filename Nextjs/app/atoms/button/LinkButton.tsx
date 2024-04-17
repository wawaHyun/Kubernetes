'use client'

import { PG } from '@/app/component/common/enums/PG';
import { Link } from '@mui/material';

interface ILinkButton {
    title: string,
    path: string
}

export const linkButtonTitles = [
    { title: 'MY', path: `${PG.USER}/detail` }, //나의 개인페이지
    { title: 'boards', path: `${PG.BOARD}/list` }, //모든 카테고리들
    { title: 'articles', path: `${PG.ARTICLE}/list` }, //공개 게시글들
    { title: 'clubs', path: `${PG.CLUB}/list` }, //모든 CLUB
    { title: 'shop', path: `${PG.SHOP}/list` } //모든 shop
];


export default function LinkButton({ title, path }: ILinkButton) {
    return (
        <li >
            <Link href={`${path}`}>
             <div className="btn  overflow-hidden relative w-30 bg-white text-black p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00">
                {title}
            </div>
            </Link>
        </li>
    )

}