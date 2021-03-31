import tweepy
import json
from config import *

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

for tweet in tweepy.Cursor(api.search,q="#cycloneproject",count=5,lang="en",since="2020-04-03").items():
    json_str=json.dumps(tweet._json)
    parsed = json.loads(json_str)
    # print(parsed.keys())
    # break
    print(json.dumps(parsed, indent=4, sort_keys=True))
    # print(f"The Text Of the Tweet is - {tweet.text}")
    # print(tweet)
    # break