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
        .setValue(mainQueryInputSelector, mainQuery)
        .click(languageSelector)
        .click(languageValueSelector)
        .click(lastUpdatedSelector)
        .click(lastUpdatedValueSelector)
        .click(submitBttn)
        .assert.elementPresent(mainQueryResult, 'Page displays Zelda as query')
        .assert.elementPresent(languageResult, 'Page displays Italian as language')
        .assert.elementPresent(lastUpdatedResult, 'Page displays last month as last updated')
        .assert.urlContains('as_q=Zelda', 'Query is Zelda')
        .assert.urlContains('lr=lang_it', 'Language is Italian')
        .assert.urlContains('as_qdr=m', 'Time period is last month')
    }
}