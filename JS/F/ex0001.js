var num_list = [1, 3, 5, 7, 9, 11, 13];
num_list.push(15);

console.log("In our list we hav:");
/* for (loop = 0; loop < num_list.length; loop++) {
  console.log(`Number ${num_list[loop]}`);
} */

for (var pos in num_list) {
  console.log(`Number ${num_list[pos]}`);
}
