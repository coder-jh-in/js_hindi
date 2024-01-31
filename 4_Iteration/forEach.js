// forEach
const coding = ["cpp", "c", "js", "ruby", "python", "R"];
//1
coding.forEach(function (item) {
  //   console.log(item);
});
//2
coding.forEach((data, index, arr) => console.log(data, index, arr));

// obj inside array
const cs = [
  {
    lan_name: "C++",
    lan_extension: "cpp",
  },
  {
    lan_name: "C",
    lan_extension: "c",
  },
  {
    lan_name: "Python",
    lan_extension: "py",
  },
  {
    lan_name: "Java",
    lan_extension: "java",
  },
  {
    lan_name: "Javascript",
    lan_extension: "js",
  },
  {
    lan_name: "CSharp",
    lan_extension: "cs",
  },
];
cs.forEach((item) => console.log(item.lan_name, ": ", item.lan_extension));
