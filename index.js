/**
 * 
 * @param {string} innerText 
 * @param {boolean} stack
 * @param {string} borderColor 
 * @param {string} fontColor 
 * @param {string} background 
 * @param {string} width 
 * @param {string} fontSize 
 * @param {boolean} state 
 * @param {string} container 
 */
function xnotify( innerText='This is a test notification! Click to dismiss me!', 
                 stack=false, borderColor='#eee', 
                 fontColor='slateblue', background='rgb(227, 224, 250)', 
                 width='50vw', fontSize='18px', state=true, container='body',){
    var $ = document; var element = $.getElementById('notif'); var count = 1;
    if (!stack){
        if(typeof(element) != 'undefined' && element != null){ element.remove(); }
    } else {
        if(typeof(element) != 'undefined' && element != null){ count++; }
    }
    var notif = $.createElement('div');
    notif.setAttribute('id','notif');
    notif.style.border = '1px solid ' + borderColor;
    notif.style.position = 'fixed';
    notif.style.backgroundColor = background;
    notif.style.right = '1em';
    notif.style.bottom = '1em';
    notif.style.padding = '1em';
    notif.style.color = fontColor;
    notif.style.borderRadius = '5px';
    notif.style.fontSize = fontSize;
    notif.style.fontWeight = 600
    notif.style.width = width;
    if (state){
        notif.style.display = 'block'; 
    } else {
        notif.style.display = 'none';
    }
    
    $.querySelector('html').style.margin = '0';
    $.querySelector('body').style.margin = '0';
    var fontAwe = $.createElement('script'); 
    var jquery = $.createElement('script');
    fontAwe.setAttribute('src', 'https://use.fontawesome.com/96d2cf4443.js');
    jquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
    notif.innerHTML = '<i class="fa fa-bell"></i>&nbsp;<div style="font-size: 10px; line-height: 20px; text-align: center;\
    background: slateblue; border-radius: 20px; color: #fff; display: inline-block; width: 20px; height: 20px;">'+count+'</div> ' + innerText;
    notif.addEventListener('click', () => {
        notif.remove();
    });
    if (container!='body'){
        $.querySelector(container).appendChild(fontAwe);
        $.querySelector(container).appendChild(jquery);
        $.querySelector(container).appendChild(notif);
    } else {
        $.querySelector('body').appendChild(fontAwe);
        $.querySelector('body').appendChild(jquery);
        $.querySelector('body').appendChild(notif);
    } 
}

module.exports.xnotify = xnotify