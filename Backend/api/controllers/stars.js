const Star = require('../models/star');

exports.stars_get_all = (req, res, next) => {
  Star.find()
    .then(result =>
      res.status(200).json({
        wiadomosc: 'Stars registered in our dictionary',
        info: result,
      })
    )
    .catch(err => res.status(500).json(err));
};

exports.stars_add_new = (req, res, next) => {
  const star = new Star({
    name: req.body.name,
    type: req.body.type,
    mass: req.body.mass,
    radius: req.body.radius,
    temperature: req.body.temperature,
    luminosity: req.body.luminosity,
    age: req.body.age,
    distanceFromEarth: req.body.distanceFromEarth,
    constellation: req.body.constellation,
    discoveredBy: req.body.discoveredBy,
    discoveryYear: req.body.discoveryYear,
    notes: req.body.notes,
  });
  star
    .save()
    .then(result => {
      res.status(200).json({
        wiadomosc: 'Successfully added new star - ' + result.name,
        info: result,
      });
    })
    .catch(err => res.status(500).json(err));
};

exports.stars_get_by_id = (req, res, next) => {
  const id = req.params.starId;
  Star.findById(id)
    .then(result =>
      res.status(200).json({
        wiadomosc: 'Data about ' + result.name,
        info: result,
      })
    )
    .catch(err => res.status(500).json(err));
};

exports.stars_put_by_id = (req, res, next) => {
  const id = req.params.starId;
  const newStar = {
    name: req.body.name,
    type: req.body.type,
    mass: req.body.mass,
    radius: req.body.radius,
    temperature: req.body.temperature,
    luminosity: req.body.luminosity,
    age: req.body.age,
    distanceFromEarth: req.body.distanceFromEarth,
    constellation: req.body.constellation,
    discoveredBy: req.body.discoveredBy,
    discoveryYear: req.body.discoveryYear,
    notes: req.body.notes,
  };

  Star.findByIdAndUpdate(id, newStar)
    .then(() => {
      res.status(200).json({
        wiadomosc: 'Data successfully updated for star with id: ' + id,
        result: newStar
      });
    })
    .catch(err => res.status(500).json(err));
};

exports.star_delete_by_id = (req, res, next) => {
  const id = req.params.starId;
  Star.findByIdAndRemove(id)
    .then(() =>
      res.status(200).json({
        wiadomosc: 'Successfully removed star with id: ' + id,
      })
    )
    .catch(err => res.status(500).json(err));
};
