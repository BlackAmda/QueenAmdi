/*
Queen Amdi Bot - A whatsapp user bot.
Copyright (C) 2021 Black Amda
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
A.N.Tech any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const config = require('../../config');
const { DataTypes } = require('sequelize');

const FiltersDB = config.DATABASE.define('filter', {
    chat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pattern: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    regex: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
    }
});

async function getFilter(jid = null, filter = null) {
    var Wher = {chat: jid};
    if (filter !== null) Wher.push({pattern: filter});
    var Msg = await FiltersDB.findAll({
        where: Wher
    });

    if (Msg.length < 1) {
        return false;
    } else {
        return Msg;
    }
}


async function setFilter(jid = null, filter = null, tex = null, regx = false) {
    var Msg = await FiltersDB.findAll({
        where: {
            chat: jid,
            pattern: filter
        }
    });

    if (Msg.length < 1) {
        return await FiltersDB.create({ chat: jid, pattern: filter, text: tex, regex: regx });
    } else {
        return await Msg[0].update({ chat: jid, pattern: filter, text: tex, regex: regx });
    }
}

async function deleteFilter(jid = null, filter) {
    var Msg = await FiltersDB.findAll({
        where: {
            chat: jid,
            pattern: filter
        }
    });
    if (Msg.length < 1) {
        return false;
    } else {
        return await Msg[0].destroy();
    }
}

module.exports = {
    FiltersDB: FiltersDB,
    getFilter: getFilter,
    setFilter: setFilter,
    deleteFilter: deleteFilter
};