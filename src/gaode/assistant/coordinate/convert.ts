// https://restapi.amap.com/v3/assistant/coordinate/convert

const text = await Bun.file("./src/gaode/assistant/coordinate/欢乐颂.txt").text();

const lntlatList = text.split("\n");

// let i = 0;
// const timer = setInterval(() => {
//   if (i >= lntlatList.length) clearInterval(timer);
//   fetch(
//     `https://restapi.amap.com/v3/assistant/coordinate/convert?key=b10b836667b69e3d8823db90d88507e9&locations=${lntlatList[
//       i
//     ].toString()}&coordsys=baidu`
//   )
//     .then((res) => res.json())
//     .then(async (res: any) => {
//       console.log(lntlatList[i].toString(), res.locations);
//       const output = Bun.file("./gaode/assistant/coordinate/output.csv");
//       const text = await output.text();
//       await Bun.write(
//         "./gaode/assistant/coordinate/output.csv",
//         `${text}${lntlatList[i].toString()},${res.locations}\n`
//       );
//     });
//   i++;
// }, 80);

import gcoord from "gcoord";

for (let i = 0; i < lntlatList.length; i++) {
  const coord = lntlatList[i].split(",") as unknown as [number, number];
  const result = gcoord.transform(
    coord, // 经纬度坐标
    gcoord.BD09, // 当前坐标系
    gcoord.GCJ02 // 目标坐标系
  );

  const output = Bun.file("./src/gaode/assistant/coordinate/coco.csv");
  const text = await output.text();
  await Bun.write(
    "./src/gaode/assistant/coordinate/coco.csv",
    `${text}${lntlatList[i].toString()},${result}\n`
  );
}
