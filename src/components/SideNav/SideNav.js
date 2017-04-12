import React from "react";
import {ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
import SearchCheeseBar from './SearchCheeseBar';
import SearchFirmnessBar from './SearchFirmnessBar';
import SearchAnimalBar from './SearchAnimalBar';
import SearchSubstituteBar from './SearchSubstituteBar';


const SideNav = (props) => {
  console.log(props)
        return (
            <ButtonGroup vertical>
              <Button>See All Cheeses</Button>
              <DropdownButton title="Search By Firmness" id="bg-vertical-dropdown-1">
                <SearchFirmnessBar/>
              </DropdownButton>
              <DropdownButton title="Search By Animal" id="bg-vertical-dropdown-1">
                <SearchAnimalBar/>
              </DropdownButton>
              <DropdownButton title="Search By Cheese Name" id="bg-vertical-dropdown-1" >
                <SearchCheeseBar/>
              </DropdownButton>
              <DropdownButton title="Search By Substitute" id="bg-vertical-dropdown-1">
                <SearchSubstituteBar/>
              </DropdownButton>
              <Button href='/FindAStore'>Find in Stores</Button>
              <DropdownButton title="Give Me That Random Cheese!" id="bg-vertical-dropdown-1" disabled>
                {/* <SearchBar/> */}
              </DropdownButton>
              <Button href='/Favorites'>See My Favorites</Button>
            </ButtonGroup>
        )

}

export default SideNav
