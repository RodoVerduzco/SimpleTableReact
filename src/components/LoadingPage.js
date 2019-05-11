/* jshint esversion:6 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import loader from '../img/loader.gif';

/**
 *  Loading Screen to wait for the data to load
 */
export class LoadingPage extends React.Component {

    render(){
        return(
          <div className="container">
            <div className="row justify-content-md-center">
              <img src={loader} alt="loading..." />
            </div>
          </div>
        );
    }
}
