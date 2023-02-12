import  React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import api from '../../api';
import { Container } from "./styled";


export default function Blog() {

   const [posts, setPosts] = useState([]);


   async function getPosts() {
      setPosts(await api.getPosts())
      console.log(posts)
   }

   useEffect(() => {
     getPosts()
   }, []);



   return (
         <Container>
         {posts.map((post) => (
            <Card sx={{ maxWidth: 345, margin: 5 }} key={post.id}>
               <CardMedia
               component="img"
               alt="Zoomlion resgastes na Turquia"
               height="140"
               image={post.img}
               />
               <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {post.title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {post.desc} 
               </Typography>
               </CardContent>
               <CardActions>
               <Button size="small" href={post.url} target="_blank">Saiba mais</Button>
               </CardActions>
            </Card>
         ))
            
         }
         </Container>
     
    
  );
}
