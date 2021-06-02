var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundnumber = 0;
var msg = '';

for (var i = 0; i < arrayLength; i++) {
    roundnumber = (i + 1);
    msg += 'Round' + roundnumber + ': ';

    msg += scores[i] + '<br />';
}
document.getElementById('answer').innerHTML = msg;