while [ 1 ];
do 
  python test.py
  # Replace test.py with actual code on VM so that cron can be run at the back
  sleep 60;
  # Retrigger after a minute, can be later optimized according to API request.
  # clear;
done