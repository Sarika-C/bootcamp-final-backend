const Diet = require('../../models/Diet')

const addDiet = async (obj, { input }, context) => {
  console.log('ADD_DIET RESOLVER')
  try {
    const insert = await Diet.query().insert({
      userID: input.user.id,
      restriction: input.restriction,
    }).returning('*')
    return insert
  } catch (err) {
    console.log(err)
  }
}

const resolver = {
  Mutation: {
    addDiet,
  },
}

module.exports = resolver
