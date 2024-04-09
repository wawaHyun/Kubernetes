
import { Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import { BoardColumn } from '../model/BoradColumn'
import Link from 'next/link';
import { PG } from '@/redux/common/enums/PG';


export default function boardColumns(): GridColDef[] {

    interface CellType {
        row: BoardColumn;
    }


    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.id}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardName',
            headerName: 'board Name',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
                    <Link href={`${PG.BOARD}/detail/${row.id}`}> {row.boardName} </Link>
                </Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardType',
            headerName: 'board Type',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.boardType}</Typography>
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