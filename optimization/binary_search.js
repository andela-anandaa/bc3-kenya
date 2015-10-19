//binary_search.js

// bare find

Array.prototype.find = function (needle) {
    var start = 0,
        mid,
        end = this.length - 1;

    var count = 0;

    while (start <= end) {
        count++;

        mid = Math.ceil((end + start) / 2);
        if (this[start] === needle) {
            console.log("loops", count);
            return start;
        }
        else if (this[end] === needle) {
            console.log("loops", count);
            return end;
        }
        else if (this[mid] === needle) {
            console.log("loops", count);
            return mid;
        } else {
            if (this[mid] < needle) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    console.log("loops", count);
    return -1;
}
// transform find to be a method of
// array

var a = [10, 20, 34, 45, 67, 89, 100];
console.log(a.find(10));
