from fastapi import FastAPI 
app=FastAPI()
@app.get("/home")
async def Test_case1():
    return {"Data":"Welcome to FastAPI"}