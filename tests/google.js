module.exports = {
    '@tags' : ['google'],
    'Google advanced search: Zelda' (browser) {
        const mainQuery = 'Zelda';

        const advSearch = browser.page.advancedSearch();
        const searchResults = browser.page.searchResult();


        advSearch
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@language','lang_it')
            .selectFilter('@lastUpdated','m')
            .search();
    
        searchResults
            .assert.elementPresent('@mainQueryResult', 'Page displays Zelda as query')
            .assert.elementPresent('@languageResult', 'Page displays Italian as language')
            .assert.elementPresent('@lastUpdatedResult', 'Page displays last month as last updated')
            .assert.urlContains('as_q=Zelda', 'Query is Zelda')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Time period is last month')

    }
}