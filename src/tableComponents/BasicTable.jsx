import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { employees } from '../constants/data'
import { COLUMNS } from '../constants/columns'
import './table.css'


function BasicTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => employees, [])

    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? (
                                        <p>▼</p>
                                    ) : (
                                        <p>▲</p>
                                        )) : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default BasicTable