import React, { useState} from 'react'; 
import Pagination from './Pagination';
import ABC_DATA from './ABC_DATA.json';
import './tablestyle.css';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { FetchUserList,Removeuser} from "../Redux/Action";
// import db from './db.json'
const itemsPerPage = 10;

const NewTable = () => {
    // useEffect(() => {
    //     props.loaduser();
    // }, [])
    // const handledelete = (code) => {
    //     if (window.confirm('Do you want to remove?')) {
    //          props.removeuser(code);
    //          props.loaduser();
    //          toast.success('User removed successfully.')
    //     }
    // }
  // const [tableData, setTableData] = useState([]);
  const [isTableCollapsed, setTableCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

   const data = ABC_DATA;
     //const data=db;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleToggle = () => {
    setTableCollapsed(!isTableCollapsed);
  };

  const onPageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    // props.user.loading ? <div><h2>Loading...</h2></div> :
    // props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
    <div>
      <button onClick={handleToggle} className="openclosebtn">
        {isTableCollapsed ? 'Close' : 'Open'}
      </button>
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
     {isTableCollapsed&& <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />}
    </div>
  );
};
// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         loaduser: () => dispatch(FetchUserList()),
//         removeuser:(code)=>dispatch(Removeuser(code))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(NewTable);
export default NewTable;
