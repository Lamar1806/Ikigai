from flask import Flask, jsonify
from flask_cors import CORS
from image_urls import image_urls

app = Flask(__name__)
CORS(app)

# Dummy data with movie titles, years, and image URLs
disney_movies = [
    {"id": 1, "title": "The Lion King", "year": 1994, "image_url": image_urls["The Lion King"]},
    {"id": 2, "title": "Aladdin", "year": 1992, "image_url": "https://m.media-amazon.com/images/I/91GPR5VAShL._AC_UF1000,1000_QL80_.jpg"},
    {"id": 3, "title": "Beauty and the Beast", "year": 1991, "image_url": ""},
    {"id": 4, "title": "The Little Mermaid", "year": 1989, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OddNUWJ5xPNEtQt9SYk326AeaXhvmN0I-g&usqp=CAU"},
    {"id": 5, "title": "Toy Story", "year": 1995, "image_url": image_urls["Toy Story"]},
    {"id": 6, "title": "Frozen", "year": 2013, "image_url": image_urls["Frozen"]},
    {"id": 7, "title": "Moana", "year": 2016, "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRC_uw0WTJK8m0_5REb7bbvt1-f-VSZ8ELYFeStk80i7rBGXSASAl7ZnK4KZ7h4sqeCk&usqp=CAU"},
    {"id": 8, "title": "Cinderella", "year": 1950, "image_url": image_urls['Cinderella']},
    {"id": 9, "title": "Snow White and the Seven Dwarfs", "year": 1937, "image_url": image_urls["Snow White and the Seven Dwarfs"]},
    {"id": 10, "title": "Finding Nemo", "year": 2003, "image_url": image_urls["Finding Nemo"]}
]

@app.route('/movies', methods=['GET'])
def get_movies():
    return jsonify(disney_movies)

if __name__ == '__main__':
    app.run(debug=True)
