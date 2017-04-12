import React from "react"
import TextBoxTitle from "./TextBoxTitle"
import TextBox from "./TextBox"

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <TextBoxTitle/>
        <TextBox/>
      </div>
    );
  }
}

export default TextArea;
