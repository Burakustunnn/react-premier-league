const data = [
    {
        id:1,
        img: "https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png",
        imgstadium:"https://cdnuploads.aa.com.tr/uploads/Contents/2013/04/23/thumbs_b_c_caab2be38fb542ffa9eec27082d50989.jpg",
        title: "Manchester United FC",
        stadyum:"Old Trafford",
        capacity: "74.310",        
    },
    {
        id:2,
        img: "https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png",
        imgstadium:"https://iaaspr.tmgrup.com.tr/f6fdc9/0/0/0/0/800/535?u=https://iaspr.tmgrup.com.tr/2022/06/18/transfer-haberleri-arsenal-eddie-nketiahin-sozlesmesini-uzatti-1655558129392.jpeg",
        title: "Manchester United FC",
        stadyum:"Emirates Stadium",
        capacity:"60.361",        
    },
    {
        id:3,
        img: "https://upload.wikimedia.org/wikipedia/tr/f/f6/Manchester_City.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1482380a5fb018ab/60da7bedddcd520eeb86d153/d01b7049cfef5c005aec3f0cd489280ec8a27615.jpg",
       
        title: "Manchester City FC",
        stadyum:"Etihad Stadium",
        capacity:"55.097",        
    },
    {
        id:4,
        img: "https://upload.wikimedia.org/wikipedia/tr/3/3f/150px-Liverpool_FC_logo.png",
        imgstadium:"https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/05/thumb_104422_default_news_size_5.jpeg",
        title: "Liverpool FC",
        stadyum:"Anfield",
        capacity:"53.394",        
    },
    {
        id:5,
        img: "https://upload.wikimedia.org/wikipedia/tr/thumb/2/27/Chelsea_FC_arma.svg/200px-Chelsea_FC_arma.svg.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Chelsea FC",
        stadyum:"Stamford Bridge",
        capacity:"40.834",        
    },
   
    {
        id:6,
        img: "https://upload.wikimedia.org/wikipedia/tr/7/79/Everton_Logo.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Everton Football Club",
        stadyum:"Goodison Park",
        capacity:"39,572",        
    },
   
    {
        id:7,
        img: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Newcastle United FC",
        stadyum:"St James' Park",
        capacity:"52.387",        
    },
   
    {
        id:8,
        img: "https://upload.wikimedia.org/wikipedia/tr/6/6d/Tottenham_Hotspur.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Tottenham Hotspur FC",
        stadyum:"Tottenham Hotspur Stadium",
        capacity:"62.062",        
    },
   
    {
        id:9,
        img: "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0c/Crystal_Palace_FC_logo.svg/800px-Crystal_Palace_FC_logo.svg.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Crystal Palace FC",
        stadyum:"Selhurst Park Stadium",
        capacity:"26.309",        
    },
   
    {
        id:10,
        img: "https://upload.wikimedia.org/wikipedia/tr/6/6c/Wolverhampton_Wanderers.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Wolverhampton Wanderers FC",
        stadyum:"Molineux Stadyumu, Wolverhampton",
        capacity:"32.050",        
    },
   
    {
        id:11,
        img: "https://upload.wikimedia.org/wikipedia/tr/thumb/4/40/Fulham.svg/800px-Fulham.svg.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Fulham FC",
        stadyum:"Craven Cottage",
        capacity:"25,700",        
    },
    {
        id:12,
        img: "https://upload.wikimedia.org/wikipedia/tr/e/e3/Brighton%26Hove.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Brighton & Hove Albion FC ",
        stadyum:"Falmer Stadium",
        capacity:"27.350",        
    },
    
    {
        id:13,
        img: "https://play-lh.googleusercontent.com/a355HpLlgaV_kn1Oz4fukMoGc5cB_hNKyqo4fySL3Pd0rrZwZOw7jUaPaUTqaRRI8Ek",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "Nottingham Forest FC ",
        stadyum:"The City Ground",
        capacity:"30.576",        
    },
    
    {
        id:14,
        img: "https://upload.wikimedia.org/wikipedia/tr/f/fc/Westham_logo.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        title: "West Ham United FC ",
        stadyum:"Londra Stadium",
        capacity:"60,000",        
    },
    
    {
        id:15,
        img: "https://upload.wikimedia.org/wikipedia/tr/7/78/Leeds_United_logo.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
      
        title: "Leeds United AFC",
        stadyum:"Elland Road",
        capacity:"37,890",        
    },
    
    {
        id:16,
        img: "https://upload.wikimedia.org/wikipedia/tr/a/a2/Leicester_City_logo.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        
        title: "Leicester City FC",
        stadyum:"King Power Stadium",
        capacity:"32.312",        
    },
    {
        id:17,
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/1200px-Aston_Villa_FC_crest_%282016%29.svg.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
       
        title: "Aston Villa FC",
        stadyum:"Villa Park",
        capacity:"42.788",        
    },
    {
        id:18,
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/1200px-Brentford_FC_crest.svg.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
       
        title: "Brentford FC ",
        stadyum:"Gtech Community Stadium",
        capacity:"12.300",        
    },
    {
        id:19,
        img: "https://upload.wikimedia.org/wikipedia/tr/1/16/Southampton_logo_2010.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
      
        title: "Southampton FC ",
        stadyum:"St Mary Stadium",
        capacity:"32.689",        
    },   
    
    
    {
        id:20,
        img: "https://upload.wikimedia.org/wikipedia/tr/9/98/AFC_Bournemouth.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
       
        title: "AFC Bournemouth ",
        stadyum:"Vitality Stadium",
        capacity:"12.000",        
    },
    
    {
        id:21,
        img: "https://upload.wikimedia.org/wikipedia/tr/1/14/Norwich_City_logo.png",
        imgstadium:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt75c3aa929e399a33/60debfec74d0832f0297fa3a/5062a9249570ad02aef7c85e077049ac4fc28ca0.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
        
        title: "Norwich City FC",
        stadyum:"Carrow Road",
        capacity:"27.244",        
    },      
]

export default data;