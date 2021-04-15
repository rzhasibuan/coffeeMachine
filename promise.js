const state = {
  stock: {
    coffeeBeans: 259,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin Kopi siap digunakan");
      } else {
        reject("maaf, mesin sedang sibuk");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve("stock cukup, bisa membuat kopi");
      } else {
        reject("stock tidak cukup!");
      }
    }, 1500);
  });
};

const brewCoffee = () => {
  console.log("sedang membuatkan kopi anda");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("kopi sudah siap ");
    }, 2000);
  });
};

function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .then((rejectReason) => {
      console.log(rejectReason);
      state.isCoffeeMachineBusy = false;
    });
}

makeEspresso();
