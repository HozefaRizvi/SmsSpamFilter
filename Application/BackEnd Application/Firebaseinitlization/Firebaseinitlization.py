
import firebase_admin
from firebase_admin import credentials, firestore, initialize_app

cred = credentials.Certificate(r'E:\Comsats\SMSFilteringProject\Application\BackEnd Application\Firebasesdk.json')
firebase_app = initialize_app(cred)
db = firestore.client()
