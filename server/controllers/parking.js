import {
    getStations
} from '../services/citybikes'

export function parking(req, res, next) {
    getStations((err, data) => {
        if (err) {
            next(err)
        } else {
            let _results = [];
            _results = data.network.stations.filter(o => o.empty_slots > 0).map(o => {
                return {
                    name: o.name,
                    slots: o.empty_slots
                }
            })
            res.json(_results);
        }

    }, req);

}