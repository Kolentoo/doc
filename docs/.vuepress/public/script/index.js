window.onload=function(){
 
    // 创建一个权限按钮
    let home = document.querySelector('#app');
    let btn = document.createElement("p");
    btn.className="mode";
    btn.innerHTML='访问<br/>权限'
    console.log('home',home);
    console.log("btn",btn)
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
            }else if(psd=='work'+currentDate){
                console.log('工作权限')
                work.className='nav-item';
                life.className='nav-item hide';
                mwork.className='nav-item';
                mlife.className='nav-item hide';
                localStorage.setItem('mode','work');
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
    

};
