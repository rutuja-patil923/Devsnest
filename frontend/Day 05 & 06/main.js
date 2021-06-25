// write js function to check if an input is an array or not
const nums = [1,2,3,4,0]
const is_array = (array) =>{
	return Array.isArray(array)
}

console.log(is_array("w3resource"))
console.log(is_array(nums))


// write js function to clone array
const array_Clone = (array) =>{
	return array.map((x) => x)
}
console.log(array_Clone([1,2,4,0]))
console.log(array_Clone([1,2,[4,0]]))


// write js function to get first element of array
// passigng parameter 'n' will return first n elements
const nums = [ 7 , 9 , 0 , -2 ]
const first = (array,n=1) => {
	retun array.slice(0,n)
}
console.log(first(nums))
console.log(first(nums,3))
console.log(first([],6))
console.log(first(nums,-3))


// js program to to join all elements of array into a string
const nums = ["Red" , "Green" , "White" , "Black"]
const join = (array,sep ='') => array.join(sep)
console.log(join(nums,'+'))
console.log(join(nums,','))

// js function to find most frequent element in array
const nums = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3]
const mostFreq = (array) => {
      let map = new Map(), max = 0, ans;
      for (let i of array) {
            if (map.has(i)) {
                  map.set(i, map.get(i) + 1);
            }else map.set(i, 1);;
      }
      map.forEach((val, key) => {
            if (val > max) {
                  max = val;
                  ans = key;
            }
      });
      return ans;
}
console.log(mostFreq(nums));