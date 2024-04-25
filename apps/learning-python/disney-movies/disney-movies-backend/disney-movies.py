from flask import Flask, jsonify

app = Flask(__name__)

# Dummy data with movie titles, years, and image URLs
disney_movies = [
    {"id": 1, "title": "The Lion King", "year": 1994, "image_url": "https://images.unsplash.com/photo-1607490703747-0519d2e398a1?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {"id": 2, "title": "Aladdin", "year": 1992, "image_url": "https://m.media-amazon.com/images/I/91GPR5VAShL._AC_UF1000,1000_QL80_.jpg"},
    {"id": 3, "title": "Beauty and the Beast", "year": 1991, "image_url": "https://images.unsplash.com/photo-1609759529469-d3345e1db22f"},
    {"id": 4, "title": "The Little Mermaid", "year": 1989, "image_url": "https://images.unsplash.com/photo-1581089792680-e738661c9ac9"},
    {"id": 5, "title": "Toy Story", "year": 1995, "image_url": "https://images.unsplash.com/photo-1573822264296-8f85b5b708bb"},
    {"id": 6, "title": "Frozen", "year": 2013, "image_url": "https://images.unsplash.com/photo-1573748246208-ba1c1b84ae94"},
    {"id": 7, "title": "Moana", "year": 2016, "image_url": "https://images.unsplash.com/photo-1574266845443-19a9f44ad5a1"},
    {"id": 8, "title": "Cinderella", "year": 1950, "image_url": "https://images.unsplash.com/photo-1590588175103-96179f00d239"},
    {"id": 9, "title": "Snow White and the Seven Dwarfs", "year": 1937, "image_url": "https://images.unsplash.com/photo-1570976770371-3ba811fca9cc"},
    {"id": 10, "title": "Finding Nemo", "year": 2003, "image_url": "https://images.unsplash.com/photo-1565736209144-d47170e19084"}
]

@app.route('/movies', methods=['GET'])
def get_movies():
    return jsonify(disney_movies)

if __name__ == '__main__':
    app.run(debug=True)
