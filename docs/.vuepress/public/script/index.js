window.onload=function(){



    // 延迟加载
    showImg();
    window.onscroll = function() {
        showImg();
    }

    let menuList = document.querySelectorAll('a');
    menuList.forEach(function(list,index){
        menuList[index].onclick=function(){
            // 点击链接后执行延迟加载
            setTimeout(function(){
                showImg();
            }, 300);
        }
    })

    
 
    // 创建一个权限按钮
    let home = document.querySelector('#app');
    let btn = document.createElement("p");
    btn.className="mode";
    btn.innerHTML='访问<br/>权限'
    home.append(btn);

    //获取当前日期
    let date = new Date();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let m = month.length==1?'0'+month:month;
    let d = day.length==1?'0'+day:day;
    let currentDate = m+d;
    console.log('currentDate',currentDate);


    let item = document.querySelectorAll('.navbar .nav-item');
    let sideItem = document.querySelectorAll('.sidebar .nav-links .nav-item');
    let work = item[2];
    let life = item[3];
    let mwork = sideItem[2];
    let mlife = sideItem[3];
    let mode = localStorage.getItem('mode');
    if(mode){
        if(mode=='kolento'){
            work.className='nav-item';
            life.className='nav-item';
            mwork.className='nav-item';
            mlife.className='nav-item';
            
        }else if(mode=='work'){
            work.className='nav-item';
            life.className='nav-item hide';
            mwork.className='nav-item';
            mlife.className='nav-item hide';
            
        }else{
            work.className='nav-item hide';
            life.className='nav-item hide';
            mwork.className='nav-item hide';
            mlife.className='nav-item hide';
        }
    }else{
        work.className='nav-item hide';
        life.className='nav-item hide';
        mwork.className='nav-item hide';
        mlife.className='nav-item hide';
    }

    btn.onclick=function(){
        let psd = prompt("请输入权限口令 不同命令的菜单权限不同，默认为游客权限");
        if(psd){
            if(psd=='kolento'+currentDate){
                console.log('管理员权限')
                work.className='nav-item';
                life.className='nav-item';
                mwork.className='nav-item';
                mlife.className='nav-item';
                localStorage.setItem('mode','kolento');
                alert('已获得管理员权限')
            }else if(psd=='work'+currentDate){
                console.log('工作权限')
                work.className='nav-item';
                life.className='nav-item hide';
                mwork.className='nav-item';
                mlife.className='nav-item hide';
                localStorage.setItem('mode','work');
                alert('已获得中级权限')
            }else{
                console.log('游客权限');
                work.className='nav-item hide';
                life.className='nav-item hide';
                mwork.className='nav-item hide';
                mlife.className='nav-item hide';
                localStorage.setItem('mode','normal');
            }
        }else{
            console.log('没有值')
        }
    }
    
    addPop();
    watchImg();
    closeMask();
};

// 图片延迟加载
function getPos(obj){
  var l=0;
  var t=0;
  while(obj)
  {
    l+=obj.offsetLeft;
    t+=obj.offsetTop;
    obj=obj.offsetParent;
  }
  return {left: l, top: t};
}
function showImg(){
  //用了cdn还是慢 暂时舍弃了
  let cdn = 'https://cdn.jsdelivr.net/gh/kolentoo/kolento2023@kolento/'

  var aTmg=document.getElementsByTagName('img');
  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
  var scrollBottom=scrollTop+document.documentElement.clientHeight;
  for(var i=0;i<aTmg.length;i++)
  {
    var p=getPos(aTmg[i]);
    if(p.top<scrollBottom + 200)
    {
      //alert(aTmg);
      if(aTmg[i].className=='logo'||aTmg[i].alt=='hero'||aTmg[i].className=='img-list'){
        //logo 不用懒加载
      }else{
        // console.log('aTmg[i]._src',aTmg[i].getAttribute('_src'))
        // 替换为cdn连接
        aTmg[i].src=aTmg[i].getAttribute('_src')
        // aTmg[i].src=cdn+aTmg[i].getAttribute('_src').split('/kolento2023')[1];
      }
      
    }
  }
}

// 图片放大效果
function watchImg(){
    var aTmg=document.querySelectorAll('img');
    let imgList = document.querySelectorAll('.img-list')[0];
    console.log('imgList',imgList)
    aTmg.forEach(function(list,index){
        aTmg[index].onclick=function(){
            console.log('点击事件',aTmg[index].src)

            let pop = document.querySelector(".pop");
            pop.className='pop'

            imgList.src=aTmg[index].src;
        }
    })

}

function closeMask(){
    let mask = document.querySelector(".mask");
    let pop = document.querySelector(".pop");
    mask.onclick=function(){
        pop.className="pop hide"
    }
}

// 添加图片弹窗
function addPop(){
    console.log('addPop')
    let body = document.querySelector('body');
    let pop = document.createElement("div");
    pop.className="pop hide";

    let mask = document.createElement("div");
    mask.className="mask";

    let imgBox = document.createElement("div");
    let imgList = document.createElement("img");
    imgList.setAttribute('src','');
    imgBox.className='img-box'
    imgList.className="img-list";
    
    pop.append(mask);
    mask.append(imgBox);
    imgBox.append(imgList);
    
    body.append(pop);
}
