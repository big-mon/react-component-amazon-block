import React from "react";
import { render } from "react-dom";
import { AmazonBlock } from "../../src";

const App = () => (
  <AmazonBlock asin={"4908406766"} id={"TESTID"}>
    ウィメンズウェア100年史
  </AmazonBlock>
);
render(<App />, document.getElementById("root"));
