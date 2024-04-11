
import { Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import Link from 'next/link';
import { PG } from '@/app/component/common/enums/PG';
import { articleColumn } from '../model/articleColumn';


export default function articleColumns(): GridColDef[] {

    interface CellType {
        row: articleColumn;
    }


    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => <p className='type'>{row.id}</p>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'title',
            headerName: 'TITLE',
            renderCell: ({ row }: CellType) =>
                <p className='type' >
                    <Link href={`${PG.ARTICLE}/detail/${row.id}`}> {row.title}</Link>
                </p>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: 'CONTENT',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.content}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: 'mod date',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.modDate}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: 'reg date',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.regDate}</Typography>
        }

    ]
}