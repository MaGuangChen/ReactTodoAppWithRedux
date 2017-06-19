var moment = require('moment');
//一個取的date的套件
console.log(moment().format());

let now = moment();
console.log('現在時間的timestamp',now.unix());

let timestamp = 1497853110;
let currentMoment = moment.unix(timestamp);
console.log('current moment',currentMoment.format('MMM D,YY @ h:mm a'));
//January 3rd, 2016 @ 12:13 AM
console.log(currentMoment.format('MMMM Do, YYYY @ h:mm A'));
