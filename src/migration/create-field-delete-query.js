export default function createFieldDeleteQuery(table, fields, databaseFields) {
  let query = ''
  const deletedFieldFilter = dbField =>
    Object.keys(fields).indexOf(dbField) === -1

  const deletedFields = databaseFields
    .map(f => f.Field)
    .filter(deletedFieldFilter)

  deletedFields.forEach((f) => { query += 'ALTER TABLE '+table+' DROP '+f+' ; ' })
  return query
}
