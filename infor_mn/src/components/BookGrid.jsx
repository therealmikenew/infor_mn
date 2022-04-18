import { DataGrid } from "@mui/x-data-grid"
import { Typography } from "@mui/material";

const BookGrid = ({results}) => {
    console.log(results)
    const columns = [
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
          editable: true,
        },
        {
          field: 'authors',
          headerName: 'Authors',
          width: 150,
          editable: true,
        },
        {
          field: 'retail_price',
          headerName: 'Retail Price',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'page_count',
          headerName: 'Page Count',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
            field: 'categories',
            headerName: 'Categories',
            width: 150,
            editable: true,
          },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
      ];

    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];

      const rows = results.map((res, idx)=>(
          { id: idx, title: res.volumeInfo.title, authors: res.volumeInfo.authors, retail_price: res.saleInfo.saleability === "FOR_SALE" ? (res.saleInfo.retailPrice.amount): ("No price listed"), page_count: res.volumeInfo.pageCount, categories: res.volumeInfo.categories }

      ))


    return (
        <div style={{ width: 700, height: 500 }}>
            <DataGrid
            columns={columns}
            rows={rows}
            pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick/>
        </div>
    )


}

export default BookGrid