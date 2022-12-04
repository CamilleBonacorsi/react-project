import React, { useEffect, useState } from 'react';
import style from '../App.css';
import axios from 'axios';


const Article = (comment, updateArticles, messageModified) => {

    const [messageEditable, setMessageEditable] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const deleteArticle = () => {
        axios.delete("http://localhost:3003/articles/" + comment.idMessage).then(() => { updateArticles() });
    }

    const modifArticle = () => {
        axios.put("http://localhost:3003/articles/" + comment.idMessage, { author: comment.author, content: comment.message, date: comment.date }).then(() => { updateArticles() });
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
                <button onClick={() => { modifArticle() }}>Modifier</button>
                <button onClick={() => { deleteArticle() }}>Supprimer</button>
            </div>
        </div>
    );
    /*
        if (!messageEditable) {
            return (
    
                <div id="div-article">
                    <div id='article-entete'>
                        <h3 id='h3-article'>{comment.author}</h3>
                        <p><i>Posté le {jour} à {heure}</i></p>
                    </div>
                    <hr />
                    <p id='article-body'>{comment.message}</p>
                    <div id='article-boutons'>
                        <button onClick={() => { modifArticle() }}>Modifier</button>
                        <button onClick={() => { deleteArticle() }}>Supprimer</button>
                    </div>
                </div>
            );
    
        } else {
            return (
                <div id="div-article">
                    <div id='article-entete'>
                        <h3 id='h3-article'>{comment.author}</h3>
                        <p><i>Posté le {jour} à {heure}</i></p>
                    </div>
                    <hr />
                    <textarea
                        id='blog-textarea article-body'
                        placeholder='Message'
                        className='message-input'
                        onChange={(element) => setNewMessage(element.target.value)}
                        value={messageModified}
                        required />
                    <div id='article-boutons'>
                        <button onClick={() => { modifArticle() }}>Enregistrer</button>
                        <button onClick={() => { deleteArticle() }}>Supprimer</button>
                    </div>
                </div>
            );
        }
    */


};

export default Article;