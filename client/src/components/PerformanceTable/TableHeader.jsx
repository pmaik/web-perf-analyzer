import React from "react";
import { Box, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { StyledTableCell } from "./styled";

const TableHeader = ({ tableHeaders, order, orderBy, onRequestSort }) => {
    const createSortHandler = (property) => {
        onRequestSort(property);
    };

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
                        sortDirection={orderBy === column.name ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === column.name}
                            direction={orderBy === column.name ? order : ""}
                            onClick={() => createSortHandler(column.name)}
                        >
                            {column.label}
                            {orderBy === column.name ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
