import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListAlt,faFileClipboard,faPlus,faAngleDoubleLeft,faAngleDoubleRight, faHome} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import './header.css'
import Sidebar from "./Sidebar"
import Userlisting from "../Component/Userlisting"

const Header=(data)=>{
      const [collapsedbtn,setCollapsed]=useState(false)
      const handleClick=()=>{
        console.log("collapsed : "+collapsedbtn)
        setCollapsed(!collapsedbtn)
        console.log("collapsed : "+collapsedbtn)


      }
   
    return(
       <>
        <header className={`header ${collapsedbtn ? 'header1' : 'header'}`}>
        <nav>
        <div className="tglbtn">
        <button onClick={handleClick} className="btn btnarr">
        {collapsedbtn ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : <FontAwesomeIcon icon={faAngleDoubleLeft}/>}
        </button>
        </div>
        <div className="nav">
        <Link to={'/'}><FontAwesomeIcon icon={faHome}/>{' '}Home</Link>{' | '}
        <Link to={'/user'}><FontAwesomeIcon icon={faListAlt}/>{' '}List</Link>{' | '}
        <Link to={'/user/add'}><FontAwesomeIcon icon={faFileClipboard}/>{' '}Board</Link>{' | '}
        <Link to={''}><FontAwesomeIcon icon={faPlus}/>{' '}View</Link>
        </div>
        </nav>
      </header>
       <Sidebar collapsedbtn={collapsedbtn}/>
       {/* <Userlisting collapsedbtn={collapsedbtn}/> */}
       </>
      
     
    
      
    )
}

export default Header