import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import propertyTableColumns from './PropertyLeasesTable.columns';

const PropertyLeasesTable = ({ data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable({
    data,
    columns: propertyTableColumns,
  });

  return (
    <Table responsive bordered {...getTableProps()}>
      <thead className="thead-light">
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} className="align-top" key={index}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()} key={index}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

PropertyLeasesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      tenant: PropTypes.string,
      primaryContact: PropTypes.string,
      startData: PropTypes.string,
      endData: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};

export default PropertyLeasesTable;
