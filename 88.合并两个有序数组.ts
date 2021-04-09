/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index = 0;
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= m; j++) {
            if(nums2[i] > nums1[j]){
                index = j;
            } else {
                for(let k = index + 1; k <= m; k++) {
                    nums1[k + 1] = nums1[k];
                }
            }
        }
        nums1[index] = nums2[i];
        // index = i;
    }
};


let a = [1,2,3, 0, 0, 0], b = [4,5,6];
merge(a, 6, b, 3);
console.log(a);

// @lc code=end

