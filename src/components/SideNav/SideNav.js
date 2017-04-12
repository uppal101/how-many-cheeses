import React from "react"
import {ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
import SearchCheeseBar from './SearchCheeseBar'
import {cheeseQuery, setCheeseResult} from '../action/cheeseName'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
 return {
  queries: state
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({cheeseQuery, setCheeseResult}, dispatch)
}


const SideNav = (props) => {
  console.log(props)
        return (
            <ButtonGroup vertical>
              <Button>See All Cheeses</Button>
              <DropdownButton title="Search By Firmness" id="bg-vertical-dropdown-1">
                {/* <SearchBar/> */}
              </DropdownButton>
              <DropdownButton title="Search By Animal" id="bg-vertical-dropdown-1">
                {/* <SearchBar/> */}
              </DropdownButton>
              <DropdownButton title="Search By Cheese Name" id="bg-vertical-dropdown-1" >
                <SearchCheeseBar/>
              </DropdownButton>
              <DropdownButton title="Search By Substitute" id="bg-vertical-dropdown-1">
                {/* <SearchBar/> */}
              </DropdownButton>
              <Button href='/FindAStore'>Find in Stores</Button>
              <DropdownButton title="Give Me That Random Cheese!" id="bg-vertical-dropdown-1" disabled>
                {/* <SearchBar/> */}
              </DropdownButton>
              <Button href='/Favorites'>See My Favorites</Button>
            </ButtonGroup>
        )

}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
