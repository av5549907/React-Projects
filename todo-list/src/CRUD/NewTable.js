import React, { useState} from 'react'; 
import Pagination from './Pagination';
import MOCK_DATA from './MOCK_DATA.json';
import './tablestyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { addItem, deleteItem } from './crud/actionCreactor';


const itemsPerPage = 10;

const NewTable = () => {
  
  const items=useSelector((state)=>state.data)
  const dispatch=useDispatch()

  ////need to implement CRUD using this dispatch

  const [tableData, setTableData] = useState([]);
  const [isTableCollapsed, setTableCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const data = MOCK_DATA;
  //setTableData(data);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleToggle = () => {
    setTableCollapsed(!isTableCollapsed);
  };

  const onPageChange = (pageNumber) => {
    if(pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div id="main">
     <div>
      <button onClick={handleToggle} className="openclosebtn">
      <FontAwesomeIcon icon="faCircleChevronDown" />{isTableCollapsed ? 'Close' : 'Open'}
      </button>
      </div>
      <div>
      {isTableCollapsed && (
        <div className="tablecls">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((d) => (
                <tr key={d.first_name}>
                  <td>
                    <input type="checkbox" />
                    {d.first_name}
                  </td>
                  <td>{d.last_name}</td>
                  <td>{d.email}</td>
                  <td>{d.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
     {isTableCollapsed&& <Pagination
            data={data}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />}
    </div>
  );
};

 const mapStateToProps=(state)=>{
        return{
          data:state.data
        }
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return {
        addItem:()=>dispatch(addItem()),
        deleteItem:()=>dispatch(deleteItem())
        }
      };
    // export default connect(mapStateToProps,mapDispatchToProps) (NewTable)

export default NewTable;
