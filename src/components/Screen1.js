import React, { useMemo } from 'react'
import {useTable,useSortBy,useGlobalFilter,usePagination,useFilters}  from "react-table"
import "./Screen1.css"
import ColumnFilter from './ColumnFilter'


const Screen1 = (props) => {


   

   // const columns=useMemo(()=> props.columns,[])
   // const data=useMemo(()=>props.data,[])
   const columns= props.columns
   const data=props.data


   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      setGlobalFilter
   }=useTable({
      columns:columns,
      data:data,
   },useFilters,useGlobalFilter,useSortBy,usePagination,)

   const {globalFilter,pageIndex}=state

return (

   <>
   
       {props.screen?
       
       ////////////////////////////////////-------screen 2--------//////////////////////////
       <table {...getTableProps()}>
      
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                 
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
                
                {/* <div>{column.canFilter ? column.render('Filter'):null}</div> */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>:
    
    ///////////////////////////////////---------screen 1-----------//////////////////////////////////////
    <table {...getTableProps()}>
       <thead>
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
        <input
        className='globalFilter'
          type="text"
          placeholder="Search"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
          {
             headerGroups.map(headerGroup=>(
               
           <tr {...headerGroup.getFooterGroupProps()}>
             {
                headerGroup.headers.map(column=>(
                   <th {...column.getHeaderProps()}>{column.render('Header')}</th> 
                ))
             }
          
         </tr>
             ))
          }
         
       </thead>
       <tbody {...getTableBodyProps()}>
          {
             page.map((row)=>{
                prepareRow(row)
                return(
                   <tr {...row.getRowProps()}>
                      {
                         row.cells.map((cell)=>{
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                         })
                      }
                   
                  </tr>
                )
             })
          }
        
       </tbody>
       <span className='numberOfPages'>
         page{" "}
         <strong>
            {pageIndex +1} of {pageOptions.length}
         </strong>{" "}
       </span>
       <button className='paginationPrevious' onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
       <button className='paginationNext' onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
      </table>
    }
   </>


 )



}

export default Screen1