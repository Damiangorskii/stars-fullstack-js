const Star = require('../models/star');

exports.stars_get_all = (req, res, next) => {
  Star.find()
    .then(result =>
      res.status(200).json({
        message: 'Stars registered in our dictionary',
        data: result,
      })
    )
    .catch(err => res.status(500).json(err));
};

exports.stars_add_new = (req, res, next) => {
  const star = new Star({
    name: req.body.name,
    starImage: req.file.path,
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
        message: 'Successfully added new star - ' + result.name,
        data: result,
      });
    })
    .catch(err => res.status(500).json(err));
};

exports.stars_get_by_id = (req, res, next) => {
  const id = req.params.starId;
  Star.findById(id)
    .then(result =>
      res.status(200).json({
        message: 'Data about ' + result.name,
        data: result,
      })
    )
    .catch(err => res.status(500).json(err));
};

exports.stars_put_by_id = (req, res, next) => {
  const id = req.params.starId;
  const newStar = {
    name: req.body.name,
    starImage: req.file.path,
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
        message: 'Data successfully updated for star with id: ' + id,
        data: newStar
      });
    })
    .catch(err => res.status(500).json(err));
};

exports.star_delete_by_id = (req, res, next) => {
  const id = req.params.starId;
  Star.findByIdAndRemove(id)
    .then(() =>
      res.status(200).json({
        message: 'Successfully removed star with id: ' + id,
      })
    )
    .catch(err => res.status(500).json(err));
};
