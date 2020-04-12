window.onload = () => {
  let tag = document.getElementsByTagName('moon:button')[0]

  let button = document.createElement('div')

  button.innerHTML = '今日の月は'

  button.style.display = 'inline-block'
  button.style.height = '20px'
  button.style.width  = '90px'
  button.style.backgroundColor = '#DDDDDD'
  button.style.borderRadius = '3px'
  button.style.fontSize = '12px'
  button.style.textAlign = 'center'
  button.style.verticalAlign = 'middle'
  button.style.cursor = 'pointer'

  tag.parentNode.insertBefore(button, tag)
  button.parentNode.removeChild(tag)


  button.addEventListener('click', (e) => {
    

    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate()

    let calculateMoonAge = (year, month, date) => {
      let moonAge = ((((year - 2009) % 19) * 11 + month + date) + 1)
      if (month < 3) moonAge += 2
      return moonAge % 30
    }

    let moonAge = calculateMoonAge(year, month, date)
    let innerText

    switch(moonAge) {
      case 0:
        innerText = '朔&#x1f311;'
        break
      case 1:
        innerText = '二日月&#x1f312;'
        break
      case 2:
        innerText = '三日月&#x1f312;'
        break
      case 3:
      case 4:
      case 5:
        innerText = `月齢：${moonAge}&#x1f312;`
        break
      case 6:
        innerText = '上弦の月&#x1f313;'
        break
      case 7:
      case 8:
        innerText = `月齢：${moonAge}&#x1f314;`
        break
      case 9:
        innerText = '十日夜&#x1f314;'
        break
      case 10:
      case 11:
        innerText = `月齢：${moonAge}&#x1f314;`
        break
      case 12:
        innerText = '十三夜&#x1f314;'
        break
      case 13:
        innerText = '小望月&#x1f314;'
        break
      case 14:
        innerText = '望月&#x1f315;'
        break
      case 15:
        innerText = '十六夜月&#x1f316;'
        break
      case 16:
        innerText = '立待月&#x1f316;'
        break
      case 17:
        innerText = '居待月&#x1f316;'
        break
      case 18:
        innerText = '寝待月&#x1f316;'
        break
      case 19:
        innerText = '更待月&#x1f316;'
        break
      case 20:
      case 21:
        innerText = `月齢：${moonAge}&#x1f316;`
        break
      case 22:
        innerText = '下弦の月&#x1f317;'
        break
      case 23:
      case 24:
        innerText = `月齢：${moonAge}&#x1f318;`
        break
      case 25:
        innerText = '有明月&#x1f318;'
        break
      case 26:
      case 27:
      case 28:
        innerText = `月齢：${moonAge}&#x1f318;`
        break
      case 29:
        innerText = '三十日月&#x1f311;'
        break
      default:
        innerText = `月齢：${moonAge}`
    }

    e.target.innerHTML = innerText
  })

}
