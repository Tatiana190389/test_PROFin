import { GridColumns } from '@mui/x-data-grid';

export const columns: GridColumns = [
  {
    field: 'barcode',
    headerName: 'Баркод',
    minWidth: 170,
    editable: true,
    resizable: true,
  },
  {
    field: 'item',
    headerName: 'Предмет',
    width: 170,
    editable: true,
    resizable: true,
  },
  { field: 'article_number', headerName: 'Артикул поставщика', width: 170, editable: true },
  { field: 'size', headerName: 'Размер', width: 170, editable: true },
  { field: 'available_to_order', headerName: 'Доступно к заказу', width: 170, editable: true, type: 'number' },
  { field: 'goods_on_way', headerName: 'Товары в пути', width: 170, editable: true, type: 'number' },
  { field: 'total', headerName: 'Итого кол-во товара', width: 170, editable: true, type: 'number' },
];
