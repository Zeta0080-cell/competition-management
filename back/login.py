from flask import Flask, request, jsonify

app = Flask(__name__)

# 假设这是你的用户数据库
users = {
    "test": "gxnu"
}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    if email in users and users[email] == password:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)