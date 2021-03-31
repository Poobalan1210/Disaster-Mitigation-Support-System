import tweepy
import json
from config import *

import re
import string

import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
# nltk.download('stopwords')
# nltk.download('punkt')

#Authenticating 
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)


def datapreprocessing(textdata):
    
    #1.conerting the text into lower case
    textdata=textdata.lower()

    #2.removing the numbers
    result = re.sub(r'\d+', '', textdata)
    
    #3.removing the punctuations
    punct =[]
    punct += list(string.punctuation)
    punct += '’'
    punct.remove("'")
    for punctuation in punct:
        result = result.replace(punctuation, '')
    
    #4.removing whitespaces
    result=result.strip()
    
    #5.removing stopwords
    stop_words = set(stopwords.words('english'))
    tokens = word_tokenize(result)
    result = [i for i in tokens if not i in stop_words]

    #6 stemming
    word_stemmer=PorterStemmer()
    for i in range(len(result)):
        result[i]=word_stemmer.stem(result[i])
    
    print(result)
    # 7 lematization
    lematizer=WordNetLemmatizer()
    for i in range(len(result)):
        result[i]=lematizer.lemmatize(result[i])

    print(result)
    

    donor=["help them","donate","sponsor","distribute","donate"]
    needy=["help","save","help wanted","emergency","save us","help us"]

    for i in result:
        if i in donor:
            print("yes d")
    
    for i in result:
        if i in needy:
            print("yes n")


        




datapreprocessing("   I am indians 23 and i !! , ,. . .needs fooding 54 please help them ")



for tweet in tweepy.Cursor(api.search, q="#cycloneproject", count=1, lang="en", since="2020-04-03").items():
    json_str = json.dumps(tweet._json)
    parsed = json.loads(json_str)
    # print(parsed.keys())
    # print(json.dumps(parsed, indent=4, sort_keys=True))
    print(f"The Text Of the Tweet is - {tweet.text}")
    datapreprocessing(tweet.text)
    # print(tweet)
    # break


# 1.retrieve
# 2.data pre processing
# 3.classification
# 4.
