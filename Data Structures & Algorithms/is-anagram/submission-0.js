class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let count1 = {}
        let count2 = {}

        if (s.length !== t.length){
            return false ;
        }

        for (let char of s){
            count1[char] = (count1[char] || 0) + 1 ;
        }

        for (let char of t){
            count2[char] = (count2[char] || 0) + 1;
        }

        for (let char in count1){
            if (count1[char] !== count2[char]){
                return false 
            }
        }
        return true
    }
}
