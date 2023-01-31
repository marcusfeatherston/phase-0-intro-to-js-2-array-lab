const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  return cats.push(name);
};

const destructivelyPrependCat = (name) => {
  return cats.unshift(name);
};

const destructivelyRemoveLastCat = (name) => {
  return cats.pop(name);
};

const destructivelyRemoveFirstCat = (name) => {
  return cats.shift(name);
};

const appendCat = (name) => {
  const newCats = [...cats, name];
  return newCats;
};

const prependCat = (name) => {
  const newCats = [name, ...cats];
  return newCats;
};

const removeLastCat = (name) => {
  const newCats = [...cats];
  newCats.pop();
  return newCats;
};

const removeFirstCat = (name) => {
  const newCats = [...cats];
  newCats.shift();
  return newCats;
};
