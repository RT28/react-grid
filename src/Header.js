import React from 'react';
import './styles.css';

export default class Header extends React.Component {
  render() {
    const columns = this.props.config.columns.map((column, index) => {
      return (
        <th className={`header-cell ${column.headerCls}`} key={index}>
          <div>{column.headerRenderer ? column.headerRenderer(index, this.props.config.columns, this.props.config.data) : column.title}</div>
        </th>
      );
    });
    return (
      <table>
        <tbody>
          <tr className="header-row">
            {columns}
          </tr>
        </tbody>
      </table>
    );
  }
}
