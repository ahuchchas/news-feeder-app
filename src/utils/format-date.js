function getFormattedDate(dateString) {
  // const dateString = "2024-02-07T09:53:00Z";
  const date = new Date(dateString);

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate; // Output: "7 Feb 2024"
}

export { getFormattedDate };
