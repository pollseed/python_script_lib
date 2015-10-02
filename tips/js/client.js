(function() {
    "use strict";

    let StringUtils = {
        isEmpty: str => {
            let __str = __parseStr(str);
            return (__str === null) || (__str.length <= 0);
        },
        isNotEmpty: str => {
            return !isEmpty(str);
        },
        isBlank: str => {
            const BLANK_CHR = [" ", "　"];
            let __str = __parseStr(str),
            strLen = __str.length,
                i,
                ch;
            if (__str === null || strLen === 0) {
                return true;
            }
            for (i = 0; i < strLen; i++) {
                ch = __str.charAt(i);
                if (-1 == BLANK_CHR.indexOf(ch)) {
                    return false;
                }
            }
            return true
        },
        isNotBlank: str => {
            return !isBlank(str);
        },
        trim: str => {
            let __str = __parseStr(str);
            return __str === null ? null : __str.trim();
        },
        trimToNull: str => {
            let __str = this.trim(str);
            return (__str === null) || (__str.length === 0) ? null : __str;
        },

            /*
             * create number of str element array.
             * @param str element.
             * @limit number of array.
             */
        createPlaceholder: (str, limit) => {
            let placeholder = `${str},`.repeat(limit).split(',');
            placeholder.pop();
            return placeholder;
        }
    };

    function __parseStr(str) {
        return `${str}`;
    }

    class Timer {
        constructor() {
            this.__times = new Map()
                .set(1, {hour: 17, minute: 45})
                .set(2, {hour: 17, minute: 45})
                .set(3, {hour: 17, minute: 45})
                .set(4, {hour: 17, minute: 45})
                .set(5, {hour: 19, minute: 0})
                .set(6, {hour: 0, minute: 0})
                .set(7, {hour: 0, minute: 0});
        }
        getRemainTime() {
            let d = new Date(),
            now = this.__times.get(d.getDay()),
            hour = now.hour - d.getHours(),
                minute = now.minute - d.getMinutes();
            if (minute < 0) { hour--; minute+=60; }
            return { hour: hour, minute: minute };
        }
    }

    this.StringUtils = StringUtils;
    this.Timer = Timer;

}).call(this);
