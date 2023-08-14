import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, onGoToPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faAngleDoubleLeft}/>
      </button>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faAngleDoubleRight}/>
      </button>
      <span>Go to Page: </span>
      <input
        type="number"
        min="1"
        max={totalPages}
        value={currentPage}
        contentEditable
        onChange={(e) => onGoToPage(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Pagination;

