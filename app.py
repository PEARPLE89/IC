from flask import Flask, render_template

app = Flask(__name__)

# Créez une route pour la page d'accueil (index.html)
@app.route('/')
def index():
    return render_template('index.html')

# Créez une route pour la page biographie
@app.route('/biographie')
def biographie():
    return render_template('biographie.html')

# Créez une route pour la page galerie photo
@app.route('/galerie')
def galerie():
    return render_template('galerie.html')

# Créez une route pour la page playlist
@app.route('/playlist')
def playlist():
    # Définit la liste de chansons
    songs = [
        {
            'title': 'Sous_le_vent',
            'file_path': 'static/media/1_souslevent.mp3'
        },
        {
            'title': 'Sang_pour_sang',
            'file_path': 'static/media/2_sangpoursang.mp3'
        },
        {
            'title': 'Maman',
            'file_path': 'static/media/3_mamanmae.mp3'
        },
        {
            'title': 'Always_Gaga',
            'file_path': 'static/media/4_alwaysgaga.mp3'
        },
        {
            'title': "L_envie",
            'file_path': 'static/media/5_lenvie.mp3'
        }
    ]

    return render_template('playlist.html', songs=songs)

if __name__ == '__main__':
    app.run(debug=True)
