from flask import (Flask, request, render_template, jsonify)
import MySQLdb

app = Flask(__name__, static_url_path = "")
db = MySQLdb.connect("localhost", "root", "", "store_locator")  
cursor = db.cursor()

@app.route("/api/v1/stores/<pincode>", methods = ["GET"])
def get_stores(pincode):
    pincode = int(pincode)
    try:
        cursor.execute("select id, address, pincode from stores x order by abs(x.pincode - %s) LIMIT 0, 5",(pincode,))       
        stores = [ dict(line) for line in [ 
            zip([ column[0] for column in cursor.description ], row) 
            for row in cursor.fetchall() ] ] 
    except Exception as e:
        print e.message
    return jsonify({"stores" : stores})

@app.route("/", methods = ["GET"])
def home():
    return render_template("index.html")

if __name__ == "__main__":
    #app.run(threaded=True , debug=True)
    app.run(threaded=True)
