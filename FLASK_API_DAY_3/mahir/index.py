# API 
# How to implement FastApi in Flask
# from flask import Flask
# from flask_restful import Api,Resource 
# app=Flask(__name__)
# api=Api(app)
# class Test_Case1(Resource):
#     def get(self):
#         return {"Data":"Welcome to  Flaks_restful API's Support"}
# api.add_resource(Test_Case1,"/GLA")
# if(__name__=="__main__"):
#     app.run(debug=True)

# we are passing some values.
# from flask import Flask
# from flask_restful import Api,Resource 
# app=Flask(__name__)
# api=Api(app)
# class Test_Case1(Resource):
#     def get(self,name):
#         return {"Data":"My name is:{}".format(name)}
# api.add_resource(Test_Case1,"/KUNNU/<string:name>")
# if(__name__=="__main__"):
#     app.run(debug=True)

# we are passing some id.
# from flask import Flask
# from flask_restful import Api,Resource 
# app=Flask(__name__)
# api=Api(app)
# class Test_Case1(Resource):
#     def get(self,id):
#         return {"Data":"My ID is:{}".format(id)}
# api.add_resource(Test_Case1,"/IHUB/<int:id>")
# if(__name__=="__main__"):
#     app.run(debug=True)

# Items Database
# from flask import Flask
# from flask_restful import Api,Resource 
# app=Flask(__name__)
# api=Api(app)
# Product_Infor={
#     1:{"Pid":1001,"Pname":"Mobile_1","Price":25000,"Company":"Samsung"},
#     2:{"Pid":1002,"Pname":"Mobile_2","Price":27000,"Company":"Samsung"},
#     3:{"Pid":1003,"Pname":"Mobile_3","Price":21000,"Company":"Samsung"},
#     4:{"Pid":1004,"Pname":"Mobile_3","Price":9000,"Company":"Samsung"},
#     5:{"Pid":1005,"Pname":"Mobile_3","Price":7000,"Company":"Samsung"},

# }
# class Test_Case1(Resource):
#     def get(self):
#         return Product_Infor 
# api.add_resource(Test_Case1,"/IHUB")
# if(__name__=="__main__"):
#     app.run(debug=True)

# Find/Search by the ids
# from flask import Flask
# from flask_restful import Api,Resource 
# app=Flask(__name__)
# api=Api(app)
# Product_Infor={
#     1:{"Pid":1001,"Pname":"Mobile_1","Price":25000,"Company":"Samsung"},
#     2:{"Pid":1002,"Pname":"Mobile_2","Price":27000,"Company":"Samsung"},
#     3:{"Pid":1003,"Pname":"Mobile_3","Price":21000,"Company":"Samsung"},
#     4:{"Pid":1004,"Pname":"Mobile_3","Price":9000,"Company":"Samsung"},
#     5:{"Pid":1005,"Pname":"Mobile_3","Price":7000,"Company":"Samsung"},

# }
# class Test_Case1(Resource):
#     def get(self,id):
#         return Product_Infor[id]
# api.add_resource(Test_Case1,"/IHUB/<int:id>")
# if(__name__=="__main__"):
#     app.run(debug=True)

# pass key 1 in "1" in Product_info
# from flask import Flask
# from flask_restful import Api,Resource 
# app=Flask(__name__)
# api=Api(app)
# Product_Infor={
#     "1":{"Pid":1001,"Pname":"Mobile_1","Price":25000,"Company":"Samsung"},
#     "2":{"Pid":1002,"Pname":"Mobile_2","Price":27000,"Company":"Samsung"},
#     "3":{"Pid":1003,"Pname":"Mobile_3","Price":21000,"Company":"Samsung"},
#     "4":{"Pid":1004,"Pname":"Mobile_3","Price":9000,"Company":"Samsung"},
#     "5":{"Pid":1005,"Pname":"Mobile_3","Price":7000,"Company":"Samsung"},

# }
# class Test_Case1(Resource):
#     def get(self,id):
#         return Product_Infor[id] 
# api.add_resource(Test_Case1,"/IHUB/<string:id>")
# if(__name__=="__main__"):
#     app.run(debug=True)

# BOOTSTRAP
from flask import Flask ,render_template
app=Flask(__name__)
@app.route("/home")
def Test_Case1():
    return render_template("home.html")
if(__name__=="__main__"):
    app.run(debug=True)

