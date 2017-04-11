import React from "react"
import {ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
import SearchBar from '../Common/SearchBar.js'

const SideNav = () => {
        return (
            <ButtonGroup vertical>
              <Button>See All Cheeses</Button>
              <DropdownButton title="Search By Firmness" id="bg-vertical-dropdown-1">
                <SearchBar/>
              </DropdownButton>
              <DropdownButton title="Search By Animal" id="bg-vertical-dropdown-1">
                <SearchBar/>
              </DropdownButton>
              <DropdownButton title="Search By Cheese Name" id="bg-vertical-dropdown-1">
                <SearchBar/>
              </DropdownButton>
              <DropdownButton title="Search By Substitute" id="bg-vertical-dropdown-1">
                <SearchBar/>
              </DropdownButton>
              <Button disabled>Find in Stores</Button>
              <DropdownButton title="Give Me That Random Cheese!" id="bg-vertical-dropdown-1" disabled>
                <SearchBar/>
              </DropdownButton>
              <Button disabled>See My Favorites</Button>
            </ButtonGroup>
        )

}

export default SideNav
