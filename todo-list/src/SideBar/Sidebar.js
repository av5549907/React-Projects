import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faHome, faSearch} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = (props) => {
  const {collapsedbtn}=props;
  const buttonClicked=useSelector(state=>state.clickButton)
  console.log("sidebar button click "+buttonClicked);
  return (
    <aside className={classNames('sidebar',!collapsedbtn&&'aside')}>
      <div>
      <FontAwesomeIcon icon={faSearch} className="search"/> <input type="text" placeholder='Search'/>
      </div>
        <div className='menu'>
        <Link to={'/'}><FontAwesomeIcon icon={faHome}/>{' '}Home</Link>{' | '}
        </div>
    </aside>
  );
};

export default Sidebar;

