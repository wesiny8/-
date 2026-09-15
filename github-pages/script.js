const notes=[
 {n:'01',title:'关于我',en:'ABOUT ME',summary:'好奇心、审美和解决问题的能力',color:'yellow',body:'<p>你好，我是林默，一名关注人与体验的产品设计师。我喜欢把复杂问题整理成清晰、自然且有温度的产品体验。</p><blockquote>设计不是装饰，而是让事情更容易被理解。</blockquote><div class="chips"><span>5 年设计经验</span><span>12 个上线项目</span><span>杭州 / 可远程</span></div>'},
 {n:'02',title:'工作经历',en:'EXPERIENCE',summary:'从概念到上线的完整产品设计',color:'pink',body:'<h3>高级产品设计师 · 星野科技</h3><small>2022 — 至今</small><p>负责企业协作产品的核心体验，推动设计系统落地，关键任务完成率提升 28%。</p><h3>交互设计师 · 折线工作室</h3><small>2020 — 2022</small><p>参与移动端产品和品牌网站设计，持续跟进研究、原型与开发验收。</p>'},
 {n:'03',title:'教育经历',en:'EDUCATION',summary:'持续学习，也持续整理所学',color:'blue',body:'<h3>数字媒体艺术 · 中国美术学院</h3><small>2016 — 2020</small><p>主修交互设计、视觉传达与动态图形。毕业设计获学院优秀作品。</p>'},
 {n:'04',title:'专业技能',en:'SKILLS',summary:'策略、体验、视觉与协作',color:'green',body:'<div class="chips"><span>产品策略 90%</span><span>交互设计 94%</span><span>视觉设计 86%</span><span>用户研究 82%</span><span>Figma</span><span>Framer</span></div>'},
 {n:'05',title:'项目作品',en:'SELECTED WORK',summary:'几个值得展开讲的项目故事',color:'orange',body:'<h3>把复杂工作流变成一张清晰地图</h3><p>重新梳理跨部门协作路径，设计可配置的任务视图和信息架构。</p><div class="chips"><span>产品设计</span><span>设计系统</span><span>用户研究</span></div>'},
 {n:'06',title:'联系方式',en:'CONTACT',summary:'期待与你聊聊有意思的事情',color:'violet',body:'<p>如果你正在寻找一位能把策略、体验和视觉连接起来的设计师，欢迎联系我。</p><p><a href="mailto:hello@example.com">hello@example.com ↗</a></p>'}
];
const main=document.querySelector('.portfolio'),grid=document.querySelector('.notes'),hint=document.querySelector('.hint span'),folderClose=document.querySelector('.folder-close'),modal=document.querySelector('.modal'),detail=document.querySelector('.detail');
grid.innerHTML=notes.map((x,i)=>`<button class="note ${x.color}" style="--i:${i}"><span class="tape"></span><b>${x.n}</b><h2>${x.title}</h2><small>${x.en}</small><p>${x.summary}</p><em>点击翻阅 ↗</em></button>`).join('');
function openFolder(){main.classList.replace('is-closed','is-open');hint.textContent='上下滚动内页，点击便利贴查看内容';folderClose.hidden=false}
function closeFolder(){main.classList.replace('is-open','is-closed');hint.textContent='点击档案夹开始浏览';folderClose.hidden=true}
function openNote(i){const x=notes[i];detail.className=`detail ${x.color}`;detail.querySelector('.eyebrow').textContent=`${x.n} / ${x.en}`;detail.querySelector('h2').textContent=x.title;detail.querySelector('.summary').textContent=x.summary;detail.querySelector('.body').innerHTML=x.body;modal.hidden=false;document.body.style.overflow='hidden'}
function closeNote(){modal.hidden=true;document.body.style.overflow=''}
document.querySelectorAll('.cover').forEach(x=>x.addEventListener('click',openFolder));folderClose.addEventListener('click',closeFolder);grid.querySelectorAll('.note').forEach((x,i)=>x.addEventListener('click',()=>openNote(i)));document.querySelector('.detail-close').addEventListener('click',closeNote);modal.addEventListener('click',e=>e.target===modal&&closeNote());document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!modal.hidden)closeNote();else if(main.classList.contains('is-open'))closeFolder()}});

