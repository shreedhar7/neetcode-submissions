class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {


    let numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {

        // Check whether this is the beginning of a sequence
        if (!numSet.has(num - 1)) {

            let currentNum = num;
            let count = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                count++;
            }

            maxLength = Math.max(maxLength, count);
        }
    }

    return maxLength;

    }
}
