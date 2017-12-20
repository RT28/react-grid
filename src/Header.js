import React from 'react';
import './styles.css';

export default class Header extends React.Component {
  renderColumns(columns, columnTemplate) {
    return columns.map((column, index) => {
      let subHeaders;
      if (column.columns && column.columns.length > 0) {
        subHeaders = column.columns ? this.renderColumns(column.columns, []) : null;
      }
      return (
        <th className={`header-cell ${column.headerCls}`} key={index}>
          <div>
          {column.headerRenderer ? column.headerRenderer(index, this.props.config.columns, this.props.config.data) : column.title}
          {subHeaders}
          </div>
        </th>
      );
    });
  }
  render() {
    const columns = [];
    return (
      <table>
        <tbody>
          <tr className="header-row">
            {this.renderColumns(this.props.config.columns, columns)}
          </tr>
        </tbody>
      </table>
    );
  }
}
