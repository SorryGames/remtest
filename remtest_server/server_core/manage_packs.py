from . import core
import json
import re


def get_packs(search_key):
    packs = _get_packs()
    #
    if search_key.startswith("#"):
        return _search_hashtag(packs, search_key[1:])
    else:
        return _search_word(packs, search_key)


def _get_packs():
    with core.load_file("packs.conf") as file:
        filenames = file.read()
    #
    filenames = [ i for i in filenames.split(" ") if i ]
    #
    packs = []
    for i in filenames:
        i += ".json"
        with core.load_file("packs/{}".format(i)) as file:
            packs.append(json.load(file))
    #
    return packs




def _search_hashtag(packs, search_key):
    return packs



def _search_word(packs, search_key): 
    filtered_packs = sorted(packs, key=lambda element: len(re.findall(search_key, str(element))))
    filtered_packs = [ i for i in filtered_packs if len(re.findall(search_key, str(i))) > 0 ]
    filtered_packs = filtered_packs[::-1]
    return filtered_packs