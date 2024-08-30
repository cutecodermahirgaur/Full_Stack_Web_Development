from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory user storage (for demonstration purposes only)
USERS = {
    'user1': 'password123',
    'user2': 'mypassword'
}

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if USERS.get(username) == password:
            return redirect(url_for('welcome', username=username))
        else:
            return 'Invalid username or password', 401

    return render_template('login.html')

@app.route('/welcome/<username>')
def welcome(username):
    return f'Welcome, {username}!'

if __name__ == '__main__':
    app.run(debug=True)
