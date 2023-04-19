import InboxScreen from "./InboxScreen";
import store from "../lib/store";

import { Provider } from "react-redux";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  tags: ["autodocs"],
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export const Default = {};
export const Error = {};
