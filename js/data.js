async function getSheet(sheet) {
  const dataURL = "https://opensheet.elk.sh/11UdgytH5JUbAHfZ7BN5ziJ669EncmDRyZ0cBH4a2OVA";

  return fetch(`${dataURL}/${sheet}`)
    .then(response => response.json())
    .then(responseJson => responseJson);
}

async function loadSets() {
  const sets = await getSheet('Sets')

  const app = document.getElementById('app')

  for (const set of sets) {
    const accordion = `
      <button class="accordion" data-set-code="${set['Code']}" onClick="setAccordion(this)">${set['Code']} - ${set['Name']}</button>
      <div id="${set['Code']}" class="panel"></div>
    `

    app.innerHTML += accordion
  }

  setAccordion()
}

async function loadCards(setCode) {
  const cards = await getSheet(setCode)
  markup(setCode, cards)
}

loadSets()
