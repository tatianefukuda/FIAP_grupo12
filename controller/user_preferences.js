"use strict";
const {UserPreferencesService} = require("../service/user_preferences");

class UserPreferences {

    static async save(req, res) {
        const service = new UserPreferencesService();
        res.send(await service.save(req.body));
    }
    static async getAll(req, res) {
        const service = new UserPreferencesService();
        res.send(await service.findByUserId(req.params.id));
    }
}

router.route('/user/preferences').post(UserPreferences.save);
router.route('/user/preferences/:id').get(UserPreferences.getAll);
