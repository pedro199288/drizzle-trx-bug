import { exercises } from 'schema'
import db from 'connection'

// simple insertion
// const startInsertion = performance.now()
// let finishInsertion = 0
// db.insert(exercises).values({
//   name: "Bench Press",
//   profileId: 0,
// }).then((result) => {
//   finishInsertion = performance.now()
//   console.log({result})
// })
// .catch((error) => {
//   finishInsertion = performance.now()
//   console.log({error})
// })
// .finally(() => {
//   console.log(`Insertion took ${finishInsertion - startInsertion} ms`)
// })

// insertion inside a trx
const startTransaction = performance.now()
let finishTransaction = 0
db.transaction(async (trx) => {
  await trx.insert(exercises).values({
    name: "Bench Press",
    profileId: 0,
  })
}).then((result) => {
  finishTransaction = performance.now()
  console.log({result})
})
.catch((error) => {
  finishTransaction = performance.now()
  console.log({error})
})
.finally(() => {
  console.log(`Transaction took ${finishTransaction - startTransaction} ms`)
})


db.select().from(exercises)
  .then((rows) => {
    console.log({rows})
  })
