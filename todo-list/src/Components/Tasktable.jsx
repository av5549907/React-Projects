import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import MOCK_DATA from './MOCK_DATA.json';
import { column } from './column';
import './table.css';

export const TaskTable = () => {
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
    // Add your logic here to save the data
    // For example, make an API call or update a JSON file
    removeRow(index);
  };

  const removeRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const columns = useMemo(() => column, []);
  const data = useMemo(() => MOCK_DATA, []);

  const TableInstance = useTable({
    columns,
    data
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = TableInstance;

  return (
    <div class="container" >
       <div><header style={{width:"100%",height:"50px",backgroundColor:"Highlight"}}></header></div>
        <div style={{display:"flex",justifyContent:"flex-start",width:"100%"}}>
      <button onClick={toggleTable} class="fa-solid fa-circle-chevron-down" style={{display:"flex", justifyContent:"flex-start",backgroundColor:"gray"}}>
       {isTableCollapsed ? 'Open' : 'Close'}
      </button>
      </div>
      {/* Render the table and row count only if it is not collapsed */}
      {!isTableCollapsed && (
        <div style={{ display: 'inline', flexDirection: 'column'}}>
        {/* <span style={{display:"flex",justifyContent:"flex-start"}}><p>{rows.length} rows</p></span> */}
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                //const rowData = row.original;
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
              {tableData.map((rowData, index) => (
                <tr key={index}>
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
          {/* <p>{rows.length} rows</p> */}
          <div style={{ display: 'flex', justifyContent:"flex-start",fontFamily:"sans-serif",fontSize:"50px"}}>
            <button onClick={addRow}>+ New Task</button>
          </div>
          <div><footer style={{width:"100%",height:"50px",backgroundColor:"Highlight"}}></footer></div>
        </div>
      )}
    </div>
  );
};
