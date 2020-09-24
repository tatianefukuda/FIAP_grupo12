"use strict";

const fake_user = [
	{id: 1, gender: "female"},
	{id: 2, gender: "male"},
];

class UserPreferences {
    constructor (user_id, preference_id, enable) {
        this.user_id = user_id;
        this.preference_id = preference_id;
        this.enable = enable;
    }
    isValidForUser() {
		let user = fake_user.find((user) => { return user.id == parseInt(this.user_id)});
		if (user.gender == 'male') {
            return parseInt(this.preference_id) != 1;
		}
    }
}

module.exports['UserPreferences'] = UserPreferences;