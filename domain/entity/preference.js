"use strict";

class Preference {
    constructor (id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

module.exports['Preference'] = Preference;