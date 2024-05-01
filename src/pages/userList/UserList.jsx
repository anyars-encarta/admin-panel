import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

import './userList.css';

const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img src={params.row.avatar} alt='' className='userListImage' />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <button className="userListEdit">Edit</button>
                        <DeleteOutline className="userListDelete" />
                    </>
                )
            }
        },
    ];

    const rows = [
        { id: 1, username: 'Jon Snow', avatar: '/images/profile.jpg', email: 'jon@something.com', status: 'active', transaction: '$120.00', },
        { id: 2, username: 'Cersei Lannister', avatar: '/images/profile.jpg', email: 'cersei@something.com', status: 'inactive', transaction: '$420.00', },
        { id: 3, username: 'Jaime Lannister', avatar: '/images/profile.jpg', email: 'jaime@something.com', status: 'active', transaction: '$320.00', },
        { id: 4, username: 'Arya Stark', avatar: '/images/profile.jpg', email: 'arya@something.com', status: 'active', transaction: '$720.00', },
        { id: 5, username: 'Daenerys Targaryen', avatar: '/images/profile.jpg', email: 'daenerys@something.com', status: 'inactive', transaction: '$820.00', },
        { id: 6, username: 'Melisandre', avatar: '/images/profile.jpg', email: 'melisandre@something.com', status: 'inactive', transaction: '$520.00', },
        { id: 7, username: 'Ferrara Clifford', avatar: '/images/profile.jpg', email: 'ferrara@something.com', status: 'active', transaction: '$320.00', },
        { id: 8, username: 'Rossini Frances', avatar: '/images/profile.jpg', email: 'rossini@something.com', status: 'active', transaction: '$220.00', },
        { id: 9, username: 'Harvey Roxie', avatar: '/images/profile.jpg', email: 'harvey@something.com', status: 'active', transaction: '$520.00', },
        { id: 10, username: 'John Doe', avatar: '/images/profile.jpg', email: 'john@something.com', status: 'inactive', transaction: '$620.00', },
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default UserList