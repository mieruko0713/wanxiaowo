# -*- encoding = UTF8 -*-

from wanxiaowo import app
from models import Image, User
from flask import render_template

@app.route("/")
def index():
    images = Image.query.order_by("id desc").limit(10)
    return render_template("index.html", images=images)

@app.route("/image/<int:image_id>")
def image(image_id):
    image = Image.query.get(image_id)
    if image == None:
        return redirect("/")
    return render_template("pageDetail.html", image=image)

@app.route("/profile/<int:user_id>")
def profile(user_id):
    user = User.query.get(user_id)
    if user == None:
        return redirect("/")
    return render_template("profile.html", user=user)