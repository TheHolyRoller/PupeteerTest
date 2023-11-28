// Import puppeteer module
const puppeteer = require('puppeteer');


// Define an async function
(async () => {


  const browser = await puppeteer.launch({headless: false});  // Create a new page
  const page = await browser.newPage();
  
  
  const urls = [
      'https://www.wix.com',
      'https://www.notion.so',
    'https://www.spareroom.co.uk',
    'https://www.gmail.com'


  ];
  
  let counter = 0;

  const loop = async () => {
    // Get the URL at the counter index
    const url = urls[counter];
    // Navigate to the URL
    await page.goto(url);
    // Perform your desired tasks
    // For example, take a screenshot and save it as facebook.png
    await page.screenshot({path: 'facebook.png'});
    // Increment the counter
    counter++;
    // If the counter reaches the end of the array, reset it to zero
    if (counter === urls.length) {
      counter = 0;
    }
    // Call the loop function again after a delay
    setTimeout(loop, 1000 * 60 * 60); // Delay of one hour
  };
  // Call the loop function for the first time
  loop();
  
  setInterval(loop, 1000 * 60 * 60); // Interval of one hour

  
})();
