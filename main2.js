const starWarsApiUrl = 'https://swapi.dev/api/people'
let unorderedList = document.querySelector('#accordion')


fetch(starWarsApiUrl)
	.then(res => res.json())
	.then(data => {
		data.results.forEach(character => {
			let listItem = document.createElement('li')
			listItem.textContent = character.name
			let container = document.createElement('div')
			container.classList.add('hidden')
			container.classList.add('loop')
			let height = document.createElement('p')
			height.textContent = 'height: ' + character.height
			let mass = document.createElement('p')
			mass.textContent = 'mass: ' + character.mass
			let gender = document.createElement('p')
			gender.textContent = 'gender: ' + character.gender
			let birth = document.createElement('p')
			birth.textContent = 'year of birth: ' + character.birth_year
			listItem.appendChild(container)
			container.appendChild(birth)
			container.appendChild(height)
			container.appendChild(mass)
			container.appendChild(gender)
			unorderedList.appendChild(listItem)
			


			
			
					listItem.addEventListener('click', () => {
						let store = document.querySelectorAll('.loop')
						store.forEach(element => {
							element.classList.add('hidden')
						})
						container.classList.toggle('hidden')
					})
			
		})
		
	
	})
