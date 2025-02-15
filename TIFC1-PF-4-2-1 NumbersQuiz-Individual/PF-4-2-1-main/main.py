import json
import requests


def trivia_fetch(num):
    response = requests.get("http://numbersapi.com/"+str(num)+"?json")
    trivia = json.loads(response.content)
    print(trivia)
    return (trivia)


trivia_fetch(109)
