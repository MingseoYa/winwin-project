import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://main-practice.codebootcamp.co.kr/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "src/commons/graphql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false, // 프래그먼트 마스킹 비활성화 (flat 타입 적용)
      },
    },
  },
};
export default config;
