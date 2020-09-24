const {UserPreferencesRepository} = require("../repository/user_preferences");
const {UserPreferences} = require("../domain/entity/user_preferences");

class UserPreferencesService {
	constructor() {
		this.repository = new UserPreferencesRepository();
	}

	async save(user_preferences) {
		let preferences = user_preferences.preferences.map (
			({id, enable}) => {
				let userPreference = new UserPreferences(user_preferences.user_id, id, enable);
				if (userPreference.isValidForUser()) {
					return userPreference;	
				}
				return false;
			}
		).filter((value) => {return value != false});
		this.repository.save(preferences);
		return preferences;
	}

	async findByUserId(id) {
		return await this.repository.findByUserId(id);
	}
}

module.exports['UserPreferencesService'] = UserPreferencesService;