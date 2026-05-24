import {
    getDashboardChartsApi,
    getDashboardSummaryApi,
} from "../api/dashboardApi";

export const getDashboardData = async () => {

    const [
        summary,
        charts,
    ] = await Promise.all([
        getDashboardSummaryApi(),
        getDashboardChartsApi(),
    ]);

    return {
        summary: summary.data,
        charts: charts.data,
    };
};