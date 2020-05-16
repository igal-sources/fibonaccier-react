import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";

describe("Main - fibonacci numbers testing", () => {
  const wrapper = shallow(<Main />);

  it(`Should check that header is rendering`, () => {
    expect(wrapper.find(".Main-header")).toHaveLength(1);
  });

  it(`Should check existing 4 operation links`, () => {
    const link = wrapper.find("Link");
    expect(link.at(0).text()).toEqual("<< Previous");
    expect(link.at(1).text()).toEqual("Next >>");
    expect(link.at(2).text()).toEqual("Jump to...");
    expect(link.at(3).text()).toEqual("Reset");
  });

  it(`Should check "Jump to..." to call prompt window`, () => {
    window.prompt = jest.fn(() => true);

    const nextLink = wrapper.find("Link").at(2);
    nextLink.simulate("click", { button: 1 });
    expect(window.prompt).toBeCalled();
  });

  it(`Should check onClick on Next link`, () => {
    const nextLink = wrapper.find("Link").at(0);
    nextLink.simulate("click");

    wrapper.update();
    expect(wrapper.find("#Main-fibonacci-number").text()).toEqual("1");
  });
});
