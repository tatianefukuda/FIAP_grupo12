const {Db} = require("../infra/db");
const EXTRACT_DATA = Symbol();

class UserPreferences {
	constructor() {
		Db.createPool();
	}
    async save (userPreferences) {
        return await Db.pool().query("INSERT INTO user_preferences(user_id, preference_id, enable) VALUES ? ON DUPLICATE KEY UPDATE enable = VALUES(enable)", 
           [this[EXTRACT_DATA](userPreferences)]);
   }
   async findByUserId(id) {
        return await Db.pool().query("SELECT * FROM user_preferences WHERE user_id = ?", [id]);
   }
   [EXTRACT_DATA](preferences) {
        if (Array.isArray(preferences)) {
            return preferences.map(item => {return [item.user_id, item.preference_id, item.enable]});
        }
        return [[preferences.user_id, preferences.preference_id, preferences.enable]];
    }
}

module.exports['UserPreferencesRepository'] = UserPreferences;