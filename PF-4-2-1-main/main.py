import json
import requests

def trivia_fetch(num): 
    a="http://numbersapi.com/"
    b=str(num)
    c="?json"
    response=requests.get(a+b+c)
    trivia=json.loads(response.content)
    


trivia_fetch(42)["number"]