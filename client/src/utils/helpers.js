import {
    CLS,
    PERCENTILES,
    METRICS,
    LCP_RT,
    NAVIGATION_TYPES,
    FORM_FACTORS,
} from "../constants";

export const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        console.error(`${url} is not valid`, error);
        return false;
    }
};

export const getTableHeaders = (cruxData = []) => {
    const urlHeaders = cruxData.map((item) => ({
        name: item.url,
        label: item.url,
        align: "left",
    }));

    return [{ name: "metrics", label: "Metrics" }, ...urlHeaders];
};

export const formatMetricValue = (metricName, value) => {
    if ([CLS].includes(metricName)) {
        return value; // CLS, no ms
    } else {
        return `${value} ms`; // For timings
    }
};

export const formatCruxData = (cruxData) => {
    const formattedData = Object.entries(METRICS)
        .filter(
            ([_, label]) =>
                ![LCP_RT, NAVIGATION_TYPES, FORM_FACTORS].includes(label)
        )
        .map(([name, label]) => {
            const row = [{ type: "metrics", id: label, value: name }];
            cruxData.forEach((item) => {
                const dataObj = item?.data?.record.metrics;
                row.push({
                    id: item.url,
                    value: formatMetricValue(
                        label,
                        dataObj?.[label][PERCENTILES].p75
                    ),
                });
            });

            return row;
        });

    return formattedData;
};
