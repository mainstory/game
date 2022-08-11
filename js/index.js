const btn = document.querySelector('[data-btn]')




btn.addEventListener('click', (event) => {

   const checkDefProcent = document.querySelector('[data-btn-def-procent]')
   const checkVal = checkDefProcent.getAttribute('data-btn-def-procent')
   const numCheckVal = Number(checkVal)
   console.log(numCheckVal);



   if (numCheckVal < 1) {
      const att = btn.getAttribute('data-btn')
      const val = Number(att)

      const res = val + 2

      const maxValue = 100 //@

      const defaultProcent = res / maxValue


      btn.setAttribute('data-btn', res)
      btn.setAttribute('data-btn-def-procent', defaultProcent)

      const proc = res / maxValue * 100
      const procent = `${proc}%`

      const progress = document.querySelector('[data-progres]')
      progress.style.maxWidth = procent
      progress.innerHTML = `${res}/${maxValue}`

   } else {
      
   }


})
















