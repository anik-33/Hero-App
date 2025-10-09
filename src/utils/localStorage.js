import swal from 'sweetalert';
// get
export const loadToInstall = () => {
  try {
    const data = localStorage.getItem('listinstal')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const appInstall = product => {
  const listinstal = loadToInstall()


  try {
    const isDuplicate = listinstal.some(p => p.id === product.id)
    if (isDuplicate) return swal("Opps!", "You already installed the app!", "error");
    const updatedlistinstal = [...listinstal, product]
    localStorage.setItem('listinstal', JSON.stringify(updatedlistinstal))
  } catch (err) {
    console.log(err)
  }
  swal("Installed", "You install the app!", "success");
}

// delete
export const removeFromlistinstal = id => {
  const listinstal = loadToInstall()
  try {
    const updatedlistinstal = listinstal.filter(p => p.id !== id)
    localStorage.setItem('listinstal', JSON.stringify(updatedlistinstal))
  } catch (err) {
    console.log(err)
  }
}
