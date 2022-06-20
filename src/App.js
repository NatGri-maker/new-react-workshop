import React from 'react';
import './App.css';
import PostsTable from "./posts-workshop/PostsTable";
import PostsForm from "./posts-workshop/PostsForm";
import Header from "./posts-workshop/Header";
import Footer from "./posts-workshop/Footer";
function App() {
    return (
        <>
            <Header/>
            <PostsForm/>
            <PostsTable/>
             <Footer/>
        </>
    );
}

export default App;
