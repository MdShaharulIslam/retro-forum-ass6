
let count = 0;

const displaynews = (newses) => {
    const containtDetails = document.getElementById("containt-details")
    containtDetails.textContent= ''
    
    newses.forEach(news => {
        let isActive = `<img " src="image/Status1.svg" alt="#"> `
        if(news.isActive){
            isActive = `<img " src="image/Status.svg" alt="">`
        }
       
        const NewsCard = document.createElement('div')
             NewsCard.innerHTML = `
        <div class="flex 
    //   bg-[#F3F3F5] rounded-2xl p-2 lg:p-10 sm:gap-5 mb-5">
            <div class="w-[10%]">
                <div class="avatar  placeholder ">
                <div class="w-[20%] rounded-full absolute ">${isActive} <span class="indicator-item badge bg-green-500 rounded-full"></span>
                </div>
                    <div class="bg-neutral text-neutral-content rounded-full w-16 relative ">
                    <img src="${news.image}" alt="">
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="flex gap-6 justify-start">
                    <p class="text-sm text-slate-500"># ${news.category}</p>
                    <p class="text-sm text-slate-500">Author : ${news.author.name}</p>
                </div>
                <div class="">
                    <h3 id="newsHeading" class="mt-5 text-xl font-bold">${news.title}</h3>
                    <p class="mt-5 text-slate-500">${news.description}</p>
                </div>
                <hr class="w-full border-black border-dotted">
                <div class="flex justify-between mt-5">
                    <div class=" grid grid-cols-3 gap-8">
                    <div class="flex "> 
                    <i class="fa-regular fa-comment text-xl"> </i>
                    <p>${news.comment_count}</p>
                    </div>
                    <div class="flex ">
                    <i class="fa-regular fa-eye text-xl"></i>
                    <p>${news.view_count}</p>
                    </div>
                    <div class="flex ">
                    <i class="fa-regular fa-clock text-xl"></i>
                    <p>${news.posted_time} min </p>
                    </div>
                    </div>
                    <button id="email-button" class="p-2 btn-circle bg-[#10B981] text-white" onclick="handelEmalbox('${news.title}','${news.view_count}')"><i class="fa-regular fa-envelope text-xl"></i></button>
                </div>
            </div>
        </div>`
        containtDetails.appendChild(NewsCard)
    })
    setTimeout(() => {
        const stop = document.getElementById('loadind-spinner').style.display="none"
    }, 3000);
}
const loadVideos = async (inputValue) => {
    const rec = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputValue}`)
    const data = await rec.json()
    const news = data.posts
    displaynews(news)
}

const loadNewPost =async ()=>{
  const rec = await  fetch`https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  const newPosts = await rec.json()
displayNewPost(newPosts)
}
const displayNewPost =(newPosts)=>{
    const newPostContainer =document.getElementById('new-post-container')
    newPosts.forEach(newse=>{
    
    const newPostCard = document.createElement('div')
    newPostCard.classList='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
       newPostCard.innerHTML=`<div class="card w-96 gap-6 bg-base-100 shadow-xl">
       <figure class="px-10 pt-10">
           <img src="${newse.cover_image}" alt="Shoes"
               class="rounded-xl" />
       </figure>
       <div class="card-body items-start text-start">
           <div class="flex">
               <img src="image/calenderr.svg" alt="">
               <p>${newse.author.posted_date ||"No publish date"}</p>
           </div>
           <h2 class="card-title">${newse.title}</h2>
           <p>${newse.description} </p>
           <div class="flex items-center gap-2">
           <div class="avatar">
           <div class="w-20 rounded-full">
             <img src="${newse.profile_image}" />
           </div>
         </div>
               <div>
                   <h2 class="text-xl font-medium">${newse.author.name }</h2>
                   <p>${newse.author.designation  ||"Unknown"}</p>
               </div>
           </div>
       </div>
   </div>`
   newPostContainer.appendChild(newPostCard)
    })
}

const handelSearch =()=>{
    const start =document.getElementById('loadind-spinner').style.display="block"
    const inputTextValue = document.getElementById('input-text-value')
     const inputValue =inputTextValue.value
    console.log (inputValue)
    loadVideos(inputValue)
}
const loadingSpinner = ()=>{
}
loadNewPost()
loadVideos("")
// complete js funtion