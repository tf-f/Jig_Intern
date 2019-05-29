(function () {
    var copyTarget,copyTargets,num,txt,range;
    copyTargets = document.querySelectorAll('.copy');

    ClickCopy = function() {
        copyTarget = this.textContent;

        txt = document.createElement("textarea");
        txt.value = copyTarget;

        document.body.appendChild(txt);
        txt.select();
        document.execCommand('copy');
        txt.parentElement.removeChild(txt);
    }

    for(i=0,num=copyTargets.length;i<num;i++) {
        copyTarget = copyTargets[i];
        copyTarget.addEventListener('click',ClickCopy);
    }

}());