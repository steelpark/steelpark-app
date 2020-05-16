import React from "react";
import renderer from "react-test-renderer";

import { Aller_Std_BdIt } from "../StyledText";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Aller_Std_BdIt>Snapshot test!</Aller_Std_BdIt>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
