var images=[];

const loadApi =()=>{
	fetch('https://api.publicapis.org/entries')
	.then(res=>res.json())
	.then(data=>loaddata(data.entries));


	const loaddata=(loaddata)=>{
       for(const data of loaddata ){
           images.push({
			Api:data.API,
			category:data.Category,
			Link:data.Link,
			desc:data.Description
		})
	   }
	}
}

loadApi()


var slider_img = document.querySelector('.slider-img');

var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return slider_img.innerHTML=`<h1>${images[i].Api}</h1>
	                              <h3>${images[i].category}</h3>
								  <h4>${images[i].desc}</h4>
						<button class="btn" ><a href='${images[i].Link}' target="_blank">Go To Docs <i class="bi bi-box-arrow-up-right"></i></a> </button>`;			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return slider_img.innerHTML=`<h1>${images[i].Api}</h1>
	<h3>${images[i].category}</h3>
	<h4>${images[i].desc}</h4>
<button class="btn" ><a href='${images[i].Link}' target="_blank">Go To Docs <i class="bi bi-box-arrow-up-right"></i></a> </button>`;			 
}

function setImg(){
	return slider_img.innerHTML;
	
}