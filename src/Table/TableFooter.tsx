import { Box, TableRow, TableCell } from '@mui/material';
import data from '../Table/data';
import { IDataItem } from './Table';

export const TableSumFooter = ({ arrData }) => {
  //const arrData = data.dataItems;
  let sumOrders = 0;
  let sumOrdersWay = 0;
  let sumTotal = 0;
  arrData.map((el: IDataItem) => (sumOrders += el.available_to_order));
  arrData.map((el: IDataItem) => (sumOrdersWay += el.goods_on_way));
  arrData.map((el: IDataItem) => (sumTotal += el.total));

  return (
    <Box sx={{ width: '100%', borderRadius: '10px' }}>
      <TableRow>
        <TableCell sx={{ minWidth: 645, border: '2px solid #fffcfc', backgroundColor: '#f3f1f1' }}>итого </TableCell>
        <TableCell sx={{ minWidth: 138, border: '2px solid #fffcfc', backgroundColor: '#f3f1f1', textAlign: 'right' }}>
          {sumOrders}
        </TableCell>
        <TableCell sx={{ minWidth: 138, border: '2px solid #fffcfc', backgroundColor: '#f3f1f1', textAlign: 'right' }}>
          {sumOrdersWay}
        </TableCell>
        <TableCell sx={{ minWidth: 138, border: '2px solid #fffcfc', backgroundColor: '#f3f1f1', textAlign: 'right' }}>
          {sumTotal}
        </TableCell>
      </TableRow>
    </Box>
  );
};
