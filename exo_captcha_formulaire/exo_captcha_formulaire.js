	
			function captchaCF2M(callback, captchaLen) {
				function randomInt(min, max) {
					return Math.floor(Math.random() * (max - min + 1) + min)
				}
				
				
				function getElementsFromArray(array, numberOfElements) {
					let arrayOfElements = [];
					for (let i = 0; i < numberOfElements; i++) {
						let randomElement = array[randomInt(0, array.length - 1)];
						arrayOfElements.push(randomElement);
					}
					return arrayOfElements
				}
				
				
				function generateCaptcha() {
					captcha.innerHTML = "";

					let captchaArray = getElementsFromArray(allCharacters, captchaLen);
					for (let i = 0; i < captchaArray.length; i++) {
						let colors = randomRGB(); //
						let size = randomSize();
						captcha.insertAdjacentHTML('beforeend', `<span style="color: rgb(${colors[0]}, ${colors[1]}, ${colors[2]}); font-size: ${size}em">${captchaArray[i]}</span>`);
					}
				}

				
				function validateCaptcha() {
					if (captcha.textContent === captchaInput.value) {
						callback();
					} else {
						generateCaptcha(captchaLen);
					}
				}

				function randomRGB() {
					let arrayRGB = [];

					for (let i = 0; i < 3; i++) {
						arrayRGB.push(randomInt(21, 255));
					}
		
					return arrayRGB
				}

				function randomSize() {
					return randomInt(10, 18) / 10
				}
			
				const allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
				const captcha = document.querySelector('#captcha');
				const captchaInput = document.querySelector('#captchaInput');
				const captchaValidate = document.querySelector('#captchaValidate');
				const captchaRefresh = document.querySelector('#captchaRefresh');

				generateCaptcha(captchaLen);
				captchaValidate.addEventListener('click', validateCaptcha);
				captchaRefresh.addEventListener('click', generateCaptcha);
			}

			function redirectionDuckduck() {
				document.location = "https://disney.fandom.com/fr/wiki/Sous_l%27oc%C3%A9an"; 
			}

			captchaCF2M(redirectionDuckduck, 6)
		