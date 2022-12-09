// //date and time
// const now=new Date();

// console.log(now);
// console.log(typeof now);

// //year month
// console.log('getFullYear:',now.getFullYear());
// console.log('getMonth:',now.getMonth());
// console.log('getDate:',now.getDate());
// console.log('getDay:',now.getDay());
// console.log('getHours:',now.getHours());
// console.log('getMinutes:',now.getMinutes());
// console.log('getSeconds:',now.getSeconds());

// //timestamp
// //time in millisec since 1970 ka koi day
// //used for coming 2 timestamps
// console.log('timestamp:',now.getTime());

// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());



// //timestamps

// const now=new Date();
// const before=new Date('February 1 2019 7:30:59');

// console.log(now.getTime(),before.getTime());

// const diff=now.getTime()-before.getTime();
// console.log(diff);

// //time milli sec mai hai
// const mins=Math.round(diff/1000/60);

// const hours=Math.round(mins/60);
// const days=Math.round(hours/24);

// console.log(days,mins,hours);

// //converting timestamp into date objects
// const timestamp=1674490464999;
// console.log(new Date(timestamp));



//making a digital clock

const clock=document.querySelector('.digital-clock');

const tick=()=>{
    const now=new Date();

    const h=now.getHours();
    const m=now.getMinutes();
    const s=now.getSeconds();

    const html=`
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML=html;
};

//hr ek sec ke baad fire hoga tick
setInterval(tick,1000);
