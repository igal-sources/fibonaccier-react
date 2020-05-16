import React, { useContext } from "react";
import { shallow } from "enzyme";
import MyContext, { useMyContext } from "./MyContext";
import * as MyContextModule from "./MyContext";
import Main from "./Main";

export const MyComponent = () => {
  const { myVal } = useContext(MyContext);
  return <div data-test="my-component">{myVal}</div>;
};

describe("Main - fibonacci numbers testing", () => {
  it("renders the correct text", () => {
    jest.spyOn(MyContextModule, "useMyContext").mockImplementation(() => ({
      myVal: "foobar",
    }));

    const wrapper = shallow(
      <MyContext.Provider>
        <Main />
      </MyContext.Provider>
    ).dive();
    expect(wrapper.find(".Main-header")).toHaveLength(1);
  });
  //const wrapper = shallow(<Main />);

  //Check existing 4 operation links.
  //Next/Previous links - Changes the current fibonacci to the previous/next
  //Previous" link will be disabled if we're showing the first number in the sequence
  //Jump to link - Prompt the user to enter the page number to jump to.
  //The last number the user visits is saved
  // it("renders the correct text", () => {
  //   const wrapper = shallow(<MyComponent />, {
  //     wrappingComponent: MyContext.Provider,
  //     wrappingComponentProps: { value: { myVal: "foobar" } },
  //   });
  //   expect(wrapper.text()).toEqual("foobar"); // expected "foobar" received ""
  // });

  // it(`Should check that header is rendering`, () => {
  //   const wrapper = shallow(
  //     <MyContext.Provider value={{ myVal: "foobar" }}>
  //       <MyComponent />
  //     </MyContext.Provider>
  //   ).dive();
  //   expect(wrapper.text()).toEqual("foobar"); // expected "foobar" received ""
  //   expect(wrapper.find(".Main-header")).toHaveLength(1);
  // });
});
