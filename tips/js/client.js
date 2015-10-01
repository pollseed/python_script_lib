"use strict";

const IO = io(),
      ERROR_CODE_BLANK = -1,
      SPACE = ' ';

let Request = {
        get: (url, query) => {
                let defer = $.Deferred();
                $.ajax( {
                        url: url + query,
                        type: 'GET',
                        success: defer.resolve,
                        error: defer.reject
                });
                return defer.promise();
        }};

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
                if (value === "") {
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

function ajaxRequest() {
        let wordResultDom = new InputDom("word_result"),
        result = wordResultDom.getIdDom(),
        wordDom = new InputDom("word"),
                word = wordDom.getInputValue(),
                request,
                        yahooUrl,
                        githubUrl,
                                stackoverflowUrl;
        if (ERROR_CODE_BLANK === word) {
                result.innerText = SPACE;
                return;
        } else if (wordDom.isNotEquals(word)) {
                result.innerText = word;
        }
        IO.emit('server', {word: word});
        request = new RequestUrls();
        yahooUrl = request.getUrl('YAHOO', word);
        githubUrl = request.getUrl('GITHUB', word);
        stackoverflowUrl = request.getUrl('STACKOVERFLOW', word);
        console.info(`request url : \r\n${yahooUrl}\r\n${githubUrl}\r\n${stackoverflowUrl}`);

        Request.get(yahooUrl, word).done(data => {
                console.log(data);
        });
        Request.get(githubUrl, word).done(data => {
                console.log(data);
        });
        Request.get(stackoverflowUrl, word).done(data => {
                console.log(data);
        });
}

class Timer {
        constructor() {
                this.__times = new Map()
                        .set(1, [17,45])
                        .set(2, [17,45])
                        .set(3, [17,45])
                        .set(4, [17,45])
                        .set(5, [17,45])
                        .set(6, [0])
                        .set(7, [0]);
        }
        getRemainTime() {
                let d = new Date(),
                now = this.__times.get(d.getDay()),
                hour = now[0] - d.getHours(),
                        minute = now[1] - d.getMinutes();
                if (minute < 0) {
                        hour--;
                        minute+=60;
                }
                return { hour: hour, minute: minute };
        }
}

function load() {
        new InputDom("word").getIdDom().addEventListener('blur', ajaxRequest, false);
        new InputDom("remain_time").getIdDom().addEventListener('click', () => {
                let resultDom = new InputDom("remain_result").getIdDom(),
                remain = new Timer("remain_time").getRemainTime();
                resultDom.innerText = `${remain.hour} : ${remain.minute}`;
        }, false);
}
document.addEventListener('DOMContentLoaded', load, false);
