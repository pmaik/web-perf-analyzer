import { styled } from "@mui/material/styles";
import { TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`& .MuiTableSortLabel-root`]: {
        color: theme.palette.common.white,
        "&:hover": {
            color: theme.palette.common.white,
        },
        "&.Mui-active": {
            color: theme.palette.common.white,
        },
        "&.Mui-active:hover": {
            color: theme.palette.common.white,
        },
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

export { StyledTableRow, StyledTableCell };
