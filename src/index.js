import React from 'react';
import Header from './Header';
import Rows from './Rows';
import './styles.css';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flatColumns: [],
    };
  }

  componentWillMount() {
    this.setState({
      flatColumns: this.getFlatColumns(this.props.config.columns, []),
    });
  }

  getFlatColumns = (cols, columns) => {
    // calculate all flat columns, i.e leaf columns or the ones that do not contain any subheaders
    for (let index = 0; index < cols.length; index += 1) {
      if (cols[index].columns && cols[index].columns.length > 0) {
        this.getFlatColumns(cols[index].columns, columns);
      } else {
        columns.push(cols[index]);
      }
    }
    return columns;
  }

  componentDidMount() {
    const { grid } = this;
    grid.addEventListener('scroll', this.syncGridScroll);
  }

  componentWillUnmount() {
    this.grid.removeEventListener('scroll', this.syncGridScroll);
  }

  syncGridScroll = (e) => {
    const { gridHeader } = this;
    gridHeader.style.top = `${this.grid.scrollTop}px`;
  }

  render() {
    const gridConfig = this.props.config;
    return (
      <div className={`grid ${gridConfig.cls}`} ref={(grid) => {this.grid = grid; }}>
        <div className="grid-header" ref={(header) => {this.gridHeader = header; }}>
          <Header {...this.props} grid={this.state} />
        </div>
        <div className="grid-body">
          <Rows {...this.props} grid={this.state} />
        </div>
      </div>
    );
  }
}
