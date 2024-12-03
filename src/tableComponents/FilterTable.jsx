import React, { useMemo} from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import { employees } from '../constants/data'
import {COLUMNS} from '../constants/columns'
import './table.css'
import {GlobalFilterInput} from './GlobalFilterInput'
 
function FilterTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => employees, [])
     
    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter)
 
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, preGlobalFilteredRows, setGlobalFilter, state} = tableInstance
  return (
    <>
      <GlobalFilterInput
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FilterTable