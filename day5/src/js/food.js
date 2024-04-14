
// DOM
const postsContainer = document.querySelector('.posts-container');

const renderPostList = (postList) => { 
    if (postList) {

        let htmls = postList.map(postItem => {
            return `
        
        
        <div class='post-item m-[12px] w-full rounded-lg flex px-2 py-1'>
          <div class="w-2/3">
            <h3 class="post-name">${postItem.name}</h3>
            <p class="post-desc">${postItem.description}</p>
          </div>
          <img class='class="w-1/3"' src='${postItem.image_path}'>
        </div>
      `
        })

        console.log(htmls);
        postsContainer.innerHTML = htmls.join('')
    }
}

const handleGetPostList = () => {
    fetch('https://65ed290d0ddee626c9b13190.mockapi.io/api/v1/fashion')
        .then(data => {
            return data.json()
        })
        .then(posts => {
            console.log(posts);

            // render posts
            renderPostList(posts)

        })
        .catch(error => {
            console.warn(error)
        })
}

handleGetPostList()