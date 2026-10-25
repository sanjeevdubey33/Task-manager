function uniqueChars(str) {
  return str.toString()
    .split("")
    .filter((ch, index, arr) => arr).map((ch, index, arr) => arr[arr.length-1 - index])
    .join("");
}
console.log(uniqueChars(123325));