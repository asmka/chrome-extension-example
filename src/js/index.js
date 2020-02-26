//import counter1 from './counter1';
//import counter2 from './counter2';

function inject(src) {
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', src);

    document.body.appendChild(s);
}

//inject(chrome.extension.getURL('js/do_count_up1.js'));
//inject(chrome.extension.getURL('js/do_count_up2.js'));
inject(chrome.extension.getURL('js/do_count_ups.js'));
