// week 1.4| Async, Await and Promises
/**
 * 01. Async VS Sync Functions
 * sync excute line by line code wait for each task to finish first
    console.log(1);
    console.log(2);
    console.log(3);
 * async can wait for task can perfrom task
    console.log("start");
    setTimeout(() => {
        console.log('wait for 2 second');
    }, 2000)
    
    console.log("ends");
 * */

    
    


    
    // 02. Promises
        /** a promise is something which will be done in the future reject or resolve
         * const promise = new Promise((resolve, reject) =>{
         * const success = true
         * if(!success){
         * resolve("resolve worked")
         * } else {
         * reject("rejected")}
         * })
         * promise
         * .then((message) => console.log("resolved: ", message))
         * .catch((error) => console.log("error: ", error ))
         * */ 

    // - Async Await
        /** helps writes asynchronous code looks synchronous make promise easier to read
         *  function getData() { 
         * return new Promise((resolve) => { 
         * setTimeout(() => { 
         * resolve('data fetched');         
         * }, 5000)
         * })
         * }
         * async function fetchData() {
         * console.log('fetching...');
         * const result = await getData()
         * console.log(result);                
         * }
         * fetchData()
         * */ 

    // - Callback Vs Promises
    /** callback hell
     * loginUser("user", () => {
  getUserProfile(() => {
    fetchSettings(() => {
      console.log("Done!");
    });
  });
});
     * */ 


/** promise
 * loginUser("user")
  .then(getUserProfile)
  .then(fetchSettings)
  .then(() => console.log("Done!"))
  .catch((err) => console.error(err));
 * */ 


    