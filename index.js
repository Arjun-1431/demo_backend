import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(cors({
    origin: process.env.Vite_Frontend_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
}
);

app.get("/api/jokes",(req,res)=>{

    const jokes = [
        { 
            id: 1, 
            joke: "Why don't scientists trust atoms? Because they make up everything!",
            answer: "Because they make up everything!" 
        },

        { 
            id: 2, 
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
            answer: "Because he was outstanding in his field!" 
        },

        { 
            id: 3, 
            joke: "Why don't skeletons fight each other? They don't have the guts!" ,
            answer: "They don't have the guts!"
        },

        { 
            id: 4, 
            joke: "What do you call fake spaghetti? An impasta!" ,
            answer: "An impasta!"
        },

        { 
            id: 5, 
            joke: "Why did the bicycle fall over? Because it was two-tired!",
            answer: "Because it was two-tired!"
        }
    ];
    res.json(jokes);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
