# sumsInRangeOfCombo

## example
```
function sumsInRangeOfCombo(nums, upperLimit, lowerLimit){
  return 4;
}

const sums = sumsInRangeOfCombo([2,4,6,8], 10, 6);
console.log(sums); //4
```

example of naive generation and testing
| :--------- |:---:| :--:|:--:|:--:|:--:|:--:|:---:|:---:|:---:|:-----:|:-----:|:----:|:-----:|
| microstate |  2  | 4   | 6 | 8 | 2,4 | 2,6 | 2,8 | 4,6 | 4,8 | 2,4,6 | 2,4,8 |4,6,8 |2,4,6,8|
| sum        | 2   |4    |6  |8  |6    | 8   | 10  | 8   |  10 |   12  | 12    |18    |20     |
| inRange    | 0   |0    |0  |1  |0    | 1   | 0   | 1   |  0  |   0   | 0     |0     |0      |

 -[] microstates could be generated into directed graph structure or with recursive backtracking?
 -[] find a way to generate combinations of microstates sums in smallest to largest order
  -[] as each entry is summed/added to directed graph check if it is the larger than previous and store it for later/skip it for now if not?
  -[] there is a limitation related to lowerLimit and the of number of entries for microstates that have repeated entry values 
  ex: sumsInRangeOfCombo(1,1,1,1,1,1,1] 5, 6) all microstates of nums with less than 5 entries can be skipped
 -[] don't generate micro-states that contain entries above upperlimmit and stop recursion/going that that direction 
 

[1,1,1,1,1,1,1] 5, 6 //returns 4 
[1,2,3,4] 

## microstate generation
if microstate could be generated in order of sum, many computations could be avoided

| :--------- |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| microstate | 1234| 234 | 134 | 124 | 34  | 123 | 24  | 23  | 14  | 13  | 4   | 3   | 12  | 2   | 1   |
| sum        | 10  | 9   | 8   | 7   | 7   | 6   | 6   | 5   | 5   | 4   | 4   | 3   | 3   | 2   | 1   |



## patterns
recursion
memoization
backtracking
directed graphs


