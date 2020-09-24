const {Db} = require("../infra/db");
const {Preference} = require("../domain/entity/preference");

class Preferences {
	constructor() {
		Db.createPool();
	}
	async findAll() {
		const preferences = await Db.pool().query("SELECT * FROM preferences");
		preferences.map((row) => {
			return new Preference(row.id, row.name, row.description)
		});
		return preferences;
	}
}

module.exports['PreferencesRepository'] = Preferences;