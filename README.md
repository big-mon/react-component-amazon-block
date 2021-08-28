# react-component-amazon-block

For Amazon.co.jp Item Block.

Amazon.co.jp 用の商品ブロックとして使用します。

## How to Use

```js
import { AmazonBlock } from "../../src";

const App = () => (
  <AmazonBlock asin={"ASIN_CODE"} id={"YOUR_AFFILIATE_CODE"}>
    ITEM_NAME
  </AmazonBlock>
);
```

### Examples

[DEMO](https://big-mon.github.io/react-component-amazon-block/)

## API

| Property | Description      | Type   | Default |
| -------- | ---------------- | ------ | ------- |
| id       | Affiliate ID     | string | ""      |
| asin     | Item's asin code | string | ""      |
