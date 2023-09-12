import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  minify: true,
  plugins: [dts()],
}).then(({ success, logs }) =>
  console.log(success ? "Build succeeded" : `Build error\n${logs}`),
);
