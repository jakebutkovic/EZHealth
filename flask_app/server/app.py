from flask import Flask, render_template, g, jsonify
import sqlite3

app = Flask(__name__)

DATABASE = 'db/ezhealth1.db'

def get_db():
    db = getattr(g, '_ezhealth1', None)
    if db is None:
        db = g._ezhealth1 = sqlite3.connect(DATABASE)

        db.row_factory = sqlite3.Row
    return db

@app.route('/')
def home():
    return 'Home Page Test'

@app.route('/api/patients', methods=['GET'])
def get_patients():
    db = get_db()
    query = "SELECT * FROM patients"
    patients = db.execute(query).fetchall()
    patients_list = [dict(patient) for patient in patients]
    return jsonify(patients_list)

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_ezhealth1', None)
    if db is not None:
        db.close()


if __name__ == '__main__':
    app.run(debug=True)
