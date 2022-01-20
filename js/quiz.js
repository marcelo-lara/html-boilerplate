'use strict';

const options = document.querySelectorAll("div.answer>div");

const e_dev = document.getElementById('dev');
const e_blk3 = document.getElementById('blk3');
const e_devops = document.getElementById('devops');


for (const opt of options) {
    opt.addEventListener('click', ()=>{
        const question_el = opt.parentElement;
        for (const x of question_el.querySelectorAll('div.on')) {
            x.classList.remove('on');
        }
        opt.classList.add('on');
        console.log("answer:", opt.parentElement.getAttribute('ref'), "->" , opt.getAttribute('val'))

        const role = opt.getAttribute('show')
        if(role){
            if(role=='dev'){
                e_dev.style.display = 'flex';
                e_blk3.style.display = 'none';
                e_devops.style.display = 'none';

            }
            if(role=='blk3'){
                e_dev.style.display = 'none';
                e_blk3.style.display = 'flex';
                e_devops.style.display = 'none';

            }
            if(role=='devops'){
                e_dev.style.display = 'none';
                e_blk3.style.display = 'none';
                e_devops.style.display = 'flex';

            }

            console.log("selected role ->", role)
        }

    })

}