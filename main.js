let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];


  const allPackage = document.querySelector('.allPackage');

  let searchItemTotal = 0;

  // 輸出資料筆數邏輯
const areaItemTotal = document.querySelector('#areaItemTotal');
function countTotal(){
areaItemTotal.textContent = `本次搜尋共 ${searchItemTotal} 筆資料`;
searchItemTotal = 0;
} 

// 初始化邏輯
  function init(){
    let newInnerHTML = data.map(function(item){
      searchItemTotal ++;
      return `<div class="packageCard">
                    <p class="area-tag">${item.area}</p>
                    <p class="score">${item.rate}</p>
                    <div class="packageCard-header">
                    <a href="#"><img src=${item.imgUrl} alt=${item.name}></a>
                    </div>
                    <div class="packageCard-content">
                        <div class="packageCard-body">
                            <a href="#" class="packageCard-title"><h2>${item.name}</h2></a>
                            <p>${item.description}</p>
                            
                        </div>
                        <div class="package-footer">
                            <p class="lastNumber"><i class="bi bi-exclamation-circle-fill"></i>剩下最後 ${item.group} 組</p>
                            <div class="price">
                                <p>TWD</p>
                                <h3>$${item.price}</h3>
                            </div>
                        </div>
                    </div>
                </div>`
    }).join('');
    
    allPackage.innerHTML = newInnerHTML;
    countTotal();
  }
  
  init();

  // 地區搜尋邏輯
  const areaName = document.querySelector('#areaName');
  areaName.addEventListener('change',function(e){

    if (e.target.value === ""){
      init();
    }else{
      let newInnerHTML = data.map(function(item){

        if(e.target.value === item.area){
          searchItemTotal ++;
          return `<div class="packageCard">
                    <p class="area-tag">${item.area}</p>
                    <p class="score">${item.rate}</p>
                    <div class="packageCard-header">
                        <a href="#"><img src=${item.imgUrl} alt=${item.name}></a>
                    </div>
                    <div class="packageCard-content">
                        <div class="packageCard-body">
                            <a href="#" class="packageCard-title"><h2>${item.name}</h2></a>
                            <p>${item.description}</p>
                            
                        </div>
                        <div class="package-footer">
                            <p class="lastNumber"><i class="bi bi-exclamation-circle-fill"></i>剩下最後 ${item.group} 組</p>
                            <div class="price">
                                <p>TWD</p>
                                <h3>$${item.price}</h3>
                            </div>
                        </div>
                    </div>
                </div>`
        }

      }).join('');

      allPackage.innerHTML = newInnerHTML;
      countTotal();
    }
    
  })

  // 新增資料邏輯
  const addName = document.querySelector('#name');
  const addImgUrl = document.querySelector('#imgUrl');
  const addArea = document.querySelector('#area');
  const addPrice = document.querySelector('#price');
  const addGroup = document.querySelector('#group');
  const addRate = document.querySelector('#rate');
  const addDescription = document.querySelector('#description');
  const submit = document.querySelector('.submit');

submit.addEventListener('click',function(e){
  e.preventDefault();

  let addNewCard = {
    "id": data.length ,
      "name": addName.value,
      "imgUrl": addImgUrl.value,
      "area": addArea.value,
      "description": addDescription.value,
      "group":addGroup.value,
      "price": addPrice.value,
      "rate": addRate.value
  }

  data.push(addNewCard);
  init();
  addName.value = '';
  addImgUrl.value = '';
  addArea.value = '';
  addDescription.value = '';
  addGroup.value = '';
  addPrice.value = '';
  addRate.value = '';
})


