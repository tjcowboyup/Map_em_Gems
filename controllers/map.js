// var Person = mongoose.model('Person', yourSchema);

exports.show = function(req, res) {
  res.render('map', {
    title: 'Map'
  });
};