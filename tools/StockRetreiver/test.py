# I am bored hence the test file.

import yahoostock
from pprint import pprint
# pprint(yahoostock.get_historical_prices('AAPL', '2009-01-03', '2013-01-08'))

print(yahoostock.get_required_p1_data('AAPL'))
#print(yahoostock.get_price_book('GOOG'))
#print(yahoostock.get_bid_realtime('AMZN'))

# Try 1 : Shit ~ Too long to query historical price.
# Try 2 : OoOoooO ... Looks like its working.
# Try 3 : Confirm Working. -> Push to Staging.
