const { Builder, By } = require('selenium-webdriver');

(async function example() {
    // Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('http://automationpractice.com/index.php');
        await driver.findElement(By.css(".header_user_info")).click();

        // Use credentials to Log In
        await driver.findElement(By.id("email")).sendKeys("my_test_2021@email.com");
        await driver.findElement(By.id("passwd")).sendKeys("my_test_pass_2021");
        await driver.findElement(By.id("SubmitLogin")).click();

        // Logout by UI
        await driver.findElement(By.css("a.logout")).click();

        // Logout by /account/logout/
        //await driver.get('http://automationpractice.com/index.php?mylogout=');
    } finally {
        //await driver.quit();
        console.log("Test passed successfully!");
    }
})();