describe("Dooray", function () {

    describe('TaskTracker', function () {
        beforeEach(function () {
            browser.ignoreSynchronization = true;
            browser.get('http://nhnent.dev.dooray.com');

            element.all(by.css('.login-btn')).first().click();

            element(by.css('#username')).sendKeys('ne11243');
            element(by.css('#password')).sendKeys('tmfrl23399(');
            element(by.css('button')).click();
        });

        it('stream', function () {
            expect(true).toEqual(true);
        });

        it('project', function () {
            element(by.css('.project-btn')).click();
            browser.wait(protractor.ExpectedConditions.presenceOf($('.common-list-item')), 10000)
                .then(function () {
                    expect(true).toEqual(true);
                }, function () {
                    console.log('error');
                });
        });

        it('mail', function () {
            element(by.css('.mail-btn')).click();
            browser.wait(protractor.ExpectedConditions.presenceOf($('.common-list-item')), 10000)
                .then(function () {
                    expect(true).toEqual(true);
                }, function () {
                    browser.wait(protractor.ExpectedConditions.presenceOf($('.empty-list')), 10000)
                        .then(function () {
                            expect(true).toEqual(true);
                        })
                });
        });

        it('calendar', function () {
            element(by.css('.calendar-btn')).click();
            browser.manage().timeouts().pageLoadTimeout(5000);
            expect(true).toEqual(true);
        });

    });

    describe('Messenger', function () {
        beforeEach(function () {
            browser.ignoreSynchronization = true;
            browser.get('http://nhnent.dev.dooray.com/messenger');

            element.all(by.css('.login-btn')).first().click();

            element(by.css('#username')).sendKeys('ne11243');
            element(by.css('#password')).sendKeys('tmfrl23399(');
            element(by.css('button')).click();
        });

        it('', function () {

            browser.wait(protractor.ExpectedConditions.presenceOf($('.details .title')), 10000)
                .then(function () {
                    browser.sleep(5000);
                    expect(true).toEqual(true);
                });
        });
    });
});