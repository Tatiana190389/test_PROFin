import { Paper } from '@mui/material';
import { useState, useCallback } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableSumFooter } from '../Table/TableFooter';
import { columns } from './columns';

export interface IDataItem {
  id: number;
  barcode: string;
  item: string;
  article_number: string;
  size: number;
  available_to_order: number;
  goods_on_way: number;
  total: number;
}

export const TableData = ({ arrData }: IDataItem[]) => {
  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowsModelChange = useCallback((model: GridEditRowsModel) => {
    setEditRowsModel(model);
  }, []);

  return (
    <Paper
      sx={{
        mt: '2%',
        height: '400px',
        width: '100%',
        borderRadius: '15px',
      }}
    >
      <DataGrid
        hideFooterPagination={true}
        hideFooter={false}
        sx={{
          p: '7px',
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
            border: '2px solid #fffcfc',
          },

          '.MuiDataGrid-rowSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-sortIcon': {
            opacity: 'inherit !important',
          },
          '.MuiDataGrid-row:nth-of-type(odd)': {
            backgroundColor: '#f3f1f1',
            border: '1px solid #fff',
            borderRadius: '10px',
          },
          '.MuiDataGrid-row:last-child td, &:last-child th': {
            border: '1px solid #fff',
            borderRadius: '10px',
          },
        }}
        rows={arrData}
        columns={columns}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
        slots={{
          footer: TableSumFooter,
        }}
        slotProps={{
          footer: { arrData },
        }}
      />
    </Paper>
  );
};
