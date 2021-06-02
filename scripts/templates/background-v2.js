[sas_inject:sas/sas-libs.js|ALL]

var SmartBackgroundConfig = {
    insertionId: Number([sas_insertionId]),
    pageId: String("[sas_pageId]"),
    sessionId: Math.round(Math.random()*100000),
    tagId: String('[sas_tagId]'),
    filePath: (document.location.protocol == 'https:' ? 'https://[sas_securedNetStorageDomain]' : 'http://[sas_unsecuredNetStorageDomain]') + '/diff/templates/',
    creative: {
        url: String("[sas_creativeUrl]"),
        width: Number([sas_creativeWidth]),
        height: Number([sas_creativeHeight]),
        clickUrl: String("[sas_creativeClickUrl]"),
        oryginalClickUrl: String("[sas_creativeOriginalClickUrl]"),
        clickTarget: String("[sas_creativeClickTarget]"),
        clickUrlArray: [sas_creativeClickUrlArray],
        type: Number([sas_creativeType]),
        agencyCode: String([sas_creativeScriptCode]),
        wMode: String("[sas_flashWmode]"),
        flashVars: String('[sas_flashVars]'),
        backup: {
            url: String("[sas_noFlashImageUrl]"),
            clickUrl: String("[sas_noFlashImageClickUrl]"),
            clickTarget: String("[sas_noFlashImageClickTarget]"),
            width: Number([sas_noFlashImageWidth]),
            height: Number([sas_noFlashImageHeight])
        }
    },
    background: {
        color: String("[user_backgroundColor]"),
        repeat: String("[user_backgroundRepeat]"),
        position: String("[user_backgroundPosition]"),
        attachment: String("[user_backgroundAttachment]")
    },
    elementOffset: {
        elementId: String("[user_elementId]"),
        elementType: String("[user_elementType]"),
        value: Number([user_elementOffset]),
        contentVerticalOffset: Number([user_contentVerticalOffset])
        contentWidth: Number([user_contentWidth])
    },
    close: {
        defaultButton: Boolean([user_defaultButton]),
        linkText: String("[user_linkText]"),
        linkColor: String("[user_linkColor]"),
        linkFontSize: Number([user_linkFontSize])
    },
    other: {
        duration: Number([user_duration]),
        trackingUrl: String("[user_trackingUrl]"),
        zIndex: Number([user_zIndex]),
        forcePointerCursor: Boolean([user_forcePointerCursor]),
        fakeBodyIdTag: String("[user_fakeBodyIdTag]"),
        horizontalOffset: Number([user_horizontalOffset]),
        verticalOffset: Number([user_verticalOffset]),
        important: Boolean([user_important])
    },
    clickMap: {
        pageWidth: Number([user_pageWidth]),
        width: Number([user_clickMapWidth]),
        height: Number([user_clickMapHeight]),
        topPartHeight: Number([user_topPartHeight]),
        zIndex: Number([user_clickMapZindex]),
        horizontalOffset: Number([user_clickMapHorizontalOffset]),
        verticalOffset: Number([user_clickMapVerticalOffset]),
        testBorderLine: Boolean([user_testBorderLine])
    }
};

(function () {
    var scr = ('0'=='[sas_creativeType]') ? String([sas_customisedScriptCode]) : String([sas_customisedScriptCode]+[sas_creativeScriptCode]);
    
    var lib = (document.location.protocol == 'https:' ? 'https://[sas_securedNetStorageDomain]' : 'http://[sas_unsecuredNetStorageDomain]') + '/diff/templates/js/background/sas-background-1.27.js';
    window.isAsync = window.sas_ajax || [sas_isAsyncCall];
    if(!document.getElementById("[sas_tagId]")) document.write('<div id="[sas_tagId]"></div>');
    if (isAsync) {
        var appendToContainer = function(id, element){
            var tag=document.getElementById(id);
            if(tag){
                if("string"==typeof element){
                    var newEl=document.createElement("div");
                    newEl.innerHTML=element;
                    element=newEl;
                }
                tag.appendChild(element);
            }
        };

        var js = document.createElement('script'); js.src = lib;
        appendToContainer('[sas_tagId]', js);
        if (scr.replace(/\r\n/gm, '')) {
            var ifr = document.createElement('iframe');
            ifr.src = 'about:blank';
            var css = 'position:absolute;left:-1000px;width:1px;height:1px';
            ifr.setAttribute('style', css);
            ifr.style.cssText = css;
            appendToContainer('[sas_tagId]', ifr);
            var d = ifr.contentWindow.document;
            d.open('text/html', 'replace');
            d.write('<!DOCTYPE html><head></head><body>' + scr + '</body></html>');
            d.close();
        }
    } else {
        document.write('<scr'+'ipt type="text/javascript" src="'+lib+'"></scr'+'ipt>' + scr);
    }

	//Custom content width change.
	var containerElement = document.getElementById('[user_elementId]');
	containerElement.style.width = [user_contentWidth] + '%';







})();