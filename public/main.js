let n=1
getPage.onclick = ()=>{
    const request =new XMLHttpRequest()
    request.open('get',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState === 4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(item =>{
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1
        }
    }
    request.send();
}

getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState === 4 && request.status===200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/3.html')
    console.log(1)
    request.onreadystatechange = ()=>{
        console.log(2)
        if(request.readyState === 4 && request.status===200){
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }else{ }
    }
    request.send() 
}
getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get','/2.js')
    request.onload = ()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{}
    request.send()
}
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET",`/style.css`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if( request.status>=200 && request.status<300){
                const style = document.createElement("style")
                style.innerHTML = request.response;
                document.head.appendChild(style)
            }else{
                alert("加载CSS失败")
            }
        }
    }
    request.send()
}