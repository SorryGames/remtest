import json
import re


def get_packs(search_key, app):
    if search_key.startswith("#"):
        search_hashtag(search_key[1:])
    else:
        search_word(search_key)
    #
    #
    with app.open_resource("packs.conf", "r") as file:
        filenames = file.read()
    #
    filenames = [ i for i in filenames.split(" ") if i ]
    #
    packs = []
    for i in filenames:
        i += ".json"
        with app.open_resource("packs/{}".format(i), "r") as file:
            packs.append(json.load(file))
            # re.findall()
    #
    return packs

def search_hashtag(search_key):
    pass

def search_word(search_key): 
    search_word