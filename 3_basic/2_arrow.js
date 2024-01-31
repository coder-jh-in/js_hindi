// Arrow Function

const user = {
  username: "Rakesh",
  price: 33,
  wlcMsg: function () {
    console.log(`${this.username}, welcome to home.`);
  },
};
user.wlcMsg();

// function one() {
//   console.log(this);
// }
// one();

const chai = () => {
  const username = "rakesh";
  console.log(this);
};
chai();
