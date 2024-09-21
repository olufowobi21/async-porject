async function iterateWithAsyncAwait(arr) {
  for (const value of arr) {
    console.log(value);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);


async function awaitCall() {
  const response = await fetch('https://example.com/api/data');
  const data = await response.json();
  console.log(data);
}

// Example usage:
awaitCall();


async function awaitCall() {
  try {
    const response = await fetch('https://example.com/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Example usage:
awaitCall();


async function func1() {
  console.log('Func 1');
  await new Promise(resolve => setTimeout(resolve, 1000));
}

async function func2() {
  console.log('Func 2');
  await new Promise(resolve => setTimeout(resolve, 1000));
}

async function func3() {
  console.log('Func 3');
  await new Promise(resolve => setTimeout(resolve, 1000));
}

async function chainedAsyncFunctions() {
  await func1();
  await func2();
  await func3();
}

// Example usage:
chainedAsyncFunctions();


async function concurrentRequests() {
  const urls = ['https://example.com/api/data1', 'https://example.com/api/data2'];
  const promises = urls.map(url => fetch(url));
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map(response => response.json()));
  console.log(data);
}

// Example usage:
concurrentRequests();


async function parallelCalls(urls) {
  const promises = urls.map(url => fetch(url));
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map(response => response.json()));
  console.log(data);
}

// Example usage:
parallelCalls(['https://example.com/api/data1', 'https://example.com/api/data2', 'https://example.com/api/data3']);


