var fs = require('fs');

config = fs.readFileSync(process.env.APP_ROOT + '/grafana_config.js', 'utf8');
config = config.replace('INFLUXDB_URL',  process.env.INFLUXDB_URL);
config = config.replace('INFLUXDB_USER', process.env.INFLUXDB_USER);
config = config.replace('INFLUXDB_PASS', process.env.INFLUXDB_PASS);
config = config.replace('GRAFANA_INFLUXDB_URL',  process.env.GRAFANA_INFLUXDB_URL);
config = config.replace('GRAFANA_INFLUXDB_USER', process.env.GRAFANA_INFLUXDB_USER);
config = config.replace('GRAFANA_INFLUXDB_PASS', process.env.GRAFANA_INFLUXDB_PASS);

module.exports = function(req, res, next) {
  res.end(config);
}
