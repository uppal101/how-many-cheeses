import React from "react"
import SideNavSubCategories from './SideNavSubCategories'
import {Button, DropdownButton} from 'react-bootstrap'

const SideNavCategories = () => {
  return (
    <div>
      <Button>See All Cheeses</Button>
      <DropdownButton title="Search" id="bg-vertical-dropdown-1">
        <SideNavSubCategories/>
      </DropdownButton>
      <Button>Find in Stores</Button>
      <Button>Give Me That Random Cheese!</Button>
      <Button>See My Favorites</Button>
    </div>
  )
}

export default SideNavCategories;
