class use_api
{
    url:string;
    
    size:number;

    async hitApi()
    {
        this.url = "https://localhost:44382/values/getrecord";
        let data =await this.getApiCall(this.url);
       
        this.size= data["Table"].length ;
        //this.value.innerHTML = data[0]["date"];
        console.log(data, "012d656ds4v654f65d4vdfvfv");



        console.log(data)
        
        
        this.dynamic_card(data);
        return data;

    }  
    
    async getApiCall(URL:any) {

        
        let response = await fetch(URL);
        let data = await (response.json());
        console.log(data["Table"].length);
        return data;
    }
    // console.log(data["Table"].length);

    dynamic_card(data)
    {
        let salutation = ["" ,"Mr." , "Mrs." , "Miss." , "Ms." , "Dr."];
        let gen = ["", "male" , "female" , "others"];

        const lene: number = this.size;
        let i:number;
        var containeer = document.getElementById("value");

        for(i=0; i<this.size; i++)
        {   
            containeer.innerHTML += `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header" id="header${i}"></div>
            
              <h5 class="card-title" id = "titile${i}"></h5>
              <h5 class="card-title" id = "geneder${i}"></h5>
              <p class="card-text" id = "info${i}"></p>
            </div>
          </div>`


           
        }
        for(i=0; i<this.size; i++)
        {   

           var valuess = document.getElementById("titile"+i);
            // valuess.innerText="dsjfgsdg";
            valuess.innerText = "Name = " + salutation[data["Table"][i]["salutationId"]] +" "+ data["Table"][i]["firstName"] +" "+(  data["Table"][i]["middleName"]===null? "" : data["Table"][i]["middleName"]) + " " + data["Table"][i]["lastName"];
             document.getElementById("geneder"+i).innerText ="Gender = "+ gen[data["Table"][i]["employeeGenderId"]];
             document.getElementById("info"+i).innerText ="Birth Date = "+ data["Table"][i]["birthDate"];

            }
        
        }
    }


let a = new use_api();
a.hitApi();



// <div class="card-body" id="body${i}">