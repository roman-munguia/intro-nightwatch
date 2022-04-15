module.exports = {
    url: 'https://www.google.com/advanced_search',
    
    elements: {
        
        mainQueryInput: {
            locateStrategy: 'xpath',
            selector: '//input[@class="jfk-textinput"]'
        },
        language: {
            locateStrategy: 'xpath',
            selector: '//*[@id="lr_button"]'
        },
        lastUpdated: {
            locateStrategy: 'xpath',
            selector: '//*[@id="as_qdr_button"]'
        },
        submitBttn: {
            locateStrategy: 'xpath',
            selector: '//input[@class="jfk-button jfk-button-action dUBGpe"]'
        }
    },

    commands: [{

        setQuery(value) {
            return this
                .setValue('@mainQueryInput', value);

        },

        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },

        search() {
            return this
                .click('@submitBttn');
        }
    }]
};
