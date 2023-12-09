from flask import Flask ,jsonify
app = Flask(__name__)

from BluePrints.Authentication.auth import user_bp
app.register_blueprint(user_bp)
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)

    