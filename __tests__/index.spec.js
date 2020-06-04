import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import IndexPage from "../pages/index";
it("renders correctly", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<IndexPage/>);
  expect(result).toMatchSnapshot();
})
