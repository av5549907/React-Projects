import React, {useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { column } from './column';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css';


export const BasicTable = () => {
  const [isTableCollapsed, setTableCollapsed] = useState(false);
  const [tableData, setTableData] = useState([]);

  // Function to toggle the visibility of the table.
  const toggleTable = () => {
    setTableCollapsed(!isTableCollapsed);
  };

  // Function to add a new row to the table.
  const addRow = () => {
    const newTableData = [
      ...tableData,
    { first_name: '', last_name: '', email: '', gender: ''}
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
    rowData["isEditing"]=false;
    MOCK_DATA = [...MOCK_DATA,rowData];
      setTableData(MOCK_DATA);
      console.log(MOCK_DATA)
      console.log('data saved')
  };

  const removeRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const columns = useMemo(() => column, []);
   const data = useMemo(() => tableData, []);
//const data = useMemo(() => MOCK_DATA, []);

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
    <div >
    <div className="container">
     <div><header style={{width:"100%",height:"50px",backgroundColor:"white"}}></header></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={toggleTable} className="openbtn">
          {isTableCollapsed ? 'Close':'Open'}
        </button>
      </div>
      {!isTableCollapsed && (
        <div  style={{ display: 'inline', flexDirection: 'column', fillOpacity: 'unset' }}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  <th style={{textAlign:"right"}}>{data.length}</th>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
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
                    <td>
                      <button
                        onClick={() =>
                          setTableData((prevData) => {
                            const updatedData = [...prevData];
                            updatedData[index].isEditing = true;
                            return updatedData;
                          })
                        }
                      >
                        Edit
                      </button>
                    </td>
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
    </div>
  );
};

