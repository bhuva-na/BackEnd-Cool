from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Bhuvana01@localhost/usersDetails'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)

@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{'id': p.id, 'title': p.title, 'description': p.description} for p in projects])

@app.route('/projects', methods=['POST'])
def add_project():
    data = request.json
    new_project = Project(title=data['title'], description=data['description'])
    db.session.add(new_project)
    db.session.commit()
    return jsonify({'message': 'Project added successfully!'})

@app.route('/projects/<int:id>', methods=['PUT'])
def update_project(id):
    data = request.json
    project = Project.query.get(id)
    if not project:
        return jsonify({'message': 'Project not found!'}), 404

    project.title = data['title']
    project.description = data['description']
    db.session.commit()
    return jsonify({'message': 'Project updated successfully!'})

@app.route('/projects/<int:id>', methods=['DELETE'])
def delete_project(id):
    project = Project.query.get(id)
    if not project:
        return jsonify({'message': 'Project not found!'}), 404

    db.session.delete(project)
    db.session.commit()
    return jsonify({'message': 'Project deleted successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
