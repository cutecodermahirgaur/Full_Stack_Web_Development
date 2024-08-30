from flask import Flask
app=Flask(_name_)
@app.route("/")
def Test_Case1():
    return "<h1>Welcome to Flask Karan</h1>"
if(_name_=="_main_"):
    app.run(debug=True) 
    