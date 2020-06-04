from flask import Flask, request, render_template
import os

from . import manage_packs


app = Flask(__name__)


@app.route("/search", methods=["GET"])
def search():
    _page_number = int(request.args.get("page", "1"))
    _key = request.args.get("key", "#all")
    _packs = manage_packs.get_packs(_key)
    _result_amount = len(_packs)
    #
    _packs = _packs[(_page_number - 1) * 10 : (_page_number) * 10]
    #
    return render_template("search_template.html", 
                            key=_key, 
                            result_amount=_result_amount, 
                            page_number=_page_number, 
                            packs=_packs)


def load_file(path_to):
    return app.open_resource(path_to, "r")



if __name__ == "__main__":
  app.run()