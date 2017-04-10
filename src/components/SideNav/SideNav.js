import React from "react"
import SideNavCategories from './SideNavCategories'
import {ButtonGroup} from 'react-bootstrap';

const SideNav = () => {
        return (
            <ButtonGroup vertical>
                <SideNavCategories/>
            </ButtonGroup>
        )

}

export default SideNav
