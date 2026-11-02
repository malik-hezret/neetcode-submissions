class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0
        let sum = 0
        let len = Infinity
        for (let r = 0; r < nums.length; r++) {
            sum = sum + nums[r]

            while (sum >= target) {
                len = Math.min(len, r-l+1)

                sum = sum - nums[l]
                l++
            }

        }

        return len === Infinity ? 0 : len
    }
}
