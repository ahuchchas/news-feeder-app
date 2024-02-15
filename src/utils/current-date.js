export function getCurrentDate() {
  const date = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  // Get the formatted date string
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
