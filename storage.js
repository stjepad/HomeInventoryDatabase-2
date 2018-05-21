
// overall database of homeInventory items
const HomeInventoryDatabase = {}

// database for each type of item
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// individual data items

// Furniture
// 1.
const bed = {
    name: "queen bed",
    location: "bedroom",
    description: "a comfy bed for to sleep"
  }
// 2.
const  table = {
    name: "dining room table",
    location: "dining room",
    description: "it is large and seats eight people"
  }

// 3.
  const couch = {
    name: "big ben",
    location: "livingroom",
    description: "it is an L shaped couch that is gray felt"
  }

//   Crafts
// 4.
  const painting= {
    name: "city on the rye",
    location: "hallway",
    description: "art piece that uses many different colors and shapes"
  }

// 5.
  const mask = {
    name: "spanish carnival",
    location: "livingroom",
    description: "a mask that I picked up in Barcelona"
  }

// 6.
  const djezva= {
    name: "bosanska djezva",
    location: "kitchen",
    description: "a small pot used to make turkish coffee"
  }

// 7.
  const monkeyPic = {
    name: "monkey",
    location: "livingroom",
    description: "painting on papyrus of monkey listening to music with headphones"
  }

//   electronics
// 8.
const xbox360 = {
    name: "xbox 360",
    location: "livingroom",
    description: "a gaming device"
  }

// 9.
const tv= {
    name: "samsung tv",
    location: "livingroom",
    description: "51 inch tv"
  }

// 10.
const fridge= {
    name: "whirlpool fridge",
    location: "kitchen",
    description: "an electronic ice box that stores items to keep them cool"
  }


  // database for each type of item
HomeInventoryDatabase.furniture.push(bed, couch, table)
HomeInventoryDatabase.crafts.push(painting, mask, monkeyPic, djezva)
HomeInventoryDatabase.electronics.push(fridge, tv, xbox360)

const saveDatabase = (databaseObject, localStorageKey) => {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory");