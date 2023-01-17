 
import axios from 'axios';
var data;


export  default async function handler(req, res) {
     
    await axios.get('https://gelatinous-liberating-camp.glitch.me/posts')
    .then(response => {
      data = response.data
      console.log(data)
    })
    await res.status(200).json({ total: data.length}) 
  } 
