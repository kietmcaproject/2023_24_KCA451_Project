from flask import Flask, render_template, redirect, request, url_for, session, jsonify
import pyrebase
import os
from moviepy.editor import VideoFileClip
import speech_recognition as sr
from pydub import AudioSegment
import cv2
import numpy as np
from keras.models import load_model
import requests
from nltk.sentiment import SentimentIntensityAnalyzer

import nltk

try:
    nltk.data.find("vader_lexicon")
except LookupError:
    nltk.download("vader_lexicon")

app = Flask(__name__)

# Configure your Firebase project
firebase_config = {
    "apiKey": "AIzaSyAFHUh4PK_L7s0_vDnnndKHR2ZTNjn44Vs",
    "authDomain": "innotech-369ab.firebaseapp.com",
    "databaseURL": "https://innotech-369ab-default-rtdb.firebaseio.com",
    "projectId": "innotech-369ab",
    "storageBucket": "innotech-369ab.appspot.com",
    "messagingSenderId": "1058875935710",
    "appId": "1:1058875935710:web:9f19f44fd24007951beb4f",
    "measurementId": "G-W3N5CDJHDQ",
}

firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()

# Use a random secret key for session management
app.secret_key = "12345"


# Routes
@app.route("/")
def home():
    return render_template(
        "home.html", video_url=url_for("static", filename="video.mp4")
    )


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        try:
            user = auth.sign_in_with_email_and_password(email, password)
            session["user"] = user
            return redirect(url_for("profile"))
        except Exception as e:
            error_message = get_custom_error_message(e)
            return render_template("login.html", error=error_message)

    return render_template("login.html")


def get_custom_error_message(error):
    # Customize error message based on the specific error received
    if "INVALID_LOGIN_CREDENTIALS" in str(error):
        return "Invalid email or password. Please try again."
    elif "EMAIL_NOT_FOUND" in str(error):
        return "Email not found. Please try again."
    elif "WEAK_PASSWORD" in str(error):
        return "Password should be at least 6 characters"
    elif "EMAIL_EXISTS" in str(error):
        return "Email already exists. Please try again."
    elif "INVALID_EMAIL" in str(error):
        return "Invalid email. Please try again."
    elif "INVALID_PASSWORD" in str(error):
        return "Invalid password. Please try again."
    elif "USER_DISABLED" in str(error):
        return "User account has been disabled. Please contact support."
    elif "TOO_MANY_ATTEMPTS_TRY_LATER" in str(error):
        return "Too many failed attempts. Please try again later."
    elif "USER_NOT_FOUND" in str(error):
        return "User not found. Please try again."
    elif "INVALID_ID_TOKEN" in str(error):
        return "Invalid credentials. Please try again."
    else:
        return "Server not responding"


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        try:
            auth.create_user_with_email_and_password(email, password)
            return redirect(url_for("login"))
        except Exception as e:
            error_message = get_custom_error_message(e)
            return render_template("register.html", error=error_message)

    return render_template("register.html")


@app.route("/profile")
def profile():
    if "user" in session:
        user = session["user"]
        return render_template("profile.html", user=user)
    else:
        return redirect(url_for("login"))


@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("home"))


@app.route("/upload_video", methods=["POST"])
def upload_video():
    if "user" in session:
        user = session["user"]
        if "video" in request.files:
            video_file = request.files["video"]
            if video_file.filename != "":
                # Save the video to the server's file system
                video_path = os.path.join(
                    app.root_path, "static", "uploaded_videos", video_file.filename
                )
                video_file.save(video_path)

                # Perform any additional logic (e.g., save video information to a database)

                return jsonify(
                    {"status": "success", "message": "Video uploaded successfully"}
                )
            else:
                return jsonify({"status": "error", "message": "No file selected"})
        else:
            return jsonify({"status": "error", "message": "No file uploaded"})
    else:
        return jsonify({"status": "error", "message": "User not authenticated"})


@app.route("/choice")
def choice():
    return render_template("choice.html")


@app.route("/audio_analysis")
def audio_analysis():
    if "user" in session:
        user = session["user"]
        video_path = os.path.join(
            app.root_path, "static", "uploaded_videos", "video.mp4"
        )

        # Extract audio from the video
        audio_path = os.path.join(
            app.root_path, "static", "uploaded_videos", "audio.wav"
        )
        video = VideoFileClip(video_path)
        audio = video.audio
        audio.write_audiofile(audio_path)

        # Use SpeechRecognition to transcribe audio to text
        recognizer = sr.Recognizer()
        with sr.AudioFile(audio_path) as source:
            audio_data = recognizer.record(source)

        # Inside the audio_analysis route
        try:
            text = recognizer.recognize_google(audio_data)

            # Perform sentiment analysis
            sia = SentimentIntensityAnalyzer()
            sentiment_scores = sia.polarity_scores(text)

            # Calculate vocabulary score
            words = text.split()
            unique_words = set(words)
            vocabulary_score = len(unique_words) / len(words)

            # Format the results in point format
            result_points = {
                "transcribed_text": text,
                "sentiment_scores": {
                    "pos": sentiment_scores["pos"],
                    "neu": sentiment_scores["neu"],
                    "neg": sentiment_scores["neg"],
                    "compound": sentiment_scores["compound"],
                },
                "vocabulary_score": vocabulary_score,
            }

            # Perform further analysis or display the results
            return render_template("audiodash.html", analysis_result=result_points)
        except sr.UnknownValueError:
            return jsonify({"status": "error", "message": "Could not understand audio"})
        except sr.RequestError:
            return jsonify(
                {
                    "status": "error",
                    "message": "Could not request results; check network connection",
                }
            )


@app.route("/video_analysis")
def video_analysis():
    if "user" in session:
        user = session["user"]
        video_path = os.path.join(
            app.root_path, "static", "uploaded_videos", "video.mp4"
        )

        emotion_model = load_model("static\models\emotion_model.hdf5")

        # emotion_model.compile(loss="categorical_crossentropy", optimizer="adam", metrics=["accuracy"])

        video_stream = cv2.VideoCapture(video_path)

        if not video_stream.isOpened():
            return jsonify({"status": "error", "message": "Could not open video file"})

        emotion_results = []

        while True:
            ret, frame = video_stream.read()
            if not ret:
                break

            # Preprocess the frame for emotion recognition
            processed_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            processed_frame = cv2.resize(processed_frame, (64, 64))
            processed_frame = processed_frame / 255.0
            processed_frame = np.reshape(processed_frame, (1, 64, 64, 1))

            # Predict emotion from video frame
            emotion_prediction = emotion_model.predict(processed_frame)
            emotion_label = np.argmax(emotion_prediction)

            emotion_results.append(emotion_label)

        # Release the video stream to free up resources
        video_stream.release()

    # Remove the temporary directory and the uploaded video and audio files

    # Map the integer labels to human-readable emotions
    emotion_labels = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"]
    emotion_percentages = {emotion: 0 for emotion in emotion_labels}

    # Count the detected emotions
    for emotion_label in emotion_results:
        emotion_percentages[emotion_labels[emotion_label]] += 1

    total_frames = len(emotion_results)

    # Check for predominant emotions
    predominant_emotion = max(emotion_percentages, key=emotion_percentages.get)
    predominant_percentage = (
        emotion_percentages[predominant_emotion] / total_frames
    ) * 100

    emotion_percentages = {
        emotion: (count / total_frames) * 100
        for emotion, count in emotion_percentages.items()
    }

    return render_template("videodash.html", emotion_data=emotion_percentages)


if __name__ == "__main__":
    app.run(debug=True)
