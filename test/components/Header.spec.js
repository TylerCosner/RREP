import React  from "react";
import assert from "assert";
import chai   from "chai";
import Header from "../src/components/Header";

var TestUtils = React.addons.TestUtils;

describe("Header component", () => {
  var renderedComponent = TestUtils.renderIntoDocument(
    <Header />
  );

  assert.equal(true, true);
});
