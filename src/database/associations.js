const categoryModel = require('../models/Category');
const noteModel = require('../models/Notes');

noteModel.belongsToMany(categoryModel, { through: 'noteCategory' });
categoryModel.belongsToMany(noteModel, { through: 'noteCategory' });


