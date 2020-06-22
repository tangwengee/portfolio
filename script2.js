let sorry = document.getElementById("sorry");

sorry.addEventListener('click', async function() {
	axios.get("data.txt").then(function (response) {
		let results = document.getElementById("results");
		results.innerHTML = response.data;
	})
})