

mass = {
	"Азъ": "az",
	"Переменная": "az-peremennaya",
	"Объект": "az-object",
	"Соглашение": "buki",
	"Букмарки": "buki-bukmarki",
	"Настройки": "buki-set",
	"VIM": "vedi-vim",
	"Доки": "vedi-documents",
}



// Возвращает HTML строку 
function toNavi() {

	htmlString = "";

	for (const key in mass) {
		if (Object.hasOwnProperty.call(mass, key)) {
			const element = mass[key];
			htmlString += `<div class="navi-item"><a href="${element}">${key}</a> </div>`
		}
	}


	htmlString += `<div class="navi-item"><a href="navi"> 🎈</a></div>`
	return htmlString;

}

// Встраивает элемент в документ HTML-страницу
function navi() {
	document.title = "YSTM";
	document.getElementById('navi').innerHTML = toNavi();
}


navi();