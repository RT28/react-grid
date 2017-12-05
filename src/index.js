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
    return (
      <div className="grid" ref={(grid) => {this.grid = grid; }}>
        <div className="grid-header" ref={(header) => {this.gridHeader = header; }}>
          <table>
            <tbody>
              <tr className="header-row">
                <th className="header-cell">
                  <div>Column 1</div>
                </th>
                <th className="header-cell">
                  <div>Column 2</div>
                </th>
                <th className="header-cell-grouped">
                  <div>Column 3</div>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className="header-cell">Column 3.1</td>
                          <td className="header-cell">Column 3.2</td>
                          <td className="header-cell">Column 3.3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </th>
                <th className="header-cell">Column 4</th>
                <th className="header-cell">Column 5</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid-body">
          <table>
            <tbody>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
              <tr className="grid-row">
                <th className="cell">Column 1</th>
                <th className="cell">Column 2</th>
                <th className="cell">Column 3.1</th>
                <th className="cell">Column 3.2</th>
                <th className="cell">Column 3.3</th>
                <th className="cell">Column 4</th>
                <th className="cell">Column 5</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
