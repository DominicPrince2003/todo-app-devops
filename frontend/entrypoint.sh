#!/bin/sh
cat <<EOF > /app/public/runtime-config.json
{
  "API_URL": "${API_URL}"
}
EOF

exec "$@"