class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
       let countW = 0

       for (let i = 0; i < k; i++) {
            if (blocks[i] === 'W') {
                countW++
            }
       }

       let res = countW
       for (let j = k; j < blocks.length; j++) {
         if (blocks[j-k] === 'W') {
            countW--
         }

         if (blocks[j] === 'W') {
            countW++
         }

         res = Math.min(res, countW)
       }

       return res
    }
}
