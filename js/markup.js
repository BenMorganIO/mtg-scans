function markup(setCode, cards) {
  const setPanel = document.getElementById(setCode)
  setPanel.innerHTML = ''

  for (const card of cards) {
    const frontMarkup = `
      <button class="accordion" data-card-id="${setCode}-${card['Number']}-front" onClick="cardAccordion(this)">Front</button>
      <div class="panel">
        <div class="img-zoom-container">
          <img id="${setCode}-${card['Number']}-front" src="https://drive.google.com/uc?export=view&id=${card['Front ID']}" loading="lazy"/>
          <div id="${setCode}-${card['Number']}-front-zoom" class="img-zoom-result"></div>
        </div>
      </div>
    `

    let backMarkup = ''

    if (card['Back ID']) {
      backMarkup =  `
        <button class="accordion" data-card-id="${setCode}-${card['Number']}-back" onClick="cardAccordion(this)">Back</button>
        <div class="panel">
          <div class="img-zoom-container">
            <img id="${setCode}-${card['Number']}-back" src="https://drive.google.com/uc?export=view&id=${card['Back ID']}" loading="lazy"/>
            <div id="${setCode}-${card['Number']}-back-zoom" class="img-zoom-result"></div>
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
