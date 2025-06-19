function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("Error data fetching failed");
      }
    }, 3000);
  });
}
fetchData()
  .then((data) => {
    console.log(data);
    return `hitesh`;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));
