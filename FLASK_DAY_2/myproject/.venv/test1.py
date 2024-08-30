from flask import Flask
app=Flask(__name__)
@app.route("/")
def Test_Case1():
    return "<h1>Welcome to Flask Karan</h1>"
if(__name__=="__main__"):
    app.run(debug=True)