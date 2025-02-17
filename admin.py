
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# 模拟数据库
members = [
    {'id': 1, 'name': '张三', 'status': 'pending'},
    {'id': 2, 'name': '李四', 'status': 'pending'}
]

competitions = []

# 审核参赛信息
@app.route('/members/<int:member_id>', methods=['PUT'])
def approve_member(member_id):
    for member in members:
        if member['id'] == member_id:
            member['status'] = 'approved'
            return jsonify(member), 200
    return jsonify({'error': 'Member not found'}), 404

# 增加竞赛
@app.route('/competitions', methods=['POST'])
def add_competition():
    data = request.json
    new_competition = {
        'id': len(competitions) + 1,
        'name': data.get('name'),
        'description': data.get('description')
    }
    competitions.append(new_competition)
    return jsonify(new_competition), 201

# 上传竞赛讲解视频
@app.route('/competitions/video', methods=['POST'])
def upload_video():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = file.filename
        file.save(os.path.join('uploads', filename))
        return jsonify({'filename': filename}), 201
    return jsonify({'error': 'File upload failed'}), 500

if __name__ == '__main__':
    app.run(debug=True)