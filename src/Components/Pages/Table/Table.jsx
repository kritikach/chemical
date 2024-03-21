import React from 'react';
import './Table.css'; // Import CSS file for styling

const Table = () => {
  // Generate sample data for 10 rows
  const rows = Array.from({ length: 10 }, (_, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {/* Generate cells for 7 columns */}
        {Array.from({ length: 7 }, (_, colIndex) => {
          return <td key={colIndex}>Row {rowIndex + 1}, Col {colIndex + 1}</td>;
        })}
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {/* Table header with 7 columns */}
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
            <th>Column 7</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
