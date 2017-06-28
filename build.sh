git pull
cnpm install --production
EGG_SERVER_ENV=prod nohup node dispatch.js > stdout.log 2> stderr.log &

echo "running at port 7001"

exit 0