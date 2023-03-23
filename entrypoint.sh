#!/bin/sh

# Copyright 2018 The OpenSDS Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.



SODA_DELFIN_URL=${SODA_DELFIN_URL:-http://127.0.0.1:8190}
SODA_ALERTMANAGER_URL=${SODA_ALERTMANAGER_URL:-http://127.0.0.1:9093}
SODA_DELFIN_API_LOCATION=${SODA_DELFIN_API_LOCATION:-resource-monitor}
SODA_DELFIN_API_VERSION=${SODA_DELFIN_API_VERSION:-v1}
SODA_ALERTMANAGER_API_LOCATION=${SODA_ALERTMANAGER_API_LOCATION:-alertmanager}
SODA_ALERTMANAGER_API_VERSION=${SODA_ALERTMANAGER_API_VERSION:-api/v1}

LISTEN_PORT=${LISTEN_PORT:-9001}
cat > /etc/nginx/conf.d/default.conf <<EOF
    server {
        listen ${LISTEN_PORT} default_server;
        listen [::]:${LISTEN_PORT} default_server;
        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;
        server_name _;
        location /${SODA_DELFIN_API_LOCATION}/ {
            proxy_pass ${SODA_DELFIN_URL}/${SODA_DELFIN_API_VERSION}/;
        }                
        location /${SODA_ALERTMANAGER_API_LOCATION}/ {
            proxy_pass ${SODA_ALERTMANAGER_URL}/${SODA_ALERTMANAGER_API_VERSION}/;
        }
    }
EOF

# print some log to stdin
echo "Service Start Time $(date)"
echo "Configuration /etc/nginx/conf.d/default.conf"
cat /etc/nginx/conf.d/default.conf

echo "Starting application..."
echo "SODA_HOST_IP = ${SODA_HOST_IP}"
echo "SODA_PROMETHEUS_PORT = ${SODA_PROMETHEUS_PORT}"
echo "SODA_ALERTMANAGER_PORT = ${SODA_ALERTMANAGER_PORT}"
echo "SODA_GRAFANA_PORT = ${SODA_GRAFANA_PORT}"
echo "{\"hostIP\": \"$SODA_HOST_IP\",\"prometheusPort\": \"$SODA_PROMETHEUS_PORT\",\"alertmanagerPort\": \"$SODA_ALERTMANAGER_PORT\",\"grafanaPort\": \"$SODA_GRAFANA_PORT\"}" >/var/www/html/assets/data/runtime.json

# start nginx service
/usr/sbin/nginx -g "daemon off;"

