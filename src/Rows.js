import React from 'react';

export default class Rows extends React.Component {
  renderRows() {
    console.log(this.props.grid.flatColumns);
    const rows = this.props.config.data;
    return rows.map((row, rowIndex) => {
      const cells = this.props.grid.flatColumns.map((cell, cellIndex) => <th className={`cell ${cell.cls} ${cell.cellCls}`} key={`${rowIndex}${cellIndex}`}>{row[cell.name]}</th>);
      return (
        <tr className="grid-row" key={rowIndex}>
          {cells}
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}
