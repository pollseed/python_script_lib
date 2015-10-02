(function() {
    "use strict";

    const BLANK_CHR = [" ", "　"], ERROR_CODE_BLANK = -1;

    let StringUtils = {
        isEmpty: str => {
            let __str = __parseStr(str);
            return (__str === null) || (__str.length <= 0);
        },
        isNotEmpty: str => {
            return !isEmpty(str);
        },
        isBlank: str => {
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

    class Dom {
        constructor(id) {
            this._id = document.getElementById(id);
        }
        getIdDom() {
            return this._id;
        }
        isNotEquals(text) {
            return this.getIdDom().innerText !== text;
        }
    }

    class InputDom extends Dom {
        getInputValue() {
            let value = super.getIdDom().value;
            if (StringUtils.isBlank(value)) {
                console.info(`not blank, errorCode [${ERROR_CODE_BLANK}]`);
                return ERROR_CODE_BLANK;
            }
            return value;
        }
    }

    class RequestUrls {
        constructor() {
            this.__urls = new Map()
                .set('YAHOO', 'http://search.yahoo.co.jp/search?p=')
                .set('GITHUB', 'https://github.com/search?utf8=✓&q=')
                .set('STACKOVERFLOW', 'http://stackoverflow.com/search?q=')
                .set('NONE', '');
        }
        getUrl(serviceName, searchWord) {
            let url = this.__urls.get(serviceName);
            return url + searchWord;
        }
    }


    class Timer {
        constructor() {
            this.__times = new Map()
                .set(1, {hour: 17, minute: 45})
                .set(2, {hour: 17, minute: 45})
                .set(3, {hour: 17, minute: 45})
                .set(4, {hour: 17, minute: 45})
                .set(5, {hour: 17, minute: 45})
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

    this.ERROR_CODE_BLANK = ERROR_CODE_BLANK;
    this.StringUtils = StringUtils;
    this.InputDom = InputDom;
    this.RequestUrls = RequestUrls;
    this.Timer = Timer;

}).call(this);
