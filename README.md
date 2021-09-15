# react-component-amazon

For Amazon.co.jp Item Block.

Amazon.co.jp 用の商品ブロックとして使用します。

## Examples

[DEMO](https://big-mon.github.io/react-component-amazon-block/)

## Installation

```
npm install --save @big-mon/react-component-amazon
```

or

```
yarn add @big-mon/react-component-amazon
```

## Usage

```js
import { AmazonBlock } from "@big-mon/react-component-amazon";

const App = () => (
  <div className="wrapper">
    <AmazonBlock asin={"ASIN_CODE"} id={"YOUR_AFFILIATE_CODE"}>
      ITEM_NAME
    </AmazonBlock>
  </div>
);
```

Default `AmazonBlock` component has **no styles, only have className**, for freedom customize.

If you will use DEMO's style, you can find styles at `./styles`. Choose `.css`, `.scss` etc...

### For Next.js User

If you use `Next.js`, you need additional install **`next-transpile-modules`**.

```js
// next.config.js
const withTM = require("next-transpile-modules")([
  "@big-mon/react-component-amazon",
]);

module.exports = withTM({
  ...
});
```

#### CSS Module

```js
// AmazonItem.tsx
import { AmazonBlock } from "@big-mon/react-component-amazon";
import styles from "./styles/amazon.module.scss";

type Props = {
  asin: string,
  children: React.ReactNode,
};

export function AmazonItem() {
  return (
    <div className={styles.amazonBox}>
      <AmazonBlock asin={"ASIN_CODE"} id={"YOUR_AFFILIATE_CODE"}>
        ITEM_NAME
      </AmazonBlock>
    </div>
  );
}
```

## API

| Property | Description      | Type   | Default |
| -------- | ---------------- | ------ | ------- |
| id       | Affiliate ID     | string | ""      |
| asin     | Item's asin code | string | ""      |

## Memo

### transpile component source

```bash
yarn build
```

transpiled files create at `/dist`.

### check demo

```bash
yarn start
```

go to `http:localhost:3001`.

### update demo page -> GitHub-Pages

```bash
yarn run publish-demo
```

### check package content

```bash
npm pack
```

create `.tgz` file at `./`, import your test app.

### publish npm package

```bash
npm publish --access=public
```
