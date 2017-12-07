import React from 'react';
import './styles.css';

export default class Grid extends React.Component {
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

      </div>
    );
  }
}
