type Array = {
  id: number;
  url: string;
}[];

type search = string;

export const filterArray = (inputArr: Array, searchTerm: search) => {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr?.length) throw Error("inputArr cannot be empty");

  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
};
