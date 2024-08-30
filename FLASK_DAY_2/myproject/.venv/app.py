from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

# Define a valid username and password
VALID_USERNAME = 'user'
VALID_PASSWORD = 'password123'

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username == "Dheeraj_Gaur" and password == "Dheeraj@GLA":
            return redirect(url_for('main_page', username=username))
        else:
            return render_template('login.html', error=True)
    return render_template('login.html', error=False)

@app.route('/main')
def main_page():
    username = request.args.get('username', '')
    return render_template('main_page.html', username=username)

if __name__ == '__main__':
    app.run(debug=True)
