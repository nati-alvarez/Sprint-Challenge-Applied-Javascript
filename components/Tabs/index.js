// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics").then(res=>{
    const topics = res.data.topics;
    const topicsContainer = document.querySelector(".topics");
    topics.forEach(topic=>{
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.textContent = topic;
        tab.dataset.category = topic;
        tab.addEventListener("click", updateCategory);
        topicsContainer.appendChild(tab);
    })
}).catch(err=>{
    console.log(err);
});

function updateCategory(e){
    let category = e.target.dataset.category;
    //fixes inconsistency in naming of topics and article category
    if (category === "node.js") category = "node";

    axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res=>{
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.textContent = "";
        const articles = res.data.articles;
        for(key in articles){
            if(key !== category) continue;
            else {
                articles[key].forEach(article=>{
                    const card = createCard(article);
                    cardsContainer.appendChild(card);
                });
            }
        }
    }).catch(err=>{
        console.log(err);
    });
}

