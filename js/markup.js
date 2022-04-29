function markup(setCode, cards) {
  const setPanel = document.getElementById(setCode)
  setPanel.innerHTML = ''

  for (const card of cards) {
    const frontMarkup = `
      <button class="accordion" data-card-id="${setCode}-${card['Number']}-front" onClick="cardAccordion(this)">Front</button>
      <div class="panel">
        <div class="img-zoom-container">
          <img id="${setCode}-${card['Number']}-front" class="panel__image" src="https://drive.google.com/uc?export=view&id=${card['Front ID']}" loading="lazy"/>
          <div id="${setCode}-${card['Number']}-front-zoom" class="img-zoom-result">
            <img class="panel__loading" src="imgs/loading.svg"/>
          </div>
        </div>
      </div>
    `

    let backMarkup = ''

    if (card['Back ID']) {
      backMarkup =  `
        <button class="accordion" data-card-id="${setCode}-${card['Number']}-back" onClick="cardAccordion(this)">Back</button>
        <div class="panel">
          <div class="img-zoom-container">
            <img id="${setCode}-${card['Number']}-back" class="panel__image" src="https://drive.google.com/uc?export=view&id=${card['Back ID']}" loading="lazy"/>
            <div id="${setCode}-${card['Number']}-back-zoom" class="img-zoom-result">
              <img class="panel__loading" src="imgs/loading.svg"/>
            </div>
          </div>
        </div>
      `
   } else {
     backMarkup = ''
   }

    const markup = `
    <button class="accordion" onClick="accordion(this)">${card['Number']} - ${card['Name']}</button>
    <div class="panel">
      ${frontMarkup}
      ${backMarkup}
    </div>
    `

    setPanel.innerHTML += markup
  }
}
