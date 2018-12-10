const client = require('../db-client');
const synths = require('./synths-data.json');
const manufacturers = require('./manufacturers-data');

Promise.all(
  manufacturers.map(manufacturer => {
    return client.query(`
      INSERT INTO manufacturer (name, short_name)
      VALUES ($1, $2);
    `,
    [manufacturer.name, manufacturer.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      synths.map(synth => {
        return client.query(`
          INSERT INTO synths (name, manufacturer_id, image, polyphonic, year)
          SELECT
            $1 as name,
            id as manufacturer_id,
            $3 as image,
            $4 as polyphonic,
            $5 as year
          FROM manufacturer
          WHERE name = $2;
        `,
        [synth.name, synth.manufacturer, synth.image, synth.polyphonic, synth.year]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });