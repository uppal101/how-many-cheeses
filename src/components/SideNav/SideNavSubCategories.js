import React from "react"
import ReactDOM from "react-dom"
import {MenuItem} from 'react-bootstrap';

const SideNavSubCategories = () => {
  return (
    <div>
      <MenuItem eventKey="1">Search By Firmness</MenuItem>
      <MenuItem eventKey="2">Search By Animal</MenuItem>
      <MenuItem eventKey="3">Search By Cheese Name</MenuItem>
      <MenuItem eventKey="4">Search For Substitute</MenuItem>
   </div>
  )
}

export default SideNavSubCategories;
