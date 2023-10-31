const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "anguscarey1",
        password: "qwertyu",
        mongodb_clustername: "cluster0",
        mongodb_database: "food-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "anguscarey1",
      password: "qwertyu",
      mongodb_clustername: "cluster0",
      mongodb_database: "food-blog",
    },
  };
};
