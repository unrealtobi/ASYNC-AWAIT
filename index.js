// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(value);
    }
  }
  
  // Test Task 01
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  
  // Task 02: Awaiting a Call
  async function fetchData() {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Sample Data' });
      }, 1000);
    });
  }
  
  async function awaitCall() {
    const data = await fetchData();
    console.log(data);
  }
  
  // Test Task 02
  awaitCall();
  
  // Task 03: Handling Errors with Async/Await
  async function fetchDataWithError() {
    // Simulate an API call with a delay and potential error
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('API call failed'));
      }, 1000);
    });
  }
  
  async function awaitCallWithErrorHandling() {
    try {
      const data = await fetchDataWithError();
      console.log(data);
    } catch (error) {
      console.error('An error occurred: ', error.message);
    }
  }
  
  // Test Task 03
  awaitCallWithErrorHandling();
  
  // Task 04: Chaining Async/Await
  async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function 1 completed');
  }
  
  async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function 2 completed');
  }
  
  async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function 3 completed');
  }
  
  async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }
  
  // Test Task 04
  chainedAsyncFunctions();
  
  // Task 05: Awaiting Concurrent Requests
  async function fetchApi1() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Data from API 1'), 1000);
    });
  }
  
  async function fetchApi2() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Data from API 2'), 1000);
    });
  }
  
  async function concurrentRequests() {
    const [result1, result2] = await Promise.all([fetchApi1(), fetchApi2()]);
    console.log('Results:', result1, result2);
  }
  
  // Test Task 05
  concurrentRequests();
  
  // Task 06: Awaiting Parallel Calls
  async function fetchUrl(url) {
    // Simulate fetching data from a URL
    return new Promise(resolve => {
      setTimeout(() => resolve(`Data from ${url}`), 1000);
    });
  }
  
  async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => fetchUrl(url)));
    console.log('Responses:', responses);
  }
  
  // Test Task 06
  parallelCalls(['url1', 'url2', 'url3']);
  