
TASK 1 - UI Automation task


How to run a Test

1. Go to a root of test folder, in terminal console type: npm install ( wait while all dependencies will install )

2. In a terminal console type: npm test

3. The test will run




For the fourth question of the TASK 1 follow the next instructions:

The logout by UI is default option, to check logout by /account/logout/ in 
index.js file from line 16 you must replace lines like it shown below

// Logout by UI
// await driver.findElement(By.css("a.logout")).click();
 
// Logout by /account/logout/
await driver.get('http://automationpractice.com/index.php?mylogout=');



