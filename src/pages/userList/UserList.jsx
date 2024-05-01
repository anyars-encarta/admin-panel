import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from '../../constants/table';

import './userList.css';

const UserList = () => {

    return (
        <div className='userList'>
            <DataGrid
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default UserList