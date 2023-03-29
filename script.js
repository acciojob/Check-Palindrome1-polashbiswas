// complete the given function

function palindrome(str){
let newString = str.toLowerCase();
	let start = 0;
	let end = str.length -1;
	while(start < end){
		if(newString.charAt(start) !== newString.charAt(end)){
			return false;
		}
		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
