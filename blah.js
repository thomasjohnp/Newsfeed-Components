function myMenu(myArray){
    //make elements
    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
  
    //make the list elements
    myArray.forEach(item => {
      let menuListItem = document.createElement('li');
      menuListItem.textContent = item;
      menuList.appendChild(menuListItem);
    })
    //add class to menu
  
    menu.classList.add('menu');
  
    //append list to menu
    menu.appendChild(menuList)
  
    document.querySelector('.menu-button').addEventListener('click', function(){
      console.log('we got ehre');
      menu.classList.toggle('menu--open');
    })
    return menu;
  }
  
  document.querySelector('.header').append(myMenu(menuItems));