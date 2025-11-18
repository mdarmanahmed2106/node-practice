function fetchData(){
    return new Promise((resolve,reject)=>{
        let sucess=false
        setTimeout(()=> {
            if(sucess) resolve ("Data recieved")
                else reject("Error fetching data :(")
        },2000)
    })
}

async function getData() {
    try{
        const data=await fetchData()
        console.log(data)

    }
    catch(error){
        console.error(error)
    }
}

getData()