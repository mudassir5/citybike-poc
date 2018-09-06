import https from 'https';

export function getStations(cb, req) {
    let citiesJSON = "";
    let stationsJSON = "";
    let cities = "";
    let stations = "";
    https.get('https://api.citybik.es/v2/networks', (res) => {
        res.on('data', (chunk) => {
            citiesJSON = citiesJSON + chunk;

        });
        res.on('end', () => {
            cities = JSON.parse(citiesJSON);
            let stationsArr = cities.networks.filter((o) => {
                if (o.location)
                    return o.location.city == req.query.city
            })
            if (stationsArr.length) {
                https.get(`https://api.citybik.es/${stationsArr[0].href}`, (res) => {
                    res.on('data', (chunk) => {
                        stationsJSON = stationsJSON + chunk;

                    });
                    res.on('end', () => {
                        stations = JSON.parse(stationsJSON);
                        cb(null, stations)
                    })
                });
            } else {
                cb({
                    message: "Record Not Found"
                }, null);
            }

        })
    });
}