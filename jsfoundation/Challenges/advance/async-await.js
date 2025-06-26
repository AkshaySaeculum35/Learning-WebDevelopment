// task-1

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    // const userData = await fetchUser();
    // const postsData = await fetchPosts();
    const [userData, postData] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(userData);
    console.log(postData);
  } catch (error) {
    console.log(error);
  }
}
// fetchAllData();

// task-2

function fetchSuccess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}
function fetchFailure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failure");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(success);
    console.log(failure);
  } catch (error) {
    console.log(error);
  }
}
// handlePromises();

// task-3

function fetchWithTImeout(promise, timeout) {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timeout Error");
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Fetched");
    }, 3000);
  });
}

fetchWithTImeout(fetchData(), 2000)
  .then((data) => {
    console.log("Success", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
