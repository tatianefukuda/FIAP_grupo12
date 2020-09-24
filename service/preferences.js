const {PreferencesRepository} = require("../repository/preferences");

class Preferences {
	constructor() {
		this.repository = new PreferencesRepository();
	}
	async findAll() {
		return await this.repository.findAll();
	}
}

module.exports['PreferencesService'] = Preferences;