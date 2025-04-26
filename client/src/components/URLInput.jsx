import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const URLInput = ({ onSearch, isLoading }) => {
    const [urls, setUrls] = useState("");

    const handleChange = (event) => {
        setUrls(event.target.value);
    };

    const handleSearchClick = () => {
        if (!urls) {
            alert("Please enter valid URLs");
            return;
        }
        onSearch(urls);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
            }}
        >
            <Typography sx={{ minWidth: "15%" }}>
                {" "}
                Enter One or More URLs
            </Typography>
            <TextField
                label="URL(s)"
                value={urls}
                onChange={handleChange}
                variant="outlined"
                placeholder="https://example.com, https://another.com"
                multiline
                sx={{ minWidth: "40%", padding: "0px" }}
            />

            <Button
                variant="contained"
                color="primary"
                sx={{ padding: "10px", minWidth: "100px", fontWeight: "bold" }}
                onClick={handleSearchClick}
                loading={isLoading}
                loadingPosition="start"
            >
                Search
            </Button>
        </Box>
    );
};

export default URLInput;
