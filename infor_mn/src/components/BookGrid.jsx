import { DataGrid } from "@mui/x-data-grid"

const BookGrid = ({results}) => {
  
    const columns = [
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
        },
        {
          field: 'authors',
          headerName: 'Authors',
          width: 150,
        },
        {
          field: 'retail_price',
          headerName: 'Retail Price',
          type: 'number',
          width: 110, 
        },
        {
          field: 'page_count',
          headerName: 'Page Count',
          type: 'number',
          width: 110,   
        },
        {
            field: 'categories',
            headerName: 'Categories',
            width: 150,  
          },
      
      ];


      const rows = results.map((res, idx)=>(
          { id: idx, title: res.volumeInfo.title, authors: res.volumeInfo.authors, retail_price: res.saleInfo.saleability === "FOR_SALE" ? (res.saleInfo.retailPrice.amount): ("No price listed"), page_count: res.volumeInfo.pageCount, categories: res.volumeInfo.categories }
      ))

      const handleClick = () => {
          console.log('clicked')
      }


    return (
        <div style={{ width: 700, height: 500 }}>
            <DataGrid
            columns={columns}
            rows={rows}
            onRowClick={handleClick}
            pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick/>
        </div>
    )


}

export default BookGrid