const repeatString = function(string, count) {
    if(count<0) return 'ERROR';
    var fullString = '';
    for( i=0 ; i<count ; i++){
        fullString += string;
    }
    return fullString;
}

module.exports = repeatString
