import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton, clickButton2,loadListEmployess } from './actions';
import './App.css';
import { employeeService } from './service';

class App extends Component {

  componentWillMount() {
    this.props.loadListEmployess( employeeService.getAll());
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
      loadListEmployess,
      newValue,
      newValue2,
      listEmployees = []
    } = this.props;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input
          onChange={this.inputChange}
          type='text'
          value={this.state.inputValue}
        />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Click me!
        </button>

        <button onClick={() => clickButton2(this.state.inputValue)}>
          Click me 2!
        </button>
        <h1>{newValue}</h1>
        <h2>{newValue2}</h2>


        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>

          {
            console.log(listEmployees)
          }
            

          </tbody>
        </table>

      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValue2: store.clickState.newValue2,
  listEmployees: store.listState.listEmployees
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton,clickButton2,loadListEmployess}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
