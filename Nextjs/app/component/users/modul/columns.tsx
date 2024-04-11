import { Link, Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import { userColumn } from '../model/userColumn'
import { PG } from '@/app/component/common/enums/PG';

export default function userColumns(): GridColDef[] {

    interface CellType {
        row: userColumn;
    }


    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" > {row.id}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'username',
            headerName: 'USERNAME',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>
                    <Link href={`${PG.USER}/detail/${row.id}`}> {row.username} </Link>
                </Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'password',
            headerName: 'PASSWORD',
            renderCell({ row }: CellType) {
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.password}</Typography>
                return <>********</>
            }
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'name',
            headerName: 'NAME',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.name}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phone',
            headerName: 'PHONE',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.phone}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'job',
            headerName: 'JOB',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.job}</Typography>
        }


    ]
}