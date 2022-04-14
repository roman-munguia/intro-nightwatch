module.exports = {
    '@tags' : ['google'],
    'Google advanced search: Zelda' (browser) {

        const mainQuery = 'Zelda'
        const mainQueryInputSelector = '//input[@class="jfk-textinput"]'
        const languageValueSelector = '//li[@value="lang_it"]'
        const languageSelector = '//*[@id="lr_button"]'
        const lastUpdatedSelector = '//*[@id="as_qdr_button"]'
        const lastUpdatedValueSelector = '//*[@id=":82"]'
        const submitBttn = '//input[@class="jfk-button jfk-button-action dUBGpe"]'
        const mainQueryResult = '//input[@value="Zelda"]'
        const languageResult = '//div[@jsname="ibnC6b"]/div'
        const lastUpdatedResult = '//div[@jsname="ibnC6b"]/div'

    browser
        .useXpath()
        .url('https://www.google.com/advanced_search')
        .waitForElementVisible(mainQueryInputSelector)
        .setValue(mainQueryInputSelector, mainQuery)
        .waitForElementVisible(languageSelector)
        .click(languageSelector)
        .click(languageValueSelector)
        .waitForElementVisible(lastUpdatedSelector)
        .click(lastUpdatedSelector)
        .click(lastUpdatedValueSelector)
        .click(submitBttn)
        .assert.elementPresent(mainQueryResult)
        .assert.elementPresent(languageResult)
        .assert.elementPresent(lastUpdatedResult)
    }
}