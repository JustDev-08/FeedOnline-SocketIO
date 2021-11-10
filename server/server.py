from flask_socketio import *
from flask import Flask, render_template
import time
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
# SocketIO Events
@app.route('/')
def index():
    """Home page."""
    return render_template('./index.html')

@socketio.on('connect')
def connected():
    print('Connected')
    
@socketio.on('disconnect')
def disconnected():
    print('Disconnected')

@socketio.on('feed')
def onFeed(mess):
    time.sleep(mess)
    emit('call','sucesss '+str(mess)+' TIME')
if __name__ == '__main__':
    print('[INFO] Starting server at http://localhost:5001')
    socketio.run(app=app , host='127.0.0.1',port=5001)
 
