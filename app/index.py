from flask import Flask
from flask_restful import Api,Resource 
app=Flask(__name__)
api=Api(app)
Product_Infor={
    1:{"Roll No":1001,"S_Name":"Mahir","Fee":25000,"College":"GLA"},
    2:{"Roll No":1002,"S_Name":"Manish","Fee":27000,"College":"GLA"},
    3:{"Roll No":1003,"S_Name":"Dheeraj","Fee":21000,"College":"GLA"},
    4:{"Roll No":1004,"S_Name":"Karan","Fee":9000,"College":"GLA"},
    5:{"Roll No":1005,"S_Name":"Vivek","Fee":7000,"College":"GLA"},

}
class Test_Case1(Resource):
    def get(self):
        return Product_Infor 
api.add_resource(Test_Case1,"/Students")
if(__name__=="__main__"):
    app.run(debug=True)
