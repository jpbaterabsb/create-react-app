import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton, clickButton2, loadListEmployees } from './actions';
import  Container  from "@material-ui/core/Container";
import  Input  from "@material-ui/core/Input";
import './App.css';
import {TableEmployee} from "./component";
import { Button } from '@material-ui/core';


class App extends Component {

  componentDidMount() {
    this.props.loadListEmployees();
  }


  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {



    const {
      clickButton,
      clickButton2,
      newValue,
      newValue2,
      listEmployees
    } = this.props;

    return (
      <Container maxWidth="md">
      <div className="App" style={{ paddingTop: '10px' }}>
            <Input
              onChange={this.inputChange}
              type='text'
              value={this.state.inputValue}
            />
            <Button variant="contained" color="primary" onClick={() => clickButton(this.state.inputValue)}>
              Click me!
            </Button>

            <Button variant="contained" color="primary" onClick={() => clickButton2(this.state.inputValue)}>
              Click me 2!
            </Button>
            <h1>{newValue}</h1>
            <h2>{newValue2}</h2>


          <TableEmployee listEmployees={listEmployees} />

      </div>
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValue2: store.clickState.newValue2,
  listEmployees: store.listState.listEmployees
});


const mapDispatchToProps = dispatch => bindActionCreators({ clickButton, clickButton2, loadListEmployees }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
