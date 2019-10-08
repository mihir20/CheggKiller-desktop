const questionUrl = "https://www.chegg.com/homework-help/expertquestion";
const captchaUrl = "https://www.chegg.com/recaptcha?recaptcha_redirect_url=https://www.chegg.com/homework-help/expertquestion&invalid_captcha_return_url=https://www.chegg.com/my/expertqa";
const noQuesText = "Unfortunately, there are no questions available in your queue for the moment";
const homeUrl = "https://www.chegg.com";
const otherCaptchaUrl = "https://www.chegg.com/recaptcha?recaptcha_redirect_url=https://prod.cheggstudy.prod2.cheggnet.com/homework-help/expertquestion&invalid_captcha_return_url=https://www.chegg.com/my/expertqa";
const noQueTitle = "No Questions in the queue to display. | Chegg.com"
const dashboardURL = "https://www.chegg.com/my/expertqa"
const webview = document.getElementById('webview')

webview.addEventListener('dom-ready',()=>{
    let currentURL = webview.getURL();
    if(currentURL == questionUrl){
        console.log('QUES URL');
        const title = webview.getTitle();
        if(title==noQueTitle){
            console.log('NO QUES TITLE');
            webview.reload();
        }else{
            console.log('QUES TITLE');
            var audio = new Audio();
            audio.src = "notification_sound.mp3"
            audio.play();
        }
    }else if(currentURL != dashboardURL){
        console.log('OTHER URL');
        webview.loadURL(questionUrl);
    }

});
