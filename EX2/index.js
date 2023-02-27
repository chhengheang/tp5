let input= document.getElementById("get-input");
let result=document.getElementById("result");


function getresult(){
    let url=`https://api.genderize.io/?name=${input.value}`;
    result.innerHTML=`
        <div class="delay">Loading.....</div>
        `;
    fetch(url).then(async(resp)=> {     
        let data= await resp.json();
        console.log(data);

        result.innerHTML=`
        <div class="loading">
            <div>${data.name}</div>
            <div>${data.gender}</div>
            <div>${data.probability*100}%</div>
        </div>
        `;
    });
}
 
