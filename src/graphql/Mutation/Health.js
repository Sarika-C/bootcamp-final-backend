const Health = require('../../models/Health')

const addHealth = async (obj, { input }, context) => {
  console.log("ADDHEALTH RESOLVER")
  try {
    const insert = await Health.query().insert({
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
    addHealth,
  },
}

module.exports = resolver
