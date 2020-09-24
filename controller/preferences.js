"use strict";

const {PreferencesService} = require("../service/preferences");

class Preferences {

    static async findAll(req, res) {
        const service = new PreferencesService();
        res.json(await service.findAll());
    }

}

router.route('/preferences').get(Preferences.findAll);