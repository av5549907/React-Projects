import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList,Removeuser} from "../Redux/Action";
import '../Table/tablestyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown,faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Table/Pagination";
import { faListAlt,faFileClipboard,faPlus,faAngleDoubleLeft,faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons"
import './header.css'
import classNames from "classnames";
// import Header from "../SideBar/Header";
// import { collapsed } from "../SideBar/Header";



const itemsPerPage = 10;

const Userlisting = (props,collapsedbtn) => {
    useEffect(() => {
         props.loaduser() 
        }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.removeuser(code);
             props.loaduser();
             toast.success('User removed successfully.')
        }
    }
   
  const [toggleTable,setToggleTable]=useState(true)  ;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(props.user.userlist.length / itemsPerPage);
  const totalData=props.user.userlist;

  const onPageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const onGoToPage=(pageNumber)=>{
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
  }
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = props.user.userlist.slice(startIndex, endIndex);

  const [collapsed,setCollapsed]=useState(false)
  const handleClick=()=>{
      setCollapsed(!collapsed)
  }

  const handleToggle=()=>{
    setToggleTable(!toggleTable)
  }
  const {collapsedbtns}=collapsedbtn;
  console.log("collapsed userlisting : "+{collapsedbtns})

    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
        
                <div className={classNames('main',!collapsedbtns&&'main1')}>
                  <div className="btnstyle">
                    <button onClick={handleToggle} className="btn"><FontAwesomeIcon icon={faCircleChevronDown}/>{toggleTable? 'Close': 'Open'}</button>
                   </div>
                  { toggleTable && <div>
            
                        <div className="card-body tablecls">
                            <table>
                                <thead className="bg-dark text-white">
                                    <tr>
                                        {/* <th>Code</th> */}
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th className="tdbtn">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        currentData&&currentData.map(item=>
                                      //  props.user.userlist && props.user.userlist.map(item =>
                                            <tr key={item.id}>
                                                {/* <td>{item.id}</td> */}
                                                <td><input type="checkbox"/></td>
                                                <td className="tdname">{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.role}</td>
                                                <td className="tdbtn">
                                                    <Link to={'/user/edit/' + item.id} className="btn btncolor"><FontAwesomeIcon icon={faEdit}/></Link> {' | '}
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btncolor"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                            
                        </div>
                        <div className="btnstyle" >
                            <Link to={'/user/add'} className="btn btncolor">[+]New Task</Link>
                        </div>
                        {toggleTable&& <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            onGoToPage={onGoToPage}
            />}
                    </div>
                  }
                </div>
                
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser:(code)=>dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);