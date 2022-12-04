import React from 'react';
import style from '../App.css';

const Article = (comment) => {
    return (
        <div id="div-article">
            <div id='article-entete'>
                <h3 id='h3-article'>{comment.author}</h3>
                <p>{comment.date}</p>
            </div>
            <hr />
            <p id='article-body'>{comment.message}</p>
            <div id='article-boutons'>
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;