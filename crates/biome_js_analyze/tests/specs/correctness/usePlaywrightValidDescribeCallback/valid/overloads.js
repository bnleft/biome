/* should not generate diagnostics */

describe(() => {});
test.describe(() => {});
test.describe.only(function() {});
test.describe.skip(() => {});
test.describe.fixme(() => {});
test.describe.parallel(() => {});
test.describe.serial(() => {});
test.describe.parallel.only(() => {});
test.describe.serial.only(() => {});

describe('suite', { tag: '@smoke' }, () => {});
test.describe('suite', { tag: '@smoke' }, () => {});
test.describe.only('suite', { annotation: { type: 'issue' } }, function() {});
test.describe.skip('suite', { tag: ['@smoke', '@slow'] }, () => {});
test.describe.fixme('suite', {}, () => {});
test.describe.parallel('suite', {}, () => {});
test.describe.serial('suite', {}, () => {});
test.describe.parallel.only('suite', {}, () => {});
test.describe.serial.only('suite', {}, () => {});
