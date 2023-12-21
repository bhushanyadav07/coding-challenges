var containsDuplicate = (nums) => {
    for (let r = 0; r < nums.length; r++) {/* Time O(N) */
        for (let l = 0; l < r; l++) {         /* Time O(N) */
            const isDuplicate = nums[l] === nums[r];
            if (isDuplicate) return true;
        }
    }
    return false;
}
