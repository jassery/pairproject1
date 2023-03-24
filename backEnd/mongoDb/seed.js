const { db } = require("./index.js");
const Pet = require ('./Pet.js')

const sampleData = require("../../react-client/data.json");

const insertSamplePet = function () {
  Pet.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSamplePet();