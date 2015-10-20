(function() {
    "use strict";

    const IO = io(), SPACE = ' ';

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

    function ajaxRequest() {
        let wordResultDom = new InputDom("word_result"),
        result = wordResultDom.getIdDom(),
        wordDom = new InputDom("word"),
            word = wordDom.getInputValue(),
            request, yahooUrl, githubUrl, stackoverflowUrl;
        if (ERROR_CODE_BLANK === word) {
            result.innerText = SPACE;
            return;
        } else if (wordDom.isNotEquals(word)) result.innerText = word;
        IO.emit('server', {word: word});
        request = new RequestUrls();
        yahooUrl = request.getUrl('YAHOO', word);
        githubUrl = request.getUrl('GITHUB', word);
        stackoverflowUrl = request.getUrl('STACKOVERFLOW', word);
        console.info(`request url : \r\n${yahooUrl}\r\n${githubUrl}\r\n${stackoverflowUrl}`);

        Request.get(yahooUrl, word)
            .done(data => { console.log(data) })
            .fail(e => { console.log(e) });
        Request.get(githubUrl, word)
            .done(data => { console.log(data) })
            .fail(e => { console.log(e) });
        Request.get(stackoverflowUrl, word)
            .done(data => { console.log(data) })
            .fail(e => { console.log(e) });
    }

    function createSql() {
        let columnNames = new InputDom("columnNames").getInputValue().split(','),
        sqlCount = new InputDom("sqlCount").getInputValue(),
        ai_column = new InputDom("ai_column").getInputValue(),
            values = new InputDom("values").getInputValue().split(','),
            sql = new Sql(new InputDom("tableName").getInputValue()), valuesArray = [], __tmpValues = [], i;
        for (i = 0; i < sqlCount; i++) {
            __tmpValues.push(`"${ai_column}${i}"`);
            values.forEach(v => __tmpValues.push(v));
            valuesArray.push(__tmpValues);
            __tmpValues = [];
        }
        sql.createInsert(columnNames, valuesArray).forEach(v => console.log(v));
    }

    function load() {
        new InputDom("word").getIdDom().addEventListener('blur', ajaxRequest, false);
        new InputDom("remain_time").getIdDom().addEventListener('click', () => {
            let resultDom = new InputDom("remain_result").getIdDom(),
            remain = new Timer("remain_time").getRemainTime();
            resultDom.innerText = `${remain.hour} : ${remain.minute}`;
        }, false);
        new InputDom("createInsert").getIdDom().addEventListener('click', () => {
            createSql();
        }, false);
    }
    document.addEventListener('DOMContentLoaded', load, false);
}());
