from flask import Blueprint, jsonify, request
from Firebaseinitlization.Firebaseinitlization import db

user_bp = Blueprint("CandidateBluePrint", __name__)

@user_bp.route('/SignUp_user', methods=['POST'])
def sign_up_candidate():
    try:
        data = request.get_json()
        email = data.get("Email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        # Check if the user with the given email already exists
        existing_user = db.collection("Users").where("email", "==", email).get()
        if existing_user:
            return jsonify({"error": "Email already exists. Please choose a different email."}), 400

        # Create a new document in the "Users" collection with auto-generated ID
        user_ref = db.collection("Users").document()
        user_ref.set({
            "email": email,
            "password": password
        })

        return jsonify({"message": "User signed up successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@user_bp.route('/Login_user', methods=['POST'])
def login_candidate():
    try:
        data = request.get_json()
        email = data.get("Email")
        password = data.get("password")

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        # Query the Firestore collection to find a user with the provided email and password
        query = db.collection("Users").where("email", "==", email).where("password", "==", password).limit(1)
        result = query.get()

        if not result:
            return jsonify({"error": "Invalid email or password"}), 401

        # Get the user data from the result
        user_data = result[0].to_dict()

        return jsonify({"message": "User logged in successfully", "user_data": user_data}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
