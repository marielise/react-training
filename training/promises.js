const fetch = require('node-fetch');

const posts = [
    {title:'title 1', desc:'desc 1'},
    {title:'title 2', desc:'desc 2'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post)=> {
            output += `<li>${post.title}</li>`;
        })
        console.log(output);
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const err = false;

            if (!err) {
                resolve();
            } else {
                reject('Err rejected');
            }
        }, 2000);
    });
}

createPost({title:'title 3', desc: 'desc 3'})
.then(getPosts)  //because we created a promise
.catch(err => console.log(err));   //we need to catch error if reject

//manage mutliple promises at the same time

const promise1 = Promise.resolve("Hello promise 1");
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 2000, "hello promise 3");
});

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

//take the longest promise to show the result

// Async / await

async function init() {
    await createPost({title:'title 5', desc: 'desc 5'});

    //wait until done to call
    getPosts();
}

init();

//Async/ await / fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); //return a promise

    const data = await res.json();

    console.log(data);
}

fetchUsers();