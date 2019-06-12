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
| substate |  2  | 4   | 6 | 8 | 2,4 | 2,6 | 2,8 | 4,6 | 4,8 | 2,4,6 | 2,4,8 |4,6,8 |2,4,6,8|
| sum        | 2   |4    |6  |8  |6    | 8   | 10  | 8   |  10 |   12  | 12    |18    |20     |
| inRange    | 0   |0    |0  |1  |0    | 1   | 0   | 1   |  0  |   0   | 0     |0     |0      |

 -[] substates could be generated into directed graph structure or tree or with recursive backtracking?
 -[] find a way to generate combinations of substates sums in smallest to largest order
  -[] as each entry is summed/added to directed graph check if it is the larger than previous and store it for later/skip it for now if not?
  -[] there is a limitation related to lowerLimit and the of number of entries for substates that have repeated entry values 
  ex: sumsInRangeOfCombo(1,1,1,1,1,1,1] 7, 5) all substates of nums with less than 5 entries can be skipped
 -[] don't generate substates that contain entries above upperlimmit and stop recursion/going that that direction 
 

[2,4,6,8], 10, 6 //returns 4
[1,2,3,4] 3, 5 //returns 2
[1,2,3,4] 3, 9 //returns 9
[1,1,1,1,1,1,1] 7, 5 //returns 7



## substate generation
if substate could be generated in order of sum, many computations could be avoided

|:-------|:-----:|:---:|:---:|:---:|:-:|:---:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|substate|1,2,3,4|2,3,4|1,3,4|1,2,4|3,4|1,2,3|2,4|2,3|1,4|1,3| 4 | 3 |1,2| 2 | 1 |
| sum    | 10    | 9   | 8   | 7   | 7 | 6   | 6 | 5 | 5 | 4 | 4 | 3 | 3 | 2 | 1 |


the "negative" or excluded entries form a substate create symmetry of the overall combinations, could possibly be used to skip the second half of generation by subtracting from the largest sum?   

|:-------|:-----:|:---:|:---:|:---:|:-:|:---:|:-:|:-:|:-:|:-:|:---:|:----:|:-:|:---:|:----:|
|substate|1,2,3,4|2,3,4|1,3,4|1,2,4|3,4|1,2,3|2,4|2,3|1,4|1,3| 4   | 3    |1,2| 2   | 1    |
|negative| ∅     | 1   | 2   | 3   |1,2| 4   |1,3|1,4|2,3|2,4|1,2,3|1,2,3 |3,4|1,3,4| 2,3,4|
| sum    | 10    | 9   | 8   | 7   | 7 | 6   | 6 | 5 | 5 | 4 | 4   | 3    | 3 | 2   | 1    |


## patterns
recursion
memoization
backtracking
tree
directed graphs


