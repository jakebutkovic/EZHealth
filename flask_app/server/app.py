from flask import Flask, render_template, g, jsonify
import sqlite3

app = Flask(__name__)

DATABASE = '/workspaces/EZHealth/db/ezhealth1.db'

def get_db():
    db = getattr(g, '_ezhealth1', None)
    if db is None:
        db = g._ezhealth1 = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.route('/')
def home():
    return render_template('index.html')

"""
@app.route('/users', methods=['GET'])
def get_users():
    db = get_db()
    query = "SELECT * FROM users"
    users = db.execute(query).fetchall()
    users_list = [dict(user) for user in users]
    return jsonify(users_list)
"""
    
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_ezhealth1', None)
    if db is not None:
        db.close()


if __name__ == '__main__':
    app.run(debug=True)
