import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
//import MOCK_DATA from './MOCK_DATA.json';
import ABC_DATA from './ABC_DATA.json'
import { column } from './column';
import './table.css';
import {  faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export const TaskTable = (props) => {
  const {collapsed}=props;
  const [isTableCollapsed, setTableCollapsed] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isSideBarOpen,setSideBarOpen]=useState(false);
  //const [tableData, setTableData] = useState();

  // Function to toggle the visibility of the table.
  const toggleTable = () => {
    setTableCollapsed(!isTableCollapsed);
  };


  // Function to add a new row to the table.
  const addRow = () => {
    const newTableData = [
      ...tableData,
      { first_name: '', last_name: '', email: '', gender: '', isEditing: true }
    ];
    setTableData(newTableData);
  };
 

  const handleInputChange = (event, index, column) => {
    const { value } = event.target;
    const updatedTableData = [...tableData];
    updatedTableData[index][column] = value;
    setTableData(updatedTableData);
  };

const handleSave = (index) => { 
  const rowData = tableData[index];
  console.log('Saving data:', rowData);
   
      // Write the updated data back to the JSON file
  //    MOCK_DATA = [...MOCK_DATA,...tableData];
  rowData["isEditing"]=false;
  
  ABC_DATA=[...tableData,]
    //setTableData('');
    data.length=data.length+1;
    setTableData(ABC_DATA);
   
    //setTableData(tableData)
    //setTableData(rowData);
    console.log(ABC_DATA)
    console.log('data saved')
};

// const handleSave = (index) => { 
//     const rowData = tableData[index];
//     console.log('Saving data:', rowData);
     
//         // Write the updated data back to the JSON file
//     //    MOCK_DATA = [...MOCK_DATA,...tableData];
//     rowData["isEditing"]=false;
//     MOCK_DATA = [...MOCK_DATA,rowData];
//       setTableData('');
//       setTableData(MOCK_DATA);
//       //setTableData(rowData);
//       console.log(MOCK_DATA)
//       console.log('data saved')
//   };

//   const handleSave = (index) => { 
//     const rowData = tableData[index];
//     console.log('Saving data:', rowData);
  
//     // Make a POST request to the backend API endpoint
//     fetch('/api/appendData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(rowData),
//     })
//       .then(response => response.json())
//       .then(updatedData => {
//         console.log('Data saved:', updatedData);
//        // removeRow(index);
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };

  const removeRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const columns = useMemo(() => column, []);
  // const data = useMemo(() => MOCK_DATA, []);
  const data = useMemo(() => ABC_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  

    return (
      <>
      <div className={classNames('boxcontainer',!collapsed&&'boxcontainer1')}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={toggleTable} className="openbtn">
        <FontAwesomeIcon icon={faCircleChevronDown} />
          {isTableCollapsed ? 'Open' : 'Close'}
        </button>
       </div>
      {/* Render the table and pagination only if it is not collapsed */}
      {!isTableCollapsed && (
        <div>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  <th>{data.length} data</th>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                //const rowData = row.original;
                return (
                  <tr {...row.getRowProps()}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                    
                    <td><button>Edit</button>||<button>Delete</button></td>
                  </tr>
                );
              })}
              {tableData.map((rowData, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>
                      {rowData.isEditing ? (
                        <input
                          type="text"
                          value={rowData[column.accessor] || ''}
                          onChange={(event) => handleInputChange(event, index, column.accessor)}
                        />
                      ) : (
                        rowData[column.accessor]
                      )}
                    </td>
                  ))}
                  {rowData.isEditing ? (
                    <>
                      <td>
                        <button onClick={() => handleSave(index)}>Save</button>
                      </td>
                      <td>
                        <button onClick={() => removeRow(index)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent:"flex-start",fontFamily:"sans-serif",fontSize:"50px"}}>
            <button onClick={addRow}>+ New Task</button>
          </div>
          <div><footer style={{width:"100%",height:"50px",backgroundColor:"white"}}></footer></div>
          <div style={{ textAlign: 'center' }}>
            {/* <p>{data.length} rows</p> */}
            <div>
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>{' '}
              <button onClick={previousPage} disabled={!canPreviousPage}>
                {'<'}
              </button>{' '}
              <button onClick={nextPage} disabled={!canNextPage}>
                {'>'}
              </button>{' '}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>{' '}
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <span>
                | Go to page:{' '}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(pageNumber);
                  }}
                  style={{ width: '50px' }}
                />
              </span>{' '}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};



