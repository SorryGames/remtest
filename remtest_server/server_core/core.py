from flask import Flask, request

app = Flask(__name__)

@app.route("/search", methods=["GET"])
def search():
    return "ypa! your data has arrived: {}".format(request.args.get("key", ""));
