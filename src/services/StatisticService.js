import http from "../http-common";

class StatisticService {
    getCountDownloadeds() {
        return http.get(`/Statistics/GetCountDownloaded`);
    }

    getLastDownloadeds() {
        return http.get(`/Statistics/GetLastDownloaded`);
    }
}

export default new StatisticService();