
async function fetchData() {
    const response = await fetch('./')
    // console.log(response);
    const datas = await response.json()
    console.log('data',datas);


}
