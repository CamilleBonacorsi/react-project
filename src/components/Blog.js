import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './Article.js';
import Menu from './Menu.js';
import style from '../App.css';
import { Link } from 'react-router-dom';


const Blog = () => {

    const [data, setData] = useState([]);
    const [authorName, setAuthorName] = useState('');
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        axios.get("http://localhost:3003/articles").then((res) => setData(res.data));
    }, []);


    const addArticle = (element) => {
        element.preventDefault();
        if (newMessage.length >= 100) {
            axios.post('http://localhost:3003/articles', { author: authorName, content: newMessage, date: Date.now() }).then(updateArticles);
        } else {
            alert('Message trop court');
        }
    }

    const updateArticles = () => {
        axios.get("http://localhost:3003/articles").then((res) => setData(res.data));
    }


    return (
        <div id='Blog'>

            <h1>Blog</h1>

            <form id='div-input-article' onSubmit={(element) => addArticle(element)}>
                <input
                    type="text"
                    placeholder='Nom'
                    className='name-input'
                    onChange={(element) => setAuthorName(element.target.value)}
                    required />

                <textarea
                    id='blog-textarea'
                    placeholder='Message'
                    className='message-input'
                    onChange={(element) => setNewMessage(element.target.value)}
                    required />


                <p id='blog-min-chars' >Veuillez écrire un minimum de 100 caractères.</p>

                <button type='submit'>Envoyer</button>

            </form>

            <div id='div-output-article'>
                {data.map((element) =>
                    <Article author={element.author} date={element.date} message={element.content} updateArticles={updateArticles} />
                )}
            </div>
        </div >
    );
};

export default Blog;