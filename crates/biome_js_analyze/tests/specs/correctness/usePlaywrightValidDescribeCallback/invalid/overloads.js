/* should generate diagnostics */

test.describe(async () => {});
test.describe.only((done) => {});
test.describe.serial(function(done) {});

test.describe('suite', { tag: '@smoke' }, async () => {});
test.describe.only('suite', {}, async function() {});
test.describe.parallel('suite', {}, (done) => {});
test.describe.serial.only('suite', {}, function(done) {});
test.describe.skip('suite', {}, null);
test.describe.fixme('suite', {}, ...callbacks);

test.describe();
