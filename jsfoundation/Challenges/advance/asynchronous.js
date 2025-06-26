// task-1

const simulateAsyncTask = () => {
  console.log("task started");
  setTimeout(() => {
    console.log("task completed");
  }, 2000);
};
// simulateAsyncTask();

// task-2
const simulateMultipleTask = () => {
  setTimeout(() => {
    console.log("task-1 completed");
  }, 1000);
  setTimeout(() => {
    console.log("task-2 completed");
  }, 2000);
  setTimeout(() => {
    console.log("task-3 completed");
  }, 3000);
};

// simulateMultipleTask();

// task-3

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback("fetched data");
  }, 2000);
}

// fetchDataWithCallback(function (data) {
//   console.log("callback called with: ", data);
// });
