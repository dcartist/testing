const starWars = 'https://swapi.dev/api/people'

let section1 = document.querySelector('.section1')
let section2 = document.querySelector('.section2')
let section3 = document.querySelector('.section3')
let section4 = document.querySelector('.section4')
let section5 = document.querySelector('.section5')
let section6 = document.querySelector('.section6')
let section7 = document.querySelector('.section7')
let section8 = document.querySelector('.section8')
let section9 = document.querySelector('.section9')
let section10 = document.querySelector('.section10')

section1.addEventListener('click', function(e){
	fetch(starWars)
		.then(res => {
			return res.json()
			
		})
		.then(res => {
			let i = 0
			res.results.forEach(function(character){
				i++ 
				let sectionName = document.querySelector(`.section${i}`)
				let paragraph1 = document.querySelector(".div1");
				paragraph1.textContent = character.name 
				let paragraph2 = document.querySelector(".div1");
				paragraph2.textContent = character.height;
				let paragraph3 = document.querySelector(".div1");
				paragraph3.textContent = character.mass
				let paragraph4 = document.querySelector('.div1');
				paragraph4.textContent = character.birth_year
				let paragraph5 = document.querySelector('.div1')
				paragraph5.textContent = "Films: Revenge of the Sith, A New Hope, The Empire Strikes Back, Return of the Jedi, The Force Awakens, The Last Jedi, and The Rise of Skywalker"
				let allParagraphs = document.createElement('p')
				allParagraphs = paragraph1 
				//console.log(allParagraphs)
				if (character.name === "Luke Skywalker") {
					paragraph1.appendChild(allParagraphs)
				} else {
					console.log(character)
				}
			})
		})
		// .catch(error => {
		// 	console.log("there has been a disturbance in the force")
		// })
})


section2.addEventListener('click', function(e){
	fetch(starWars)
		.then(res => {
			return res.json()
		})
		.then(res => {
			res.results.forEach(function(character) {
				let name = res.character[0].name
				let paragraph = document.querySelector('p')
				paragraph.textContent = character[0].name
				section2.appendChild(paragraph)
			})
		})

			//document.querySelector('div').appendChild(list)
		})
		// .catch(error => {
		// 	console.log("there has been a disturbance in the force")
		// })






section3.addEventListener('click', function(e){
	fetch(starWars)
		.then(res => {
			return res.json()
		})
		.then(res => {
			const list = document.createElement('ul')
			res.results.forEach(function(character){
				const listItem = document.createElement('li')
				listItem.textContent = character.name
				list.appendChild(listItem)
			})

			//document.querySelector('div').appendChild(list)
		})
		// .catch(error => {
		// 	console.log("there has been a disturbance in the force")
		// })
	
})




section4.addEventListener('click', function(e){
	fetch(starWars)
		.then(res => {
			return res.json()
		})
		.then(res => {
			const list = document.createElement('ul')
			res.results.forEach(function(character){
				const listItem = document.createElement('li')
				listItem.textContent = character.name
				list.appendChild(listItem)
			})

			//document.querySelector('div').appendChild(list)
		})
		// .catch(error => {
		// 	console.log("there has been a disturbance in the force")
		// })
	
})




section5.addEventListener('click', function(e){
	fetch(starWars)
		.then(res => {
			return res.json()
		})
		.then(res => {
			const list = document.createElement('ul')
			res.results.forEach(function(character){
				const listItem = document.createElement('li')
				listItem.textContent = character.name
				list.appendChild(listItem)
			})

			//document.querySelector('div').appendChild(list)
		})
		// .catch(error => {
		// 	console.log("there has been a disturbance in the force")
		// })
	
});