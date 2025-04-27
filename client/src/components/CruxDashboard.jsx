import React, { useState } from "react";
import { Box, Typography, Alert } from "@mui/material";
import URLInput from "./URLInput";
import PerformanceTable from "./PerformanceTable";
import { useGetCruxDataMutation } from "../features/api/cruxApi";

const CruxDashboard = () => {
    const [getCruxData, { error, isLoading }] = useGetCruxDataMutation();
    const [tableData, setTableData] = useState(null);

    const handleFetch = async (urls) => {
        try {
            const res = await getCruxData(urls).unwrap();
            const filteredData = res?.results.filter((d) => !d.error);
            setTableData(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                paddingTop: "20px",
            }}
        >
            <Typography variant="h4" component="h1">
                Web Performance Analyzer
            </Typography>

            <URLInput onSearch={handleFetch} isLoading={isLoading} />

            <Box
                sx={{
                    border: "1px solid gray",
                    borderRadius: "4px",
                    padding: "20px",
                    minWidth: "90%",
                    minHeight: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#E8E8E8",
                }}
            >
                {error ? (
                    <Alert severity="error" sx={{ marginTop: 2 }}>
                        Failed to fetch data: {error.message}
                    </Alert>
                ) : (
                    <PerformanceTable isLoading={isLoading} data={tableData} />
                )}
            </Box>
        </Box>
    );
};

export default CruxDashboard;
