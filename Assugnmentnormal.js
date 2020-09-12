
app = require('express')
app=app()
body = require('body-parser')
app.use(body.json())
var books=[ 
    {
        id:1,
        name:'The Dairy of a Young Girl',
        author:'Anne Frank'
    },
    {
        id:2,
        name:'Harry Potter',
        author:'JK Rowlin'

    },
    {
        id:3,
        name:'Divergence',
        author:'Herry'

    },
    {
        id:4,
        name:'Insurgent',
        author:'Herry'

    },
    {
        id:5,
        name:'Fantastic Beast',
        author:'JK Rowlin'

    }
    
        ]  
app.get('/books',(req,res)=>{

    res.send(books)
})

app.get('/booksbyid',(req,res)=>{
    id=req.query.id
    
    m=books.filter((mo)=>{return mo.id==id})[0]
    res.send(m)

    
})

app.get('/author',(req,res)=>{
    author=req.query.author
    
    m=books.filter((mo)=>{return mo.author==author})
    res.send(m)
    
})

app.post('/add',(req,res)=>{
    var m=req.body
    books.push(m)
    res.send(books)
})


app.get('/length',(req,res)=>{
    var mm= books.length
    res.send(''+mm)

})



app.listen(3000,()=>{
    console.log('runing')
})

