/*
* timestamp：传入的时间戳
* format: 想要得到的时间格式
*/

export default function formatDate (stamp, format) {
  if (!stamp) {
    return ''
  }
  try {
    let currentDate = stamp
    if (currentDate.length === 10) {
      currentDate = currentDate + '' + '000'
    }
    currentDate = new Date(currentDate)
    let dates = []
    dates.push(currentDate.getMonth() + 1)
    dates.push(currentDate.getDate())
    dates.push(currentDate.getHours())
    dates.push(currentDate.getMinutes())
    dates.push(currentDate.getSeconds())
    // 补零操作
    dates = dates.map(item => {
      if ((`${item}`).length === 1) {
        item = `0${item}`
      }
      return item
    })
    // 命中格式
    switch (format) {
      case 'YY-MM-DD HH:MM:SS':
        currentDate = `${currentDate.getFullYear()}-${dates[0]}-${dates[1]} ${dates[2]}:${dates[3]}:${dates[4]}`
        break
      case 'YY-MM-DD HH:MM':
        currentDate = `${currentDate.getFullYear()}-${dates[0]}-${dates[1]} ${dates[2]}:${dates[3]}`
        break
      case 'YY-MM-DD':
        currentDate = `${currentDate.getFullYear()}-${dates[0]}-${dates[1]}`
        break
      case 'YY-MM':
        currentDate = `${currentDate.getFullYear()}-${dates[0]}`
        break
      case 'YY/MM/DD HH:MM:SS':
        currentDate = `${currentDate.getFullYear()}/${dates[0]}/${dates[1]} ${dates[2]}:${dates[3]}:${dates[4]}`
        break
      case 'YY/MM/DD HH:MM':
        currentDate = `${currentDate.getFullYear()}/${dates[0]}/${dates[1]} ${dates[2]}:${dates[3]}`
        break
      case 'YY/MM/DD':
        currentDate = `${currentDate.getFullYear()}/${dates[0]}/${dates[1]}`
        break
      case 'YY/MM':
        currentDate = `${currentDate.getFullYear()}/${dates[0]}`
        break
      default:
        currentDate = `${currentDate.getFullYear()}-${dates[0]}-${dates[1]} ${dates[2]}:${dates[3]}:${dates[4]}`
        break
    }
    return currentDate
  } catch (e) {
    console.error(e)
  }
}
