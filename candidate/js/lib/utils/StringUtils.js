(function() {
    "use strict";

    let StringUtils = {
        isEmpty: str => {
            let __str = ''+str;
            return (__str === null) || (__str.length <= 0);
        },
        isNotEmpty: str => {
            return !isEmpty(str);
        },
        isBlank: str => {
            const BLANK_CHR = [" ", "　"];
            let __str = ''+str,
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
        }
    };
    this.StringUtils = StringUtils;
}).call(this);
