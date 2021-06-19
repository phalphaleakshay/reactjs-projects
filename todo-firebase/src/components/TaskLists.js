import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'summary', headerName: 'Summary', width: 130 },
    { field: 'priority', headerName: 'Priority', width: 130 },
    {
        field: 'createdDate',
        headerName: 'Created On',
        type: 'date',
        width: 160,
    },
    {
        field: 'dueDate',
        headerName: 'Due By',
        type: 'date',
        width: 160,

    },
];

const rows = [
    { id: 1, summary: 'Snow', priority: 'High', createdDate: new Date(), dueDate: new Date(2020, 12, 1) },
    { id: 2, summary: 'Lannister', priority: 'Low', createdDate: new Date(), dueDate: new Date(2020, 12, 1) },
    { id: 3, summary: 'Lannister', priority: 'High', createdDate: new Date(), dueDate: new Date(2020, 12, 1) },
    { id: 4, summary: 'Stark', priority: 'Low', createdDate: new Date(), dueDate: new Date(2020, 12, 1) },
    { id: 5, summary: 'Targaryen', priority: 'High', createdDate: new Date(), dueDate: new Date(2020, 12, 1) }
];

export default function TaskLists() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}
