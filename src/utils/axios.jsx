import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDViOWQ3NmNmZTcwMjNkYjVkNzFiMWZiZTNjOTMxNSIsIm5iZiI6MTcxOTIxNjM2MS4xMDM3MzMsInN1YiI6IjY2Nzg5NzQ1MzdjZGFmMTQ4MDNiMjliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIiqPy-XpRQJ5MShjXIyxUMlbh1PweSc6Y6yBCYPnUQ'
    },
});

export default instance;
