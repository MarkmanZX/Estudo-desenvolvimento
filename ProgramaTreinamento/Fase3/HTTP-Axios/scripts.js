// 1 - get fetch
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then ((data)=>{
        console.log(data);
    })
    .catch((error) =>{
        console.log(error);
    })

// 2 - get com axios
axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
    console.log(response.data);
})
.catch((error) =>{
    console.log(error);
});

// 3 - POST com Fetch
const data ={
    title: 'Algum título',
    content: 'Algum conteúdo...',
    userId: 1
}

fetch("https://jsonplaceholdertypicode.com/posts", {
    method: "POST",
    headers:{ 
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
})
.then((response) => response.json())
    .then ((data)=>{
        console.log(data);
    })
    .catch((error) =>{
        console.log(error);
    });


// 4 - POST com axios
axios.post("https://jsonplaceholder.typicode.com/posts", data);