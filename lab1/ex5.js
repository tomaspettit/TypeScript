function count_with_spaces(value) {
    var count = value.length;
    return count;
}
function count_with_no_spaces(value) {
    return value.replace(" ", "").length;
}
function count_with_both(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
var count = count_with_spaces("test 1");
console.log("Count with spaces included is: " + count);
console.log(count_with_no_spaces("test 1"));
console.log(count_with_both("test 1", true));
console.log(count_with_both("test 1", false));
