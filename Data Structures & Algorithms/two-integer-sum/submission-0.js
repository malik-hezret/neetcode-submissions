class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {}
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if(hashMap[diff] || hashMap[diff] === 0) {
                return [hashMap[diff], i]
            }

            hashMap[nums[i]] = i
        }

        console.log('hash', hash)
    }
}
