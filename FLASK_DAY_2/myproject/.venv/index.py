# from flask import Flask , render_template

# app = Flask(__name__)

# @app.route("/home")
# def test_case1():
#     return render_template("home.html")

# @app.route("/about")
# def test_case2():
#     return render_template("about.html")

# @app.route("/service")
# def test_case3():
#     return render_template("service.html")

# @app.route("/contact")
# def test_case4():
#     return render_template("contact.html")

# if __name__ == "__main__":
#     app.run(debug=True)

# from flask import Flask,render_template
# app=Flask(__name__)
# @app.route("/home")
# def Test_Case1():
#     return render_template("home.html")
# if(__name__=="__main__"):
#     app.run(debug=True)

# Using Post Method

from flask import Flask, request

app = Flask(__name__)

@app.route("/home", methods=["POST"])
def Test_Case1():
    user_1 = request.form.get("username")
    pass_1 = request.form.get("password")
    
    if user_1 == "Rahul_12345" and pass_1 == "R_12345":
        return "<h1><tt>Valid user ....</tt></h1>"
    else:
        return "<h1><tt>In_Valid user ....</tt></h1>"

if __name__ == "__main__":
    app.run(debug=True)

# Using GET METHOD

# from flask import Flask,render_template,request
# app=Flask(__name__)
# @app.route("/home",methods=["GET"])
# def Test_Case1():
#     user_1=request.args.get("username")
#     pass_1=request.args.get("password")
#     if(user_1=="Rahul_12345" and pass_1=="R_12345"):
#         return "<h1><tt>Valid user ....</tt></h1>"
#     else:
#         return "<h1><tt>In_Valid user ....</tt></h1>"
# if(__name__=="__main__"):
#     app.run(debug=True)

