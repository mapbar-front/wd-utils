export default {
  IdCard (idcard) {
    const regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (!regIdCard.test(idcard)) {
      return false
    } else {
      return true
    }
  },
  Mobile (mobile) {
    let correct = true
    if (!(/^1[3456789]\d{9}$/.test(mobile))) {
      correct = false
    }
    return correct
  }
}
