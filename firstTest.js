module.exports = {   
    'My first test case': function (browser) {
        browser
        .useXpath()
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('//b[@class="hnname"]')
        .assert.containsText('//b[@class="hnname"]','Hacker News');
        
    }
}