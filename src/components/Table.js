/* jshint esversion:6 */
import React from 'react';
import Moment from 'moment';

/**
 *  Creates Thead of the table with the required
 *  parameters
 */
const TableHeader = ()=> {
  return (
    <thead className="thead-dark">
     <tr>
       <th scope="col"> Name         </th>
       <th scope="col"> Gender       </th>
       <th scope="col"> Email        </th>
       <th scope="col"> Cellphone    </th>
       <th scope="col"> Age          </th>
       <th scope="col"> Birthday     </th>
       <th scope="col"> Nationallity </th>
       <th scope="col"> Location     </th>
     </tr>
   </thead>
  );
};

/**
 *  Creates the rows of the table based on the data received
 *  and formats the Tbody
 */
const TableBody = (props)=> {
  var rows = props.data.map((row, index)=> {
    return(
      <tr key={index}>
        <td> {formatName(row.name)}         </td>
        <td> {toTitleCase(row.gender)}      </td>
        <td> {row.email}                    </td>
        <td> {row.cell}                     </td>
        <td> {row.dob.age}                  </td>
        <td> {formatDate(row.dob.date)}     </td>
        <td> {row.nat}                      </td>
        <td> {formatLocation(row.location)} </td>
      </tr>
    );
  });

  return (
    <tbody>
      {rows}
    </tbody>
  );
};

/**
 *  @desc - Sets the first letter of a string to upperCase
 *  @param str - String to be converted
 *  @return {string} - Converted String to title case
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

/**
 *  @desc - Joins the name values, and converts them to title case
 *  @param name Name object containing title, first name and last name
 *  @return {string} - formated name
 */
function formatName (name) {
  var formated_name = toTitleCase(name.title) + ". " +
                      toTitleCase(name.first) + " "  +
                      toTitleCase(name.last);
  return formated_name;
}

/**
 *  @desc - Joins the location values, and converts them to title case
 *  @param loc - Object containing the location information
 *  @return {string} - formated location
 */
function formatLocation (loc) {
  var formated_location = toTitleCase(loc.street) + ", " +
                          toTitleCase(loc.city) + ", "  +
                          toTitleCase(loc.state);
  return formated_location;
}

/**
 *  @desc - Sets the  date in a more readable format
 *  @param data Date to be formated
 *  @return {string} - formated date
 */
function formatDate (date) {
  var formated_date = Moment(date).format('MM/DD/YYYY');
  return formated_date;
}

export class Table extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: props.tableData
    };
  }

  render() {
    return (
        <div className="mx-auto mt-3">
          <div  className="mt-2">
            <table className="table">
              <TableHeader/>
              <TableBody data={ this.state.data }/>
            </table>
          </div>
        </div>
    );
  }
}
