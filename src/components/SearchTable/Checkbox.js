import React, {Component} from 'react';
import { Checkbox } from 'react-bootstrap';

class FavoritesCheckbox extends Component {
    render() {
        return (
          <Checkbox checked readOnly>
            Favorites
          </Checkbox>
        )
    }
}

export default FavoritesCheckbox
