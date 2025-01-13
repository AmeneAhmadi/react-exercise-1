import { Component } from "react";

export default class Part4 extends Component {
  constructor() {
    super();
    this.state = {
      title: "Click Me!",
    };
  }
  handleClick=()=>{
    alert("You Clicked!");
    this.setState({title: "Button Text Has Been Changed Successfully!"})
  }
  render() {
    return (
        <>
        <h6>Part4</h6>
        <p>If you click on this button, it will show an alert, then the button&apos;s text will be changed</p>
          <button type="button" onClick={this.handleClick}>
            {this.state.title}
          </button>
        </>
      );
  }
}
