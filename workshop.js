const selected = document.getElementById("selected")
const all = document.getElementById("all")

const state = {
    data: [],
    selectedData: null
}

async function fetchData () {
    const allData = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const json = await allData.json()
    state.data = json
    console.log(json)
    renderData()

}

function renderData(){
    const dataList = state.data.map((name) => {
        return `<li> ${name.id} </li>`
    })
    all.innerHTML = dataList.join('')

    console.log(dataList)
}

fetchData()
renderData()