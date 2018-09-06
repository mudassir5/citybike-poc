import {
    getStations
} from '../services/citybikes'

export function stations(req, res, next) {
    getStations((err, data) => {
        if (err) {
            next(err)
        } else {
            let _results = [];
            _results = data.network.stations.filter(o => o.free_bikes > 0).map(o => {
                return {
                    name: o.name,
                    free_bikes: o.free_bikes
                }
            })
            res.json(_results);
        }

    }, req);

}