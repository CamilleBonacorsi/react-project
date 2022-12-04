import React from 'react';
import style from '../App.css';
import axios from 'axios';


const Article = (comment, updateArticles) => {


    const deleteArticle = (id, callback) => {
        axios.delete(`http://localhost:3003/articles/$(id)`).then(() => { callback() });
    }
    let formatedDate = new Date(comment.date);
    let heure = formatedDate.toLocaleTimeString('fr');
    let jour = formatedDate.toLocaleDateString(
        "fr",
        {
            'day': 'numeric',
            'month': 'long',
            'year': 'numeric'
        }
    );

    return (
        <div id="div-article">
            <div id='article-entete'>
                <h3 id='h3-article'>{comment.author}</h3>
                <p><i>Posté le {jour} à {heure}</i></p>
            </div>
            <hr />
            <p id='article-body'>{comment.message}</p>
            <div id='article-boutons'>
                <button>Modifier</button>
                <button onClick={deleteArticle.bind(this, comment.id, updateArticles)}>Supprimer</button>
            </div>
        </div>
    );


};

export default Article;