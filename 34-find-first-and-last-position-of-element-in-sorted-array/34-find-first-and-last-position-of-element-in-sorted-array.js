/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1,-1];
   //  target = 2;
   // nums = [0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,5,6,7,9,9,9,9]
    ans[0] = findStartAndLastIndex(nums,target,true);
    ans[1] = findStartAndLastIndex(nums,target,false);
    return ans;

    
};

const findStartAndLastIndex = ( arr, target,isFirst)=> {
    let ans = -1;
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
       let mid = Math.round( (start + end)/2);
    if ( arr[mid]>target){
        end= mid-1;
       
       }    
        else if ( arr[mid]<target){
        start = mid+1;
       
       }    
        else {
            ans = mid;
            if (isFirst){
                end = mid -1;
            }
            else {
                start = mid+1;
                // end = arr.length-1;
            }
        }
    }
    return ans;
    
}