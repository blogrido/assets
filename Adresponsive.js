&lt;p id=&quot;401xd&quot;&gt;&lt;/p&gt;
&lt;script&gt;

var cari = navigator.userAgent;
var dapet = cari.search(&quot;UCBrowser&quot;);
if(dapet&gt;1) {

    var strs=document.URL;
    var urlnya= strs.replace(&quot;http://&quot;, &quot;&quot;);
    var strings=&#39;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;&lt;h3 align=&quot;center&quot;&gt; Browser yang anda gunakan tidak didukung untuk membuka situs ini.&lt;br/&gt;&lt;br/&gt;Klik tombol dibawah ini untuk salin di browser lain.&lt;br/&gt;&lt;br/&gt;&lt;input type=&quot;text&quot; class=&quot;teks&quot; value=&quot;&#39;+ document.URL  +&#39;&quot; size=&quot;50&quot;&gt;&lt;br/&gt; &lt;button class=&quot;js-copy-btn&quot;&gt;Pilih&lt;/button&gt;&lt;br/&gt;&lt;/h3&gt;&#39;;


    document.getElementById(&quot;401xd&quot;).innerHTML = strings;

var copyTextareaBtn = document.querySelector(&#39;.js-copy-btn&#39;);

copyTextareaBtn.addEventListener(&#39;click&#39;, function(event) {
  var copyTextarea = document.querySelector(&#39;.teks&#39;);
  //copyTextarea.select();
copyTextarea.selectionStart=0;
copyTextarea.selectionEnd=copyTextarea.value.length;

  try {
    var successful = document.execCommand(&#39;copy&#39;);
    var msg = successful ? &#39;successful&#39; : &#39;unsuccessful&#39;;
    console.log(&#39;Copying text command was &#39; + msg);
  } catch (err) {
    console.log(&#39;Oops, unable to copy&#39;);
  }
});

   exit();
}

function exit( status ) {

    var i;

    if (typeof status === &#39;string&#39;) {
        alert(status);
    }

    window.addEventListener(&#39;error&#39;, function (e) {e.preventDefault();e.stopPropagation();}, false);

    var handlers = [
        &#39;cut&#39;,
        &#39;beforeunload&#39;, &#39;blur&#39;, &#39;change&#39;, &#39;contextmenu&#39;, &#39;focus&#39;, &#39;keydown&#39;, &#39;keypress&#39;, &#39;keyup&#39;, &#39;mousedown&#39;, &#39;mousemove&#39;, &#39;mouseout&#39;, &#39;mouseover&#39;, &#39;mouseup&#39;, &#39;resize&#39;, &#39;scroll&#39;,
        &#39;DOMNodeInserted&#39;, &#39;DOMNodeRemoved&#39;, &#39;DOMNodeRemovedFromDocument&#39;, &#39;DOMNodeInsertedIntoDocument&#39;, &#39;DOMAttrModified&#39;, &#39;DOMCharacterDataModified&#39;, &#39;DOMElementNameChanged&#39;, &#39;DOMAttributeNameChanged&#39;, &#39;DOMActivate&#39;, &#39;DOMFocusIn&#39;, &#39;DOMFocusOut&#39;, &#39;online&#39;, &#39;offline&#39;, &#39;textInput&#39;,
        &#39;abort&#39;, &#39;close&#39;, &#39;dragdrop&#39;, &#39;load&#39;, &#39;paint&#39;, &#39;reset&#39;, &#39;submit&#39;, &#39;unload&#39;
    ];

    function stopPropagation (e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }
    for (i=0; i &lt; handlers.length; i++) {
        window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
    }

    if (window.stop) {
        window.stop();
    }

    throw &#39;&#39;;
}

&lt;/script&gt;

&lt;style&gt;#n24b{position:fixed!important;position:absolute;top:0;top:expression((t=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+&quot;px&quot;);left:0;width:100%;height:100%;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);display:block}#n24b p{opacity:1;filter:none;font:bold 16px Verdana,Arial,sans-serif;text-align:center;margin:20% 0}#n24b p a,#n24b p i{font-size:12px}#n24b ~ *{display:none}&lt;/style&gt;&lt;noscript&gt;&lt;center id=n24b&gt;&lt;p&gt;Aktifkan JavaScript Pada Browser Anda&lt;br /&gt;Lalu Muat Ulang Halaman Ini&lt;/p&gt;&lt;/center&gt;&lt;/noscript&gt;&lt;script&gt;(function(w,u){var d=w.document,z=typeof u;function n24b(){function c(c,i){var e=d.createElement(&#39;center&#39;),b=d.body,s=b.style,l=b.childNodes.length;if(typeof i!=z){e.setAttribute(&#39;id&#39;,i);s.margin=s.padding=0;s.height=&#39;100%&#39;;l=Math.floor(Math.random()*l)+1}e.innerHTML=c;b.insertBefore(e,b.childNodes[l-1])}function g(i,t){return !t?d.getElementById(i):d.getElementsByTagName(t)};function f(v){if(!g(&#39;n24b&#39;)){c(&#39;&lt;p&gt;NonAktifkan AdBlock pada Browser untuk memuat situs ini dengan stabil.&lt;br&gt;&lt;a href=&quot;JavaScript:window.location.reload()&quot;&gt;Refresh&lt;/a&gt; &lt;i&gt;&lt;/i&gt;&lt;/p&gt;&#39;,&#39;n24b&#39;)}};(function(){var a=[&#39;ContentPolepositionAds_Result&#39;,&#39;LowerContentAd&#39;,&#39;ad-front-footer&#39;,&#39;advertisment&#39;,&#39;block-advert-content&#39;,&#39;skyline_ad&#39;,&#39;skyscraperAdContainer&#39;,&#39;ad&#39;,&#39;ads&#39;,&#39;adsense&#39;],l=a.length,i,s=&#39;&#39;,e;for(i=0;i&lt;l;i++){if(!g(a[i])){s+=&#39;&lt;a id=&quot;&#39;+a[i]+&#39;&quot;&gt;&lt;/a&gt;&#39;}}c(s);l=a.length;setTimeout(function(){for(i=0;i&lt;l;i++){e=g(a[i]);if(e.offsetParent==null||(w.getComputedStyle?d.defaultView.getComputedStyle(e,null).getPropertyValue(&#39;display&#39;):e.currentStyle.display)==&#39;none&#39;){return f(&#39;#&#39;+a[i])}}},250)}());(function(){var t=g(0,&#39;img&#39;),a=[&#39;/ad_slideout.&#39;,&#39;/ad_upload/ad&#39;,&#39;/affiliation/ad&#39;,&#39;/externalads/ad&#39;,&#39;/layer/ads.&#39;,&#39;/oas-config.&#39;,&#39;/sponser.&#39;,&#39;/update_ads/ad&#39;,&#39;_square_ad.&#39;,&#39;/468x60_&#39;],i;if(typeof t[0]!=z&amp;&amp;typeof t[0].src!=z){i=new Image();i.onload=function(){this.onload=z;this.onerror=function(){f(this.src)};this.src=t[0].src+&#39;#&#39;+a.join(&#39;&#39;)};i.src=t[0].src}}());(function(){var o={&#39;http://pagead2.googlesyndication.com/pagead/show_ads.js&#39;:&#39;google_ad_client&#39;,&#39;http://js.adscale.de/getads.js&#39;:&#39;adscale_slot_id&#39;,&#39;http://get.mirando.de/mirando.js&#39;:&#39;adPlaceId&#39;},S=g(0,&#39;script&#39;),l=S.length-1,n,r,i,v,s;d.write=null;for(i=l;i&gt;=0;--i){s=S[i];if(typeof o[s.src]!=z){n=d.createElement(&#39;script&#39;);n.type=&#39;text/javascript&#39;;n.src=s.src;v=o[s.src];w[v]=u;r=S[0];n.onload=n.onreadystatechange=function(){if(typeof w[v]==z&amp;&amp;(!this.readyState||this.readyState===&quot;loaded&quot;||this.readyState===&quot;complete&quot;)){n.onload=n.onreadystatechange=null;r.parentNode.removeChild(n);w[v]=null}};r.parentNode.insertBefore(n,r);setTimeout(function(){if(w[v]===u){f(n.src)}},2000);break}}}())}if(d.addEventListener){w.addEventListener(&#39;load&#39;,n24b,false)}else{w.attachEvent(&#39;onload&#39;,n24b)}})(window);&lt;/script&gt;
