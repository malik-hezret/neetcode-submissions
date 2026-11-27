class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = Array(nums.length).fill(1);
        let product = 1;

        for (let i = 0; i < nums.length; i++) {
            prefix[i] = product
            product = product * nums[i]
        }

        const suffix = Array(nums.length).fill(1);
        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = product;
            product *= nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            prefix[i] *= suffix[i];
        }

        return prefix;
    }
}
