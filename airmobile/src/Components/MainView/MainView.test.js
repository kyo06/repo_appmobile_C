import React from "react";
import { shallow } from "enzyme";
import MainView from "./MainView";

describe("MainView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MainView />);
    expect(wrapper).toMatchSnapshot();
  });
});
