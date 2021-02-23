const schema = require('./../schemas')

const SchoolSchema = schema.object({
  title: 'School',
  description: 'Represents a school in our database'
}, {
  name: schema.shortString(),
  district: schema.objectId({ links: [ { rel: 'extra', href: '/db/district/{($)}' } ] }),
  city: schema.shortString(),
  state: schema.shortString(),
  countryName: schema.shortString(),
  properties: schema.object({
    title: 'School properties',
    additionalProperties: true
  }, {
    county: schema.shortString(),
    phone: schema.shortString(),
    ncesId: schema.shortString(),
    students: schema.int(),
    zip: schema.shortString(),
    geoloc: schema.object({
      title: 'Geolog'
    }, {
      lat: schema.float({ title: 'lat' }),
      lng: schema.float({ title: 'lng' })
    })
  })
})

schema.extendBasicProperties(SchoolSchema, 'school')

module.exports = SchoolSchema