function pierreFeuilleCiseaux()
{
	const name = document.getElementById("name");
	const submit = document.getElementById("submit");
	const hidden = document.getElementsByClassName("info");
	const play = document.getElementById("player_game");
	const select = document.getElementById("choose");

	submit.onclick = (e) =>
	{
		e.preventDefault();
		if(name.value != "")
		{
			for(i = 0; i < hidden.length; i++)
			{
				//hidden.style.background = "red;"
				//hidden[i].style.transition = 1000;
				hidden[i].style.display = "none";
			}
		}
		else
		{
			alert("Entre un nom");
		}

		function addElement(name, content, className)
		{
			const nameElement = document.createElement(name);
			const contentElement = document.createTextNode(content);
			const classForElement = document.getElementsByClassName(className);

			nameElement.appendChild(contentElement);

			for(i = 0; i < classForElement.length; i++)
			{
				classForElement[i].appendChild(nameElement);
			}
		}
		addElement("H1", `Bienvenue ${name.value}`, 'welcome');
	}

	play.onclick = (e) =>
	{
		const strOption = select.options[select.selectedIndex].text;
		e.preventDefault();
		const random = Math.floor(Math.random()* Math.floor(3));
		let robot = "";

		switch (random)
		{
			case 0:
				robot = "Pierre";
				break;
			case 1:
				robot = "Feuille";
				break;
			case 2:
				robot = "Ciseaux";
				break;
		}
		if(robot === strOption)
		{
			alert('Egalité');
		}
		else if(strOption === "Pierre" && robot === "Ciseaux")
		{
			alert(`Gagné, j'ai joué ${robot}`);
		}
		else if(strOption === "Feuille" && robot === "Pierre")
		{
			alert(`Gagné, j'ai joué ${robot}`);
		}
		else if(strOption === "Ciseaux" && robot === "Feuille")
		{
			alert(`Gagnée, j'ai joué ${robot}`);
		}
		else
		{
			alert(`Perdu, j'ai joué ${robot}`);
		}
		console.log(robot + "robot");
		console.log(strOption + "moi");
	}
}

pierreFeuilleCiseaux();