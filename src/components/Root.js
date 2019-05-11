/* jshint esversion:6 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Table } from './Table.js';

/**
 * Handles the View of the main page
 */
export class Root extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: props.data,
      };
    }

    render(){
        return(
          <div className="container">
            <div className="row justify-content-md-center">
                <h2>Random Users</h2>
                <Table tableData={ this.state.data }/>
            </div>
          </div>
        );
    }
}
