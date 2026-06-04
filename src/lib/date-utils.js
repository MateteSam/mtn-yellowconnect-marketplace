import moment from 'moment';

((self) => {
    const monthsNum = new Map();
    const monthsStr = new Map();
    const monthsFullStr = new Map();
    const monthsEndNum = new Map();
    const monthsDoubleNumStr = new Map();
    const daysDoubleNumStr = new Map();
    const weekDaysStr = new Map();

    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let n = 0; n < monthArray.length; n++) {
        const m = monthArray[n];
        const mShort = m.substring(0, 3);

        monthsNum.set(mShort, n);
        monthsNum.set(m, n);

        let nn = n + 1;
        const dd = nn < 10 ? ("0" + nn) : String(nn);
        monthsNum.set(dd, n);

        monthsStr.set(n, mShort);
        monthsFullStr.set(n, m);
        monthsDoubleNumStr.set(n, dd);
    }

    for (let n = 1; n <= 31; n++) {
        const dd = n < 10 ? ("0" + n) : String(n);
        daysDoubleNumStr.set(n, dd);
    }

    weekDaysStr.set(1, "Sunday");
    weekDaysStr.set(2, "Monday");
    weekDaysStr.set(3, "Tuesday");
    weekDaysStr.set(4, "Wednesday");
    weekDaysStr.set(5, "Thursday");
    weekDaysStr.set(6, "Friday");
    weekDaysStr.set(7, "Saturday");

    monthsEndNum.set(0, 31);
    monthsEndNum.set(1, 29);
    monthsEndNum.set(2, 31);
    monthsEndNum.set(3, 30);
    monthsEndNum.set(4, 31);
    monthsEndNum.set(5, 30);
    monthsEndNum.set(6, 31);
    monthsEndNum.set(7, 31);
    monthsEndNum.set(8, 30);
    monthsEndNum.set(9, 31);
    monthsEndNum.set(10, 30);
    monthsEndNum.set(11, 31);

    const yearArray = [];
    const startY = new Date().getFullYear();
    for (let n = startY; n >= 1900; n--) {
        yearArray.push(n);
    }

    const monthShortArray = monthArray.map(m => m.substring(0, 2));

    class Dates {
        static getWeekday(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            return date.toString().substring(0, 3);
        }

        static formatDate(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            const d = date.getDate();
            const dd = (d < 10) ? ("0" + d) : d;
            return dd + '-' + monthsStr.get(date.getMonth()) + '-' + date.getFullYear();
        }

        static formatTime(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            const hrs = (hours < 10) ? ("0" + hours) : hours;
            const min = (minutes < 10) ? ("0" + minutes) : minutes;
            const sec = (seconds < 10) ? ("0" + seconds) : seconds;

            return hrs + ":" + min + ":" + sec;
        }

        static formatTimeExcSec(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            const hours = date.getHours();
            const minutes = date.getMinutes();

            const hrs = (hours < 10) ? ("0" + hours) : hours;
            const min = (minutes < 10) ? ("0" + minutes) : minutes;

            return hrs + ":" + min;
        }

        static formatTimestamp(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            const d = date.getDate();
            const dd = (d < 10) ? ("0" + d) : d;
            const mon = monthsStr.get(date.getMonth());
            const yr = date.getFullYear();

            return dd + "-" + mon + "-" + yr + " " + Dates.formatTime(date);
        }

        static formatTimestampSQL(date) {
            if (!date)
                return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }

            return Dates.formatDateSQL(date) + " " + Dates.formatTime(date);//+date;
        }

        static formatDateSQL(date) {
            if (!date)
                return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            const d = date.getDate();
            const dd = (d < 10) ? ("0" + d) : d;
            const mon = monthsDoubleNumStr.get(date.getMonth());
            const yr = date.getFullYear();

            return yr + "-" + mon + "-" + dd;
        }

        static formatDateTime(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            const d = date.getDate();
            const dd = (d < 10) ? ("0" + d) : d;
            const mon = monthsStr.get(date.getMonth());
            const yr = date.getFullYear();

            const hours = date.getHours();
            const minutes = date.getMinutes();

            const hrs = (hours < 10) ? ("0" + hours) : hours;
            const min = (minutes < 10) ? ("0" + minutes) : minutes;

            return dd + "-" + mon + "-" + yr + " " + hrs + ":" + min;
        }

        static formatDateTimeExcYear(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }
            const d = date.getDate();
            const dd = (d < 10) ? ("0" + d) : d;
            const mon = monthsStr.get(date.getMonth());
            const yr = date.getFullYear();

            const hours = date.getHours();
            const minutes = date.getMinutes();

            const hrs = (hours < 10) ? ("0" + hours) : hours;
            const min = (minutes < 10) ? ("0" + minutes) : minutes;

            return dd + "-" + mon + " " + hrs + ":" + min;
        }

        static formatYearMonth(date) {
            if (!date)
                return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }

            const mon = monthsStr.get(date.getMonth());
            const yr = date.getFullYear();

            return yr + "-" + mon;
        }

        static formatMonthYear(date) {
            if (!date)
                return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date)) {
                return null;
            }

            const mon = monthsStr.get(date.getMonth());
            const yr = date.getFullYear();

            return mon + "-" + yr;
        }

        static formatDateRange(startD, endD) {
            let dateS;
            if (startD.getFullYear() === endD.getFullYear()) {
                if (startD.getMonth() === endD.getMonth()) {
                    dateS = Dates.formatDateOnly(startD) + ' - ' + Dates.formatDateOnly(endD) + ', ' + Dates.formatDateExcDate(startD);
                } else {
                    dateS = Dates.formatDateExcYear(startD) + ' - ' + Dates.formatDateExcYear(endD) + ', ' + startD.getFullYear();
                }
            } else {
                dateS = `${Dates.formatDate(startD)} - ${Dates.formatDate(endD)}`;
            }
            return dateS;
        }

        static getWeeksStartAndEndDateRange(startDate, endDate) {
            const dates = [];
            let currDate = startDate;
            if (!endDate) {
                endDate = startDate;
            }
            while (currDate <= endDate) {
                const year = currDate.getFullYear();
                const month = currDate.getMonthsStr();
                const start = currDate.toMonthStartDate();
                const end = currDate.toMonthEndDate();
                dates.push({
                    year,
                    month,
                    start,
                    end,
                    currDate
                });

                currDate = currDate.addWeeks(1);
            }
            return dates;
        }

        static getWeeksStartAndEndDateRangeSQL(startDate, endDate) {
            return Dates.getWeeksStartAndEndDateRange(startDate, endDate).map(({ year, month, start, end, currDate }) => ({
                year,
                month,
                start: Dates.formatDateSQL(start),
                end: Dates.formatDateSQL(end),
                currDate: Dates.formatDateSQL(currDate)
            }));
        }

        static getMonthsStartAndEndDateRange(startDate, endDate) {
            const dates = [];
            if (!!startDate) {
                startDate = Dates.parse(startDate);
            }
            if (!!endDate) {
                endDate = Dates.parse(endDate);
            }

            let currDate = startDate;
            if (!endDate) {
                endDate = startDate;
            }
            while (currDate <= endDate) {
                const year = currDate.getFullYear();
                const month = currDate.getMonthsStr();
                const start = currDate.toMonthStartDate();
                const end = currDate.toMonthEndDate();
                dates.push({
                    year,
                    month,
                    start,
                    end,
                    currDate
                });

                currDate = currDate.addMonths(1);
            }
            return dates;
        }

        static getMonthsStartAndEndDateRangeSQL(startDate, endDate) {
            return Dates.getMonthsStartAndEndDateRange(startDate, endDate).map(({ year, month, start, end, currDate }) => ({
                year,
                month,
                start: Dates.formatDateSQL(start),
                end: Dates.formatDateSQL(end),
                currDate: Dates.formatDateSQL(currDate)
            }));
        }

        static getQuartersStartAndEndDateRange(startDate, endDate) {
            const dates = [];
            if (!isDate(startDate)) {
                startDate = Dates.parse(startDate);
            }
            if (!isDate(endDate)) {
                endDate = Dates.parse(endDate);
            }
            let currDate = startDate;
            if (!endDate) {
                endDate = startDate;
            }
            while (currDate <= endDate) {
                const year = currDate.getFullYear();
                const month = currDate.getMonthsStr();
                const start = currDate.toQuarterStartDate();
                const end = currDate.toQuarterEndDate();
                dates.push({
                    year,
                    month,
                    start,
                    end,
                    currDate
                });

                currDate = currDate.addMonths(3);
            }
            return dates;

            // let {startYear, endYear, includeAllQuartersInCurrYear = false} = args || {};
            // const currentYear = startYear || new Date().getFullYear();
            // endYear = endYear || 2000;
            //
            // const quarters = [];
            //
            // if(includeAllQuartersInCurrYear) {
            //     for (let year = currentYear; year >= endYear; year--) {
            //         for (let quarter = 4; quarter >= 1; quarter--) {
            //             const startMonth = (quarter - 1) * 3;
            //             const endMonth = quarter * 3 - 1;
            //
            //             const start = new Date(year, startMonth, 1);
            //             const end = new Date(year, endMonth, 1).toMonthEndDate();
            //
            //             quarters.push({
            //                 year,
            //                 quarter,
            //                 start,
            //                 end,
            //             });
            //         }
            //     }
            //     return quarters;
            // }
            //
            // const currentMonth = new Date().getMonth();
            // let currDate = Math.floor(currentMonth / 3) + 1;
            //
            // for (let year = currentYear; year >= endYear; year--) {
            //     for (let quarter = currDate; quarter >= 1; quarter--) {
            //         if (year === currentYear && quarter < currDate) {
            //             break;
            //         }
            //         const startMonth = (quarter - 1) * 3;
            //         const endMonth = quarter * 3 - 1;
            //
            //         const start = new Date(year, startMonth, 1);
            //         const end = new Date(year, endMonth, 1).toMonthEndDate();
            //
            //         quarters.push({
            //             year,
            //             quarter,
            //             start,
            //             end,
            //             currDate
            //         });
            //     }
            //     currDate = 4;
            // }
            // return quarters;
        }

        static getQuartersStartAndEndDateRangeSQL(args) {
            let { startYear, endYear, includeAllQuartersInCurrYear = false } = args || {};
            return Dates.getQuartersStartAndEndDateRange({ startYear, endYear, includeAllQuartersInCurrYear }).map(({ year, quarter, start, end, currDate }) => ({
                year,
                quarter,
                start: Dates.formatDateSQL(start),
                end: Dates.formatDateSQL(end),
                currDate: Dates.formatDateSQL(currDate)
            }));
        }

        static getHalvesStartAndEndDateRange(startDate, endDate) {
            const dates = [];
            if (!isDate(startDate)) {
                startDate = Dates.parse(startDate);
            }
            if (!isDate(endDate)) {
                endDate = Dates.parse(endDate);
            }
            let currDate = startDate;
            if (!endDate) {
                endDate = startDate;
            }
            while (currDate <= endDate) {
                const year = currDate.getFullYear();
                const month = currDate.getMonthsStr();
                const start = currDate.toHalfStartDate();
                const end = currDate.toHalfEndDate();
                dates.push({
                    year,
                    month,
                    start,
                    end,
                    currDate
                });

                currDate = currDate.addMonths(6);
            }
            return dates;

            // let {startYear, endYear, includeAllHalvesInCurrYear = false} = args || {};
            // const currentYear = startYear || new Date().getFullYear();
            // endYear = endYear || 2000;
            //
            // const halves = [];
            //
            // if(includeAllHalvesInCurrYear) {
            //     for (let year = currentYear; year >= endYear; year--) {
            //         for (let half = 2; half >= 1; half--) {
            //             const startMonth = (half - 1) * 6;
            //             const endMonth = half * 6 - 1;
            //
            //             const start = new Date(year, startMonth, 1);
            //             const end = new Date(year, endMonth, 1).toMonthEndDate();
            //
            //             halves.push({
            //                 year,
            //                 half,
            //                 start,
            //                 end,
            //             });
            //         }
            //     }
            //     return halves;
            // }
            //
            // const currentMonth = new Date().getMonth();
            // let currentHalf = Math.floor(currentMonth / 6) + 1;
            //
            // for (let year = currentYear; year >= endYear; year--) {
            //     for (let half = currentHalf; half >= 1; half--) {
            //         if (year === currentYear && half < currentHalf) {
            //             break;
            //         }
            //         const startMonth = (half - 1) * 6;
            //         const endMonth = half * 6 - 1;
            //
            //         const start = new Date(year, startMonth, 1);
            //         const end = new Date(year, endMonth, 1).toMonthEndDate();
            //
            //         halves.push({
            //             year,
            //             half,
            //             start,
            //             end,
            //             currDate
            //         });
            //     }
            //     currentHalf = 2;
            // }
            // return halves;
        }

        static getHalvesStartAndEndDateRangeSQL(args) {
            let { startYear, endYear, includeAllHalvesInCurrYear = false } = args || {};
            return Dates.getHalvesStartAndEndDateRange({ startYear, endYear, includeAllHalvesInCurrYear }).map(({ year, half, start, end, currDate }) => ({
                year,
                half,
                start: Dates.formatDateSQL(start),
                end: Dates.formatDateSQL(end),
                currDate: Dates.formatDateSQL(currDate)
            }));
        }

        static getYearsStartAndEndDateRange(startDate, endDate) {
            const dates = [];
            if (!isDate(startDate)) {
                startDate = Dates.parse(startDate);
            }
            if (!isDate(endDate)) {
                endDate = Dates.parse(endDate);
            }
            let currDate = startDate;
            if (!endDate) {
                endDate = startDate;
            }
            while (currDate <= endDate) {
                const year = currDate.getFullYear();
                const month = currDate.getMonthsStr();
                const start = currDate.toYearStartDate();
                const end = currDate.toYearEndDate();
                dates.push({
                    year,
                    month,
                    start,
                    end,
                    currDate
                });

                currDate = currDate.addYears(1);
            }
            return dates;
        }

        static getYearsStartAndEndDateRangeSQL(args) {
            let { startYear, endYear, includeAllHalvesInCurrYear = false } = args || {};
            return Dates.getHalvesStartAndEndDateRange({ startYear, endYear, includeAllHalvesInCurrYear }).map(({ year, half, start, end, currDate }) => ({
                year,
                half,
                start: Dates.formatDateSQL(start),
                end: Dates.formatDateSQL(end),
                currDate: Dates.formatDateSQL(currDate)
            }));
        }

        static getMonthsStr(date) {
            if (!date) return null;

            if (isNumber(date)) {
                date = new Date(date);
            }
            if (isString(date)) {
                date = Dates.parse(date);
            }
            if (!isDate(date) && !isNumber(date)) {
                return null;
            }
            return monthsStr.get(date instanceof Date ? date.getMonth() : date);
        }

        static getMonthsNum(mon) {
            return monthsNum.get(mon);
        }

        static datesEqual(d1, d2) {
            if (!(d1 instanceof Date) || !(d2 instanceof Date)) {
                return false;
            }
            return d1.getYear() === d2.getYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
        }

        static parse(dateStr) {
            if (dateStr instanceof Date) {
                return dateStr;
            }
            if (!dateStr) {
                return null;
            }

            if (typeof dateStr === 'number') {
                try {
                    return moment(dateStr).toDate();
                } catch (e) {
                    return null;
                }
            } else {
                if (typeof dateStr !== 'string') {
                    dateStr = dateStr.toString();
                }
                if (!dateStr.length) {
                    return null;
                }
            }

            //        try {
            //            return moment(dateStr).toDate();
            //        } catch (e) {
            //
            //        }

            let time = dateStr.split(" ");
            if (!time.length) {
                time = dateStr.split("T");
            }

            let dates;
            if (time[0].includes('-')) {
                dates = time[0].split("-");
            } else if (time[0].includes('/')) {
                dates = time[0].split("/");
            }
            if (!dates) {
                return null;
            }
            if (dates.length !== 3) {
                return null;
            }

            let d;
            if (dates[0].length <= 2) {
                d = parseInt(dates[0]);
            } else if (dates[0].length === 4) {
                d = parseInt(dates[2]);
            }
            if (d < 1 || d > 31) {
                return null;
            }
            let m;
            try {
                if (monthsNum.has(dates[1])) {
                    m = monthsNum.get(dates[1]);
                } else {
                    m = parseInt(dates[1]) - 1;
                }
            } catch (ex) {
                m = monthsNum.get(dates[1]);
            }
            if (m < 0 || m > 11) {
                return null;
            }
            let y;
            if (dates[2].length === 4) {
                y = parseInt(dates[2]);
            } else if (dates[0].length === 4) {
                y = parseInt(dates[0]);
            }
            if (y < 1) {
                return null;
            }

            const date = new Date(Date.UTC(y, m, d, 0, 0, 0, 0));

            return date;
        }
    }

    self.Dates = Dates;

    Dates.monthsNum = monthsNum;
    Dates.monthsStr = monthsStr;
    Dates.monthsFullStr = monthsFullStr;
    Dates.monthsDoubleNumStr = monthsDoubleNumStr;
    Dates.daysDoubleNumStr = daysDoubleNumStr;
    Dates.weekDaysStr = weekDaysStr;
    Dates.monthsEndNum = monthsEndNum;

    Date.prototype.getWeekday = function () {
        return Dates.getWeekday(this);
    };
    Date.prototype.formatDate = function () {
        return Dates.formatDate(this);
    };
    Date.prototype.formatTime = function () {
        return Dates.formatTime(this);
    };
    Date.prototype.formatTimestamp = function () {
        return Dates.formatTimestamp(this);
    };
    Date.prototype.formatDateTime = function () {
        return Dates.formatDateTime(this);
    };
    Date.prototype.formatYearMonth = function () {
        return Dates.formatYearMonth(this);
    };
    Date.prototype.formatMonthYear = function () {
        return Dates.formatMonthYear(this);
    };
    Date.prototype.getMonthsStr = function () {
        return Dates.getMonthsStr(this);
    };

    Date.prototype.durationNext = function (nextDate) {
        const then = moment(nextDate);
        const now = moment(this);

        const res = moment.duration(then.diff(now));
        //    console.log('res', Dates.parse("04-11-2020"), res)

        return res;
    };
    Date.prototype.durationPrev = function (nextDate) {
        const then = moment(nextDate);
        const now = moment(this);

        const res = moment.duration(now.diff(then));
        //    console.log('res', Dates.parse("04-11-2020"), res)

        return res;
    };
    Date.prototype.durationNextYears = function (nextDate) {
        return this.durationNext(nextDate)._data.years;
    };
    Date.prototype.durationPrevYears = function (nextDate) {
        return this.durationPrev(nextDate)._data.years;
    };
    Date.prototype.durationNextMonths = function (nextDate) {
        return this.durationNext(nextDate)._data.months;
    };
    Date.prototype.durationPrevMonths = function (nextDate) {
        return this.durationPrev(nextDate)._data.months;
    };
    Date.prototype.durationNextWeeks = function (nextDate) {
        return this.durationNext(nextDate)._data.weeks;
    };
    Date.prototype.durationPrevWeeks = function (nextDate) {
        return this.durationPrev(nextDate)._data.weeks;
    };
    Date.prototype.durationNextDays = function (nextDate) {
        return this.durationNext(nextDate)._data.days;
    };
    Date.prototype.durationPrevDays = function (nextDate) {
        return this.durationPrev(nextDate)._data.days;
    };
    Date.prototype.durationNextHours = function (nextDate) {
        return this.durationNext(nextDate)._data.hours;
    };
    Date.prototype.durationPrevHours = function (nextDate) {
        return this.durationPrev(nextDate)._data.hours;
    };
    Date.prototype.durationNextMinutes = function (nextDate) {
        return this.durationNext(nextDate)._data.minutes;
    };
    Date.prototype.durationPrevMinutes = function (nextDate) {
        return this.durationPrev(nextDate)._data.minutes;
    };
    Date.prototype.durationNextSeconds = function (nextDate) {
        return this.durationNext(nextDate)._data.seconds;
    };
    Date.prototype.durationPrevSeconds = function (nextDate) {
        return this.durationPrev(nextDate)._data.seconds;
    };
    Date.prototype.getWeekNumber = function () {
        //        const d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
        //        const dayNum = d.getUTCDay() || 7;
        //        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        //        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        //        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7) + 1;

        const d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
        d.setUTCDate(d.getUTCDate() - d.getUTCDay());
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7) + 1;
    };
    Date.prototype.getWeekNumberOfMonth = function () {
        const adjustedDate = this.getDate();// + this.getDay();
        const prefixes = ['0', '1', '2', '3', '4', '5'];
        return (parseInt(prefixes[0 | adjustedDate / 7]) + 1);
    };
    Date.prototype.getWeeksOfMonthInMonth = function () {
        const firstMonDate = this.toMonthStartDate().getDate();
        const lastMonDate = this.toMonthEndDate().getDate();

        const year = this.getUTCFullYear();
        const month = this.getMonth();

        return Array.range(firstMonDate, lastMonDate).map(n => {
            const date = new Date(Date.UTC(year, month, n));
            return date.getWeekNumberOfMonth();
        }).distinct();
    };
    Date.prototype.getWeeksOfYearInMonth = function () {
        const firstMonDate = this.toMonthStartDate().getDate();
        const lastMonDate = this.toMonthEndDate().getDate();

        const year = this.getUTCFullYear();
        const month = this.getMonth();

        return Array.range(firstMonDate, lastMonDate).map(n => {
            const date = new Date(Date.UTC(year, month, n));
            return date.getWeekNumber();
        }).distinct();
    };
    Date.prototype.addYears = function (n) {
        const d = moment(this);
        d.add(n, 'y');
        return d.toDate();
    };
    Date.prototype.addMonths = function (n) {
        const d = moment(this);
        d.add(n, 'M');
        return d.toDate();
    };
    Date.prototype.addWeeks = function (n) {
        const d = moment(this);
        d.add(n, 'w');
        return d.toDate();
    };
    Date.prototype.addDays = function (n) {
        const d = moment(this);
        d.add(n, 'd');
        return d.toDate();
    };
    Date.prototype.addHours = function (n) {
        const d = moment(this);
        d.add(n, 'h');
        return d.toDate();
    };
    Date.prototype.addMinutes = function (n) {
        const d = moment(this);
        d.add(n, 'm');
        return d.toDate();
    };
    Date.prototype.addSeconds = function (n) {
        const d = moment(this);
        d.add(n, 's');
        return d.toDate();
    };
    Date.prototype.toYearStartDate = function () {
        return moment(this).startOf('year').toDate();
    };
    Date.prototype.toYearEndDate = function () {
        return moment(this).endOf('year').toDate();
    };
    Date.prototype.toHalfStartDate = function () {
        const month = moment(this).month();
        if (month < 6) {
            return moment(this).startOf('year').toDate();
        } else {
            return moment(this).startOf('year').month(6).toDate();
        }
    };
    Date.prototype.toHalfEndDate = function () {
        const month = moment(this).month();
        if (month < 6) {
            return moment(this).startOf('year').month(5).endOf('month').toDate();
        } else {
            return moment(this).endOf('year').toDate();
        }
    };
    Date.prototype.toQuarterStartDate = function () {
        const month = moment(this).month();
        if (month < 3) {
            return moment(this).startOf('year').toDate();
        } else if (month < 6) {
            return moment(this).startOf('year').month(3).toDate();
        } else if (month < 9) {
            return moment(this).startOf('year').month(6).toDate();
        } else {
            return moment(this).startOf('year').month(9).toDate();
        }
    };
    Date.prototype.toQuarterEndDate = function () {
        const month = moment(this).month();
        if (month < 3) {
            return moment(this).startOf('year').month(2).endOf('month').toDate();
        } else if (month < 6) {
            return moment(this).startOf('year').month(5).endOf('month').toDate();
        } else if (month < 9) {
            return moment(this).startOf('year').month(8).endOf('month').toDate();
        } else {
            return moment(this).endOf('year').toDate();
        }
    };
    Date.prototype.toMonthStartDate = function () {
        return moment(this).startOf('month').toDate();
    };
    Date.prototype.toMonthEndDate = function () {
        return moment(this).endOf('month').toDate();
    };
    Date.prototype.toWeekStartDate = function () {
        return moment(this).startOf('week').toDate();
    };
    Date.prototype.toWeekEndDate = function () {
        return moment(this).endOf('week').toDate();
    };
    Date.prototype.toDayStartDate = function () {
        return moment(this).startOf('date').toDate();
    };
    Date.prototype.toDayEndDate = function () {
        return moment(this).endOf('date').toDate();
    };
    Date.prototype.setMidnight = function () {
        this.setHours(0);
        this.setMinutes(0);
        this.setSeconds(0);
        return this;
    };
})(typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global || this);
