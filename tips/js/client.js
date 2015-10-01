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
                this._urls = new Map();
                this._urls.set('YAHOO', 'http://search.yahoo.co.jp/search?p=');
                this._urls.set('GITHUB', 'https://github.com/search?utf8=✓&q=');
                this._urls.set('STACKOVERFLOW', 'http://stackoverflow.com/search?q=');
                this._urls.set('NONE', '');
        }
        getUrl(serviceName, searchWord) {
                let url = this._urls.get(serviceName);
                return url + searchWord;
        }
}

function init() {
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
function load() {
        let input_word = document.getElementById("word");
        input_word.addEventListener('blur', init, false);
}
document.addEventListener('DOMContentLoaded', load, false);
