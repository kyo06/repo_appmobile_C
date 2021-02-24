import React from "react";
import { shallow } from "enzyme";
import TabComponent from "./TabComponent";

describe("TabComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TabComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
