import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "chore",
        "ci",
        "docs",
        "style",
        "test",
        "build",
        "scope",
        "revert",
        "perf",
      ],
    ],
  },
};

module.exports = Configuration;
