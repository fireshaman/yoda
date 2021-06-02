[sas_inject:sas/sas-libs.js|ALL]

(function () {
    var config = {
        insertionId: Number([sas_insertionId]),
        pageId: "[sas_pageId]",
        sessionId: new Date().getTime(),
        baseUrl: String("[sas_smartBaseUrl]"),
        formatId: Number([sas_formatId]),
        tagId: String("[sas_tagId]"),
        oba: Number([sas_oba]),
        isAsync: window.sas_ajax || [sas_isAsyncCall],
        customScript: String([sas_customisedScriptCode]),
        creative: {
            id: Number([sas_creativeId]),
            url: String('[sas_creativeUrl]'),
            type: Number([sas_creativeType]),
            width: Number(('[sas_creativeWidth]' === '100%') ? 0 : '[sas_creativeWidth]'),
            height: Number(('[sas_creativeHeight]' === '100%') ? 0 : '[sas_creativeHeight]'),
            alt: String('[sas_imageAltText]'),
            clickUrl: String('[sas_creativeClickUrl]'),
            clickUrlArray: [sas_creativeClickUrlArray],
            oryginalClickUrl: String('[sas_creativeOriginalClickUrl]'),
            clickTarget: String('[sas_creativeClickTarget]'),
            agencyCode: String([sas_creativeScriptCode]),
            creativeCountPixelUrl: String('[sas_creativeCountPixelUrl]'),
            creativeClickCountPixelUrl: ([sas_creativeId] ? '[sas_creativeClickCountPixelUrl]' : '[sas_insertionClickCountPixelUrl]') + '&rtb=1&rtbbid=[sas_rtb_auctionId]&rtbet=[sas_rtb_environmentType]&rtblt=[sas_rtb_bidLogTimeTicks]&rtbnid=[sas_rtb_publisherId]&rtbh=[sas_rtb_impressionHash]',
        },
        statisticTracking: {
            rtbbid: String('[sas_rtb_auctionId]'),
            rtbet: String('[sas_rtb_environmentType]'),
            rtblt: String('[sas_rtb_bidLogTimeTicks]'),
            rtbnid: String('[sas_rtb_publisherId]'),
            rtbh: String('[sas_rtb_impressionHash]')
        }
    };

    if (!document.getElementById("[sas_tagId]")) {
        
        var newSasDiv = document.createElement("div");
        newSasDiv.src = "";
        newSasDiv.style.width = "1px";
        newSasDiv.style.height = "1px";
        newSasDiv.style.border = "0px";
        newSasDiv.id = '[sas_tagId]';
        document.body.appendChild(newSasDiv);
        //document.write('<div id="[sas_tagId]"><div style="display:none"></div></div>');
        //jmencina
    } else {
        var el = document.createElement('div');
        el.style.display = 'none';
        document.getElementById('[sas_tagId]').appendChild(el);
    }

    var sas = window.sas;
    sas.utils.cdns["http:"] = "http://[sas_unsecuredNetStorageDomain]";
    sas.utils.cdns["https:"] = "https://[sas_securedNetStorageDomain]";
    //sas.utils.cdns["http:"] = "http://demo.smartadserver.com";

    sas.utils.loadScriptCdn("/diff/templates/ts/dist/banner/sas-banner-1.2.js", {
        async: config.isAsync, onLoad: function () {
            newObj[sas_insertionId] = new Banner(config);
            newObj[sas_insertionId].init();
        }
    });
})();