import { DataGrid } from "@mui/x-data-grid"
import {useNavigate} from "react-router-dom"

const BookGrid = ({results}) => {
  let navigate = useNavigate()
  
    const columns = [
        {
          field: 'title',
          headerName: 'Title',
          width: 350,
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

      const handleClick = (e) => {
        navigate(`/${e.id}`)
      }


    return (
        <div style={{ width: 900, height: 400 }}>

        
            <DataGrid
            columns={columns}
            rows={rows}
            onRowClick={(e)=>(handleClick(e))}
            pageSize={5}
        rowsPerPageOptions={[5]}
        
        disableSelectionOnClick/>


          



           
        </div>
    )


}

export default BookGrid