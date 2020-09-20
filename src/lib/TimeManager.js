import moment from 'moment';

class TimeManager {
    /**
     * Get the data diff in seconds.
     * @param string date
     */
    toSeconds (date) {
        return moment().diff(moment(date), 'seconds');
    }

    toFormattedTime (totalSeconds) {
        return new Date(totalSeconds * 1000).toISOString().substr(11, 8);
    }
}

export default new TimeManager