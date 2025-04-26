import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { StyledTableCell } from "./styled";

const TableHeader = ({ tableHeaders }) => {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell align="center" colSpan={tableHeaders.length}>
                    CrUX Data
                </StyledTableCell>
            </TableRow>
            <TableRow>
                {tableHeaders.map((column) => (
                    <StyledTableCell
                        key={column.name}
                        align={column.align}
                        // style={{ top: 57, minWidth: column.minWidth }}
                    >
                        {column.label}
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
