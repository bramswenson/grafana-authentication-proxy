var fs = require('fs');

config = fs.readFileSync(process.env.APP_ROOT + '/grafana_config.js', 'utf8');
config = config.replace('CIVIQS_INFLUXDB_URL',  process.env.CIVIQS_INFLUXDB_URL);
config = config.replace('CIVIQS_INFLUXDB_USER', process.env.CIVIQS_INFLUXDB_USER);
config = config.replace('CIVIQS_INFLUXDB_PASS', process.env.CIVIQS_INFLUXDB_PASS);
config = config.replace('DK_INFLUXDB_URL',  process.env.DK_INFLUXDB_URL);
config = config.replace('DK_INFLUXDB_USER', process.env.DK_INFLUXDB_USER);
config = config.replace('DK_INFLUXDB_PASS', process.env.DK_INFLUXDB_PASS);
config = config.replace('DK_ADS_INFLUXDB_URL',  process.env.DK_ADS_INFLUXDB_URL);
config = config.replace('DK_ADS_INFLUXDB_USER', process.env.DK_ADS_INFLUXDB_USER);
config = config.replace('DK_ADS_INFLUXDB_PASS', process.env.DK_ADS_INFLUXDB_PASS);
config = config.replace('GRAFANA_INFLUXDB_URL',  process.env.GRAFANA_INFLUXDB_URL);
config = config.replace('GRAFANA_INFLUXDB_USER', process.env.GRAFANA_INFLUXDB_USER);
config = config.replace('GRAFANA_INFLUXDB_PASS', process.env.GRAFANA_INFLUXDB_PASS);

module.exports = function(req, res, next) {
  res.end(config);
}
