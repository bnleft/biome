---
"@biomejs/biome": patch
---

Fixed [#12766](https://github.com/biomejs/biome/issues/12766): [`usePlaywrightValidDescribeCallback`](https://biomejs.dev/linter/rules/use-playwright-valid-describe-callback/) now accepts callbacks without a suite title and callbacks following suite details, such as `test.describe('suite', { tag: '@smoke' }, () => {})`.
