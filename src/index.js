fetch('http://localhost:3000/ramens')
    .then((resp) => resp.json())
    .then((data) => renderImages(data))

function renderImages(ramenArr) {
    const div = document.querySelector('#ramen-menu')
    ramenArr.forEach((ramenObj) => {
        const ramenImg = document.createElement('img')
        ramenImg.src = ramenObj.image
        div.append(ramenImg)
        ramenImg.addEventListener('click', (e) => {
            const detailImg = document.querySelector('.detail-image')
            const detailName = document.querySelector('.name')
            const detailRest = document.querySelector('.restaurant')
            const detailRating = document.querySelector('#rating-display')
            const detailComment = document.querySelector('#comment-display')
            // const detailComment2 = document.querySelector('#comment-display2')
            detailImg.src = ramenObj.image
            detailName.textContent = ramenObj.name
            detailRest.textContent = ramenObj.restaurant
            detailRating.textContent = ramenObj.rating
            // detailComment.textContent = ramenObj.comment
            // const nameText0 = ramenObj.comment[0]
            // const commentName0 = nameText.name
            // const commentText0 = nameText.text
            // console.log(commentText0)
            detailComment.innerHTML = ''
            //We will not have to do this innerHTML for a while maybe.
            ramenObj.comment.forEach((commentObj) => {
                // console.log(commentObj.name)
                // detailComment.textContent = `"${commentObj.text}" -${commentObj.name}`
                const p = document.createElement('p')
                detailComment.appendChild(p)
                p.textContent = `"${commentObj.text}" -${commentObj.name}`
                
                // detailComment.append(commentP)
                // console.log(commentP.textcontent)
            })
        })
    })
}
const form = document.querySelector('#new-ramen')
form.addEventListener(('submit'), (e) => {
    e.preventDefault()
    const newRamen = {
        name : e.target.name.value,
        restaurant: e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : [{text: e.target.comment.value, name: 'Terminator'}],
    }
    renderImages([newRamen])
})


































    // function renderImages(datas) {
    // datas.forEach((data) => {
    //     // console.log(data)
    //     const commentsArray = data.comment
    //     commentsArray.forEach ((nameText) => {
    //         // console.log(nameText)
    //         const commentsText = nameText.text
    //         const commentsName = nameText.name
    //         // console.log(commentsText)
    //         const message = `${commentsName} loves ${data.restaurant}'s ${data.name}. They say "${commentsText.toLowerCase()}"`
    //         console.log(message)
    // })
    // })
    // }



// function renderData(datas) {
//     datas.forEach((data) => {
//         // console.log(data)
//     const commentsArray = data.comment
//     commentsArray.forEach ((nameText) => {
//         // console.log(fields.text)
//         // console.log(nameText)
//         const commentsText = nameText.text
//         const commentsName = nameText.name 
//         // console.log(commentsName)
//         console.log(commentsText)
//         const message = `${commentsName} loves ${data.restaurant}'s ${data.name}. They say "${commentsText.toLowerCase()}"`
//         console.log(message)
//     })
//     })
//     }



// function renderImages(ramens) {
//     const div = document.querySelector('#ramen-menu')
//     ramens.forEach((ramen) => {
//         const ramenImg = document.createElement('img')
//         ramenImg.src = ramen.image
//         div.append(ramenImg)
//         ramenImg.addEventListener('click', (e) => {
//             const detailImg = document.querySelector('.detail-image')
//             const detailName = document.querySelector('.name')
//             const detailRestaurant = document.querySelector('.restaurant')
//             const detailRating = document.querySelector('#rating-display')
//             const detailComment = document.querySelector('#comment-display')
//             detailImg.src = ramen.image
//             detailName.textContent = ramen.name
//             detailRestaurant.textContent = ramen.restaurant
//             detailRating.innerHTML = ramen.rating
//             detailComment.innerHTML = ramen.comment
//         })
//     })
// }
// const form = document.querySelector('#new-ramen')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const newRamen = {
//         name : e.target.name.value,
//         restaurant : e.target.restaurant.value,
//         image : e.target.image.value,
//         rating : e.target.rating.value,
//         comment : e.target.comment.value
//     }
//     renderImages([newRamen])
// })
































































// fetch('http://localhost:3000/ramens')
//     .then((resp) => resp.json())
//     .then((data) => renderImages(data))

// function renderImages(ramens) {
//     // console.log(ramens)
//     const div = document.querySelector('#ramen-menu')
//     // console.log(div)
//     ramens.forEach((ramen) => {
//         // console.log(ramen)
//         const ramenImg = document.createElement('img')
//         ramenImg.src = ramen.image
//         div.append(ramenImg)
//         ramenImg.addEventListener('click', (e) => {
//             const detailImg = document.querySelector('.detail-image')
//             const detailName = document.querySelector('.name')
//             const detailRest = document.querySelector('.restaurant')
//             const detailRating = document.querySelector('#rating-display')
//             const detailComment = document.querySelector('#comment-display')
//             detailImg.src = ramen.image
//             detailName.textContent = ramen.name
//             detailRest.textContent = ramen.restaurant
//             detailRating.innerHTML = ramen.rating
//             detailComment.innerHTML = ramen.comment
//             // console.log(detailImg)
//         })
//     })
// }
// const form = document.querySelector('#new-ramen')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const newRamen = {
//         name : e.target.name.value,
//         restaurant : e.target.restaurant.value,
//         image: e.target.image.value,
//         rating : e.target.rating.value,
//         comment : e.target.comment.value
//     }
//     renderImages([newRamen])
// })














































// // write your code here
// fetch('http://localhost:3000/ramens')
//     .then((resp) => resp.json())
//     .then((data) => renderImages(data))


// function renderImages(ramen) {
//     const div = document.querySelector('#ramen-menu')
//     // const detail = document.querySelector('#ramen-detail')
//     // console.log(detail)
//     // console.log(div)
//     ramen.forEach((ramenType) => {
//         const ramenImg = document.createElement('img')
//         // const name = ramenType.name
//         // console.log(name)
//         // const restaurant = ramenType.restaurant
//         // const 
//         // console.log(ramenImg)
//         // console.log(ramenType)
//         ramenImg.src = ramenType.image
//         ramenImg.addEventListener('click', (e) => {
//         // const divDetail = document.querySelector('#ramen-detail')
//             const detailImg = document.querySelector('.detail-image')
//             const detailName = document.querySelector('.name')
//             const detailRestaurant = document.querySelector('.restaurant')
//             const detailRating = document.querySelector('#rating-display')
//             const detailComment = document.querySelector('#comment-display')
//             // console.log(detailImg)
//             console.log(ramen)
//             // ramen.forEach((ramen) => {
//             detailImg.src = ramenType.image
//             detailName.textContent = ramenType.name
//             detailRestaurant.textContent = ramenType.restaurant
//             // console.log(detailRestaurant)
//             detailRating.innerHTML = ramenType.rating
//             detailComment.innerHTML = ramenType.comment
//             // })
        
            
//         })
        
//         div.append(ramenImg)
//         // detail.append
//     })
// }
// const form = document.querySelector('#new-ramen')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const newRamen = {
//         name : e.target.name.value,
//         restaurant : e.target.restaurant.value,
//         image : e.target.image.value,
//         rating : e.target.rating.value,
//         comment : e.target.comment.value
//         //changed html new-comment to comment
//     }
//     renderImages([newRamen])
//     }
// )