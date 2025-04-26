import React, { useMemo } from "react";
import {
    Box,
    CircularProgress,
    Typography,
    Alert,
    TableContainer,
    Table,
    TableBody,
    Paper,
    Button,
} from "@mui/material";
import TableHeader from "./TableHeader";
import { StyledTableRow, StyledTableCell, StyledTooltip } from "./styled";
import { getTableHeaders, formatCruxData } from "../../utils/helpers";

const PerformanceTable = ({ isLoading, data }) => {
    if (isLoading) {
        return (
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <CircularProgress sx={{ marginRight: 2 }} size={30} />
                <Typography>Loading CrUX data...</Typography>
            </Box>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Alert severity="info">
                No CrUX data available for the provided URL(s).
            </Alert>
        );
    }

    const tableHeaders = useMemo(() => getTableHeaders(data), [data]);
    const formattedData = useMemo(() => formatCruxData(data), [data]);

    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table
                    stickyHeader
                    sx={{ minWidth: 700 }}
                    aria-label="sticky table"
                >
                    <TableHeader tableHeaders={tableHeaders} />

                    <TableBody>
                        {formattedData?.map((row, index) => (
                            <StyledTableRow key={index}>
                                {row.map((cell) => (
                                    <StyledTableCell
                                        component="th"
                                        scope="row"
                                        key={cell.id}
                                    >
                                        {cell.type === "metrics" ? (
                                            <StyledTooltip
                                                title={cell.id}
                                                placement="top-end"
                                                arrow
                                            >
                                                <Button sx={{ color: "black" }}>
                                                    {cell.value}
                                                </Button>
                                            </StyledTooltip>
                                        ) : (
                                            cell.value
                                        )}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default PerformanceTable;
