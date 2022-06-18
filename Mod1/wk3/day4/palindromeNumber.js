//! Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    let temp = x.toString();
    let i = 0;
    let j = temp.length - 1;

    while (i < j) {
        if (temp[i] !== temp[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(211));

11

const isPalindrome2 = x => {
    if (x >= 0) {
        let temp = x;
        let reverse = 0;
        while(x > 0) {
            reverse = (reverse * 10) + (x % 10);
            x = Math.floor(x / 10);
        }
        return reverse == temp;
    } else {
        return false;
    }

}

console.log(isPalindrome2(121));
console.log(isPalindrome2(211));
console.log(isPalindrome2(-121));