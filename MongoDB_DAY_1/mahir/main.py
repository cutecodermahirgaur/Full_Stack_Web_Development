from flask import Flask

from pymongo import MongoClient

client=MongoClient("mongodb://localhost:27017")
mdb=client.GLA
print("mdb------",mdb)

app=Flask(__name__)
@app.route("/")
def  hello_world():
    print("-----API CALLING------")
    # mdb.Students.insert_one({"a":1})
    # mdb.Students.insert_one({"a":"Mahir_Gaur"})
    mdb.Students.insert_one([{"a":"Mahir_Gaur"}])
    return"Hello Karan"

if(__name__=="__main__"):
    app.run(debug=True)
