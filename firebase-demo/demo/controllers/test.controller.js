const { collection, getDocs } = require("firebase/firestore/lite");
const db = require("../database/database");

module.exports = {
  getCities: async () => {
    try {
      // const citiesCol = collection(db, "cities");
      // const citySnapshot = await getDocs(citiesCol);
      // const cityList = citySnapshot.docs.map((doc) => doc.data());
      // return cityList;
      const citiesSnapShot = await db.collection("cities").get();
      let cityList = [];
      citiesSnapShot.forEach((city) => {
        cityList.push(city.data());
      });
      return cityList;
    } catch (error) {
      return error;
    }
  },
};
