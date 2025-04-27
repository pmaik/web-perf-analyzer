import {
    CLS,
    PERCENTILES,
    METRICS,
    LCP_RT,
    NAVIGATION_TYPES,
    FORM_FACTORS,
    AVERAGE,
    SUM,
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

    return [
        { name: "metrics", label: "Metrics", align: "left" },
        ...urlHeaders,
        { name: AVERAGE, label: "Average", align: "right" },
        { name: SUM, label: "Sum", align: "right" },
    ];
};

export const formatMetricValue = (row, value) => {
    const metricName = row?.[0].id;
    if ([CLS].includes(metricName)) {
        return value; // CLS, no ms
    } else {
        return `${value} ms`; // For timings
    }
};

export const formatCruxData = (cruxData = []) => {
    const formattedData = Object.entries(METRICS)
        .filter(
            ([_, label]) =>
                ![LCP_RT, NAVIGATION_TYPES, FORM_FACTORS].includes(label)
        )
        .map(([name, label]) => {
            const row = [{ type: "metrics", id: label, value: name }];
            let sum = 0;

            cruxData.forEach((item) => {
                const dataObj = item?.data?.record.metrics;
                const p75Value = dataObj?.[label][PERCENTILES].p75;
                sum += Number(p75Value);
                row.push({
                    id: item.url,
                    value: p75Value,
                });
            });

            // Push average and sum in the row
            const average = sum / cruxData.length;
            row.push({
                id: AVERAGE,
                value: Number(average.toFixed(2)),
            });
            row.push({
                id: SUM,
                value: sum,
            });

            return row;
        });

    return formattedData;
};

export const descendingComparator = (a, b, orderBy) => {
    const aCell = a.find((cell) => [cell.id, cell.type].includes(orderBy));
    const bCell = b.find((cell) => [cell.id, cell.type].includes(orderBy));

    if (!aCell || !bCell) return 0;

    if (bCell.value < aCell.value) {
        return -1;
    }
    if (bCell.value > aCell.value) {
        return 1;
    }
    return 0;
};

export const getComparator = (order, orderBy) => {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};
