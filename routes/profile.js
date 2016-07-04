var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.tagName);
    var tagName = req.body.tagName;

    //tagName으로 api호출하기
        //https://api.lootbox.eu/pc/kr/kimtae-3715
    var url = 'https://api.lootbox.eu/pc/kr/'+tagName+'/profile';
// LOL API Call
    request(url, function(error, response, body) {
        var resData = JSON.parse(body);
        //var key = Object.keys(info_jason);
        //var result = "id : " + info_jason[key]["id"] +
        //    " name : " + info_jason[key]["name"] +
        //    " profileIconId : " + info_jason[key]["profileIconId"] +
        //    " summonerLevel : " + info_jason[key]["summonerLevel"] +
        //    " revisionDate : " + info_jason[key]["revisionDate"];
        //console.log(result);
        console.log(resData);
        res.send(resData);

    });

    //서버에다가 보내기

});







module.exports = router;
