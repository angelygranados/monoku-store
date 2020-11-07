import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Stand1: {
            screens: {
              TabOneScreen: "Stand 1",
            },
          },
          Stand2: {
            screens: {
              TabTwoScreen: "Stand 2",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
