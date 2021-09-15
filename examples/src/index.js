import { render } from "react-dom";
import { AmazonBlock } from "../../src";
import "./style.css";

const App = () => (
  <AmazonBlock asin={"4908406766"} id={"TESTID"}>
    ウィメンズウェア100年史
  </AmazonBlock>
);

render(<App />, document.getElementById("box1"));
render(<App />, document.getElementById("box2"));
render(<App />, document.getElementById("box3"));
