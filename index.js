// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(catName) {
  cats.push(catName);
}

function destructivelyPrependCat(catName) {
  cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(newCat) {
  const updatedCatList = [...cats];
  updatedCatList.push(newCat);
  return (updatedCatList);
}

function prependCat(newCat) {
  const updatedCatList = [...cats];
  updatedCatList.unshift(newCat);
  return (updatedCatList)
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // return cats.slice(1);
  const updatedCatList = [...cats];
  updatedCatList.shift()
  return updatedCatList;
}