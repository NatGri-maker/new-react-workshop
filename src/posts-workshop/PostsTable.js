import {Table} from 'react-bootstrap';
import{useState, useEffect}from 'react';
import axios from 'axios';
export default function PostsTable(){
    const[posts, setPost]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost/posts').then ((res)=>setPost(res.data))}, []
    )
    return (

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>userId</th>
                <th>title</th>
                <th>body</th>
            </tr>
            </thead>
            <tbody>
            { posts.map(post=>(
                <tr>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
                )
            )
            }
            </tbody>
        </Table>
    )


}




