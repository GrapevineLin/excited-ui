import * as fs from "fs";
import * as path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
import packageJson from "../package.json";
import { fileURLToPath } from "url";

const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);
  // await build(defineConfig({}))

  // copy Package.json
  packageJson.main = "excited-ui.umd.js";
  packageJson.module = "excited-ui.esm.js";

  fs.writeFile(
    path.resolve(config.build.outDir, "package.json"),
    JSON.stringify(packageJson, null, 2),
    () => {}
  );

  // copy README.md文件
  // fs.copyFileSync(
  //   path.resolve("./README.md"),
  //   path.resolve(config.build.outDir + "/README.md")
  // );

  // const srcDir = path.resolve(__dirname, "../src/components/");
  const srcDir = fileURLToPath(new URL("../src/components/", import.meta.url));

  const componentDirs = fs.readdirSync(srcDir).filter((name) => {
    // get components directory which contains index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });

  for (const name of componentDirs) {
    const outDir = path.resolve(config.build.outDir, name);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`],
      },
      outDir,
    };

    Object.assign(config.build, custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);

    fs.writeFile(
      path.resolve(outDir, `package.json`),
      `{
          "name": "@excited-ui/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
}`,
      `utf-8`,
      () => {}
    );
  }
};

buildAll();
