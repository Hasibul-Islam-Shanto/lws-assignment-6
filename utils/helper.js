export const formattedDate = (date) => {
  const convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const [day, month, year] = formattedDate.split(" ");
  return `${month} ${day}, ${year}`;
};
