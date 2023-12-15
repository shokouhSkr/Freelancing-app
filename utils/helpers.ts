export const truncateText = (text: string, length: number): string => {
  if (text.length < length) return text;

  return text.slice(0, length) + "...";
};

export const toLocalDateShort = (date: string) => {
  return new Date(date).toLocaleDateString("fa-IR");
};

export const formatPrice = (price: number) => {
  let newPrice = String(price)
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)!
    .map(function (x) {
      return x.split("").reverse().join("");
    })
    .reverse()
    .join(",");

  return newPrice;
};
