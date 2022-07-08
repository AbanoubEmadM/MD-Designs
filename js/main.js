let homeImgs = ['../../imgs/4 (1).png','../../imgs/4-1.png','../../imgs/16-3.jpg','../../imgs/6-1.png'];
let nextImg = document.getElementById("next");
let prevImg = document.getElementById("prev");
let index = 0;
let sliderDesc = ['التصميم جزء من هوية المكان و صاحبه.','واجهات المباني تضفي طابعا خاصا علي البيئة المحيطة.',
'الرمال ممكن أن تصبح جنة تستمتع بها.','التصميم الجيد يأخذك من صخب الحياة.'];
let sliderDescDiv = document.querySelector(".home-desc p");
sliderDescDiv.innerHTML = sliderDesc[index]
let homeImg = document.getElementById("image");
homeImg.src = homeImgs[0];
nextImg.addEventListener("click",()=>{
    index++;
    checker()
    homeImg.src = homeImgs[index];
    sliderDescDiv.innerHTML = sliderDesc[index]
})
prevImg.addEventListener("click",()=>{
    index--;
    checker()
    homeImg.src = homeImgs[index];
    sliderDescDiv.innerHTML = sliderDesc[index]
})
function checker(){
    if(index == 0){
        prevImg.style.pointerEvents = 'none'
    }else{
        prevImg.style.pointerEvents = 'all'
    }
    if(index == homeImgs.length -1){
        nextImg.style.pointerEvents = 'none'
    }else{
        nextImg.style.pointerEvents = 'all'
    }
}
checker();
let steps = Array.from(document.querySelectorAll(".step"));
let stepIndex = 0;
let stepDesc = document.querySelector(".step-desc")
let stepContent = [
    {
        title: 'المرحلة الاولي',
        itemOne:'استقبال المكالمة',
        itemTwo:'فهم العميل ودراسة المشروع',
        itemThree:'إرسال عرض السعر'
    },
    {
        title: 'المرحلة الثانية',
        itemOne:'عقد الاتفاقية',
        itemTwo:'استقبال العميل وفهم متطلباته',
        itemThree:'تحويل المتطلبات الى مشروع'
    },
    {
        title: 'المرحلة الثالثة',
        itemOne:'زيارة موقع العميل',
        itemTwo:'تطبيق المخططات',
        itemThree:'رفع المقاسات حسب الواقع'
    },
    {
        title: 'المرحلة الرابعة',
        desc: ' تحليل الفراغ عمل المخططات ثنائية الأبعاد صنع لوحة مزاج العميل واختياراته',
        itemOne:'تحليل الفراغ',
        itemTwo:'عمل المخططات ثنائية الأبعاد',
        itemThree:' صنع لوحة مزاج العميل واختياراته'

    },
    {
        title: 'المرحلة الخامسة',
        desc: 'التصاميم ثلاثية الأبعاد موافقات العميل رسم المخططات التنفيذية',
        itemOne:'التصاميم ثلاثية الأبعاد',
        itemTwo:'موافقات العميل',
        itemThree:' رسم المخططات التنفيذية'

    },
    {
        title: 'المرحلة الاخيرة',
        itemOne:'حساب الكميات',
        itemTwo:'عرض سعر التنفيذ',
        itemThree:'التنفيذ والتأثيث'
    },
]

steps.forEach(step => {
    steps[0].classList.add("active")
    step.addEventListener("click",()=>{
        steps.forEach(step =>{
            step.classList.remove("active")
        });
        step.classList.add("active")
        
        let stepHtml = `
            <h4>${stepContent[steps.indexOf(step)].title}</h4>
            <p>${stepContent[steps.indexOf(step)].itemOne} </p>
            <p>${stepContent[steps.indexOf(step)].itemTwo} </p>
            <p>${stepContent[steps.indexOf(step)].itemThree} </p>
        `
        stepDesc.innerHTML = stepHtml;
    })
    let stepHtml = `
    <h4>${stepContent[0].title}</h4>
    <p>${stepContent[0].itemOne} </p>
    <p>${stepContent[0].itemTwo} </p>
    <p>${stepContent[0].itemThree} </p>
`
stepDesc.innerHTML = stepHtml;

})
let mdSliderContent = [
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'احمد الله كثيرا أن وفقني باختيار شركة شاد لتصميم منزلي الجديد فانا سعيد جدا بهذا الاختيار.. وبحكم اني مطلع على كثير من التصاميم إلا أن تصاميمهم أبهرتني.. إتقان.. ذوق.. اهتمام بأدق التفاصيل.. تنوع وحداثة بالتصاميم شكرا من القلب لجميع طاقم العمل المتميز ممتن لهذا الفريق لتميزه في عمله ولفهمه طريقة تفكيرنا ورحابة صدره وقيامه بمجهود رائع لتلبية احتياجاتنا',
        name:'سامي الحرز'
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'احمد الله كثيرا أن وفقني باختيار شركة شاد لتصميم منزلي الجديد فانا سعيد جدا بهذا مالك لمقهى وعميل لشاد حاليا المشروع تحت التنفيذ من قبل شاد أيضا. التصميم كان جدا مميز وفيه إبداع للأمانة واحترافي',
        name:'Oslo Cafe'
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'التصميم كان رائع ب معنى الكلمة وكل من شافه عجبه، كان ودي انفذ معهم بس السعر خارج ميزانيتي في التنفيذ ممكن عشان الجودة عالية وعندهم مهندسين محترمين إجمالا التعامل كان جيد جدا و كان ردود على جميع الأسئلة سواء مني أو من المقاول المنفذ',
        name:'سامي العنزي'
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'التعامل ممتاز والفريق متعاون ولا يتذمر من كثرة التغيير',
        name:'عمار الشرفاء'
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'كل شيء رائع وتصاميمهم إبداعية ولا يعيبهم شيء فقط طلبت استثناء يخلص مشروعي اقل من الوقت المحدد ولكن رفضوا بسبب كثرة المشاريع وجدولتها ...',
        name:'م.وجيه الحمود'
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'ولله الحمد والامتنان لقد وفقنا وبكل جدارة في اختيار شركة مميزة كشركة شاد للتصميم كل بكل شفافية، شاد ابدعت في تنفيذ شقتي واكثر مما توقعت ابداااع بصراحة الوالد والوالده والاهل كثير مبسوطين وانتهى العمل ومازالوا معي،، ممتنين جدا يستحقون اكثر من خمس نجوم .. اوصي وبشدة',
        name:'خالد المطلق'
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'كل شيء رائع وتصاميمهم إبداعية ولا يعيبهم شيء فقط طلبت استثناء يخلص مشروعي اقل من الوقت المحدد ولكن رفضوا بسبب كثرة المشاريع وجدولتها ...',
        name:'محمد الشهراني '
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'أوفيتم بوعدكم، أمانة ابهرنا التصميم وفاق توقعاتنا',
        name:'د. مساعد القفي  '
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'تصميم رائع فوق ما كنا نتوقع والتنفيذ فاق التصميم والجودة حسب متابعتي أول بأول فريق شاد يشُاد به وعلى رأسهم صاحبها عبدالله آل غرسان ',
        name:'د. ا.عبدالعزيز الصرير'
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'عبدالله آل غرسان خياله واسع ومبدع نتائج التخطيط والتصميم مستواه عالي جدا متقدم عما يتخيله العميل  ',
        name:'ا.محمد المحسن '
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'أخي عبدالله، أولا أنا أهنئك وأغبطك على حبك وشغفك للعمل وهذي ميزه نادرة تلقاها فالوقت الحالي, إضافة الى اهتمامك بالعميل وتواصلك الدائم والي هو السبب من وجهة نظري في نجاح المشروع ورضى جميع الأطراف , أما الجانب الإبداعي جميل جدا  ',
        name:'م.عبدالله بن قريعة '
    },
    {
        title:'عملاء يثقون في ام دي ديزاين',
        desc:'إذا اجتمع الإبداع وجودة العمل مع السرعة في الإنجاز وبقيادة شاب سعودي فهذا كل ما يتمناه مدراء الإدارات الذين ينشدون النجاح في أعمالهم، يستاهل التكريم ',
        name:'العميد فيصل الجابر'
    },
]
for(i = 0; i < mdSliderContent.length; i++){
    let spanPagination = document.createElement("button");
    document.body.append(spanPagination)
    document.querySelector(".btns-container").append(spanPagination)
}
let mdSliderDiv = document.querySelector(".md-slider-desc");
let randomNumber = Math.floor(Math.random() * mdSliderContent.length)
let btnsContainer = Array.from(document.querySelectorAll(".btns-container button"));
btnsContainer[randomNumber].classList.add("active")
btnsContainer.forEach(btn => {
    let index = btnsContainer.indexOf(btn);
    btn.addEventListener("click",()=>{
        btnsContainer.forEach(btn => {
            btn.classList.remove("active")
        })
        btn.classList.add("active")

        let mdSliderHtml = `
            <h4>${mdSliderContent[index].title}</h4>
            <p>${mdSliderContent[index].desc}</p>
            <span>${mdSliderContent[index].name}</span>
        `
        mdSliderDiv.innerHTML = mdSliderHtml
    })
    let mdSliderHtml = `
    <h4>${mdSliderContent[randomNumber].title}</h4>
    <p>${mdSliderContent[randomNumber].desc}</p>
    <span>${mdSliderContent[randomNumber].name}</span>
`
    mdSliderDiv.innerHTML = mdSliderHtml
    btnsContainer[randomNumber].classList.add("active");
})

// let blogs = [
//     {
//         img:'/imgs/5-أفكار-ملهمة-تساعدك-في-تصميم-الفلل-من-الداخل-800x600.jpg',
//         title:"5 أفكار ملهمة تساعدك في تصميم الفلل من الداخل",
//         desc:' يعتبر تصميم الفلل الداخلي تألق ملكي يجب الاهتمام ...',
//         btn:'قراءة المزيد'
//     },
//     {
//         img:'/imgs/4-امور-يجب-مراعتها-عند-التصميم-الخارجي.jpg-22-800x600.jpg',
//         title:" 4 أمور يجب مراعاتها عند التصميم الخارجي للفلل  ",
//         desc:'يعد التصميم الخارجي للفلل والقصور امتدادًا طبيعي ...',
//         btn:'قراءة المزيد'
//     },
//     {
//         img:'/imgs/10-اخطاء-يجب-تجنبها-عند-تصميم-ديكورات-المحلات-الخارجية.jpg-22-800x600.jpg',
//         title:"10 أخطاء يجب تجنبها عند تصميم ديكورات محلات تجارية",
//         desc:'قد يكون تصميم ديكورات محلات تجارية أنيق عملية مرب ...',
//         btn:'قراءة المزيد'
//     }
// ]
// let blogBox = document.querySelector(".blog-box");
// let blogContent = `
//     <img src=${blogs}>
// `
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
