import React from "react"
import ReactDOM from "react-dom"
import SideNavCategories from './SideNavCategories'
import {ButtonGroup, DropdownButton, MenuItem, Button}  from 'react-bootstrap';

const SideNav = () => {
  return (

    <ButtonGroup vertical>

      <Button>See All Cheeses</Button>
      <DropdownButton title="Search" id="bg-vertical-dropdown-1">
        <MenuItem eventKey="1">Search By Firmness</MenuItem>
        <MenuItem eventKey="2">Search By Animal</MenuItem>
        <MenuItem eventKey="3">Search By Cheese Name</MenuItem>
        <MenuItem eventKey="4">Search For Substitute</MenuItem>
      </DropdownButton>
      <Button>Find in Stores</Button>
      <Button>Give Me That Random Cheese!</Button>
      <Button>See My Favoritessss</Button>

    </ButtonGroup>



  )
}

export default SideNav
