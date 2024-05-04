var svgData = {
    "text_march": {
      "strokepath": [
        {
          "path": "M9.831,66.167c-2.944,0.886-11.712-1.226-3.709-10.8  s22.062-18.995,26.935-20.58C37.93,33.202,50.5,31.792,44.5,46.167s-14.25,32.197-19,37.417c-4.75,5.22-12.75,13.667-8.5,4.25  s20.211-27.514,27-31.667s16.035-12.627,12.25,1.25s-10.25,26.75-13,31.667C58.583,70.417,70,59.5,78,53.417  s24.738-16.779,12.667,4.25S76.25,88.333,75.5,90.917c-0.75,2.583-4.667,19.583,16.75-2.833",
          "duration": 800
        },
        {
          "path": "M115.25,71.917c-5.434,6.955-11.163,12.337-14.558,14.928  c-3.395,2.591-13.143,11.024-12.168,2.923c0.975-8.101,12.295-16.929,15.266-18.919c2.971-1.991,12.206-5.419,15.457-3.988  c2.126,3.681-11.955,20.048-13.914,34.239s9.735,20.761,31.7-6.211",
          "duration": 600,
        },
        {
          "path": "M123.791,72.943c3.495-1.876,4.957-3.249,6.083-3.388  c-1.085,3.479-13.999,21.948-15.624,24.405c7.098-6.914,16.125-24.266,29.125-24.405",
          "duration": 600
        },
        {
          "path": "M155.051,72.481c14.092-2.593,12.565-19.863-3.743-6.776  s-17.861,39.137,8.045,21.531",
          "duration": 600
        },
        {
          "path": "M179.375,48.856c-11.75,3.686-19.178,12.045,0,11.311  c19.178-0.734,102.409-12.389,69.205-48.819s-86.955,66.319-92.33,80.944c8.875-11.5,22.75-24,28.625-21.875  S166.75,90.754,176.25,93.96c7.125-0.794,12.216-4.695,15.608-8.619",
          "duration": 600
        }
      ],
      "dimensions": {
        "width": 260,
        "height": 117
      }
    }
  };
  
  var eighthData = {
    "eighth": {
      "strokepath": [
        {
          "path": "M3.957,11.127c-0.946-0.176-2.391,2.195-1.994,3.06  c0.635,1.383,3.879,0.79,5.019,0.884c1.318,0.109,2.682-0.122,3.982,0.195c1.793,0.437,2.329,1.888,0.92,3.243  c-0.775,0.745-1.367,1.729-2.552,1.744c-2.865,0.035-2.645-3.829-2.064-5.787c0.36-1.211,0.477-2.467,0.418-3.726  C7.616,9.253,7.822,7.416,5.77,7.565",
          "duration": 600
        },
        {
          "path": "M7.929,6.82C8.312,6.858,9.075,6.777,9.38,6.523  c0.479-0.399,0.09-0.995-0.078-1.435c0.324,0.846,0.72,4.057,1.842,4.372c1.742,0.489,0.998-3.979,1.21-5.136  c0.143-0.781,0.265-1.568-0.564-1.817c-1.075-0.323-1.569,0.203-1.365,1.318c0.142,0.779,0.704,1.39,1.187,1.983  c0.392,0.48,1.384,2.769,1.905,3.075c-0.285-0.182-0.058-2.334-0.051-2.658c0.009-0.392-0.092-0.975,0.12-1.326  c0.537-0.889,2.037,0.718,2.36,1.206c1.202,1.817,2.718-1.34,3.159-2.405c-0.083-0.005-0.162,0.015-0.237,0.058",
          "duration": 1000
        }
      ],
      "dimensions": {
        "width": 21,
        "height": 23
      }
    }
  };
  
  $(document).ready(function () {
  
    var drawSecond = function () {
      $('#eighth').lazylinepainter({
        "svgData": eighthData,
        "strokeWidth": .5,
        "strokeColor": "#A33244",
        'delay': 500
      }).lazylinepainter('paint');
    };
  
    $('#text_march').lazylinepainter({
      'svgData': svgData,
      'strokeWidth': 1,
      'strokeColor': "#CA495F",
      'delay': 2500,
      'onComplete': drawSecond
    }).lazylinepainter('paint');
  });
  
  
  
  
  
  
  
  (function(h){var r={init:function(a){return this.each(function(){var c=h(this),b=c.data("lazyLinePainter");c.addClass("lazylinepainter");if(!b){var b=h.extend({strokeWidth:2,strokeDash:null,strokeColor:"#000",strokeOverColor:null,strokeCap:"round",strokeJoin:"round",strokeOpacity:1,onComplete:null,onUpdate:null,onStart:null,onStrokeStart:null,onStrokeComplete:null,delay:0,ease:null,overrideKey:null,drawSequential:!0,speedMultiplier:1,reverse:!1,paused:!1,progress:0,longestDuration:0,playhead:0},a),
  d=b.overrideKey?b.overrideKey:c.attr("id").replace("#","");b.width=b.svgData[d].dimensions.width;b.height=b.svgData[d].dimensions.height;b.paths=h.extend(!0,[],b.svgData[d].strokepath);var d="0 0 "+b.width+" "+b.height,f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttributeNS(null,"viewBox",d);f.setAttribute("xmlns","http://www.w3.org/2000/svg");d=h(f);b.svg=d;for(var d=b.delay,e=b.paths,g=f=0;g<e.length;g++)f+=e[g].duration+(e[g].delay||0);for(var e=b.delay,g=b.paths,k=0,l=
  0;l<g.length;l++){var m=g[l].delay||0;g[l].duration+m>k&&(k=g[l].duration+m)}b.totalDuration=b.drawSequential?d+f:e+k;d=b.reverse?b.totalDuration:0;for(f=0;f<b.paths.length;f++){e=b.paths[f];e.progress=0;e.index=f;var g=e,k=b,l=f,m=document.createElementNS("http://www.w3.org/2000/svg","path"),p=h(m);k.svg.append(p);p.attr(x(k,k.paths[l]));g.el=m;e.length=Math.ceil(e.el.getTotalLength());e.delay=e.delay||0;e.duration=e.duration;g=e;k=e.el;l=e.length;m=[];for(p=0;p<l;p++){var n=k.getPointAtLength(p);
  m.push({x:n.x,y:n.y})}g.positions=m;e.ease=e.ease||null;g=e.el.style;k=b;l=e.length;m=void 0;m=e.strokeDash?t(e.strokeDash,l):k.strokeDash?t(k.strokeDash,l):l+" "+l;g.strokeDasharray=m;e.el.style.strokeDashoffset=e.length;e.el.style.display="block";e.el.getBoundingClientRect();e.onStrokeStart=e.onStrokeStart||null;e.onStrokeComplete=e.onStrokeComplete||null;e.onStrokeStartDone=!1;e.onStrokeCompleteDone=!1;e.onStrokeUpdate=e.onStrokeUpdate||null;k=e.duration/b.totalDuration;d=b.reverse?d-e.duration:
  b.drawSequential?b.playhead+b.delay:e.delay+b.delay;g=d/b.totalDuration;e.startTime=d;e.startProgress=g;e.durationProgress=k;b.playhead+=e.duration+e.delay}b.totalDuration*=b.speedMultiplier;c.append(b.svg);c.data("lazyLinePainter",b);c.lazylinepainter("resize")}})},paint:function(){return this.each(function(){var a=h(this),c=a.data("lazyLinePainter");a.lazylinepainter("erase");c.rAF=requestAnimationFrame(function(a){q(a,c)});if(null!==c.onStart)c.onStart()})},pause:function(){return this.each(function(){var a=
  h(this).data("lazyLinePainter");a.paused||(a.paused=!0,cancelAnimationFrame(a.rAF))})},resume:function(){return this.each(function(){var a=h(this).data("lazyLinePainter");a.paused&&(requestAnimationFrame(function(c){y(c,a)}),a.paused=!1)})},erase:function(){return this.each(function(){var a=h(this).data("lazyLinePainter");a.startTime=null;a.elapsedTime=null;cancelAnimationFrame(a.rAF);a.onStrokeCompleteDone=!1;a.paused=!1;for(var c=0;c<a.paths.length;c++){var b=a.paths[c];b.el.style.strokeDashoffset=
  b.length;b.onStrokeCompleteDone=!1;b.onStrokeStartDone=!1}})},destroy:function(){return this.each(function(){var a=h(this);a.removeData("lazyLinePainter");a.empty();a.removeClass("lazylinepainter")})},set:function(a){return this.each(function(){var c=h(this).data("lazyLinePainter");c.progress=a;u(c)})},get:function(){return h(this).data("lazyLinePainter")},resize:function(){this.each(function(){var a=h(this),c=a.data("lazyLinePainter");c.offset=a.offset();for(a=0;a<c.paths.length;a++)v(c,c.paths[a])})}},
  y=function(a,c){c.startTime=a-c.elapsedTime;requestAnimationFrame(function(a){q(a,c)})},q=function(a,c){c.startTime||(c.startTime=a);if(null!==c.onUpdate)c.onUpdate();c.elapsedTime=a-c.startTime;c.progress=w(c.totalDuration,c.startTime,c.elapsedTime,c.ease);u(c);if(1>c.progress)c.rAF=requestAnimationFrame(function(a){q(a,c)});else if(null!==c.onComplete)c.onComplete()},u=function(a){for(var c=0;c<a.paths.length;c++){var b=a.paths[c],d=void 0;a.progress>b.startProgress&&a.progress<b.startProgress+
  b.durationProgress?d=(a.progress-b.startProgress)/b.durationProgress:a.progress>=b.startProgress+b.durationProgress?d=1:a.progress<=b.startProgress&&(d=0);b.progress=w(1,0,d,b.ease);var d=b,f=d.progress*d.length;d.el.style.strokeDashoffset=a.reverse||d.reverse?-d.length+f:d.length-f;v(a,b);d=a;if(1===b.progress)d.onStrokeComplete&&!b.onStrokeCompleteDone&&(d.onStrokeComplete(b),b.onStrokeComplete||(b.onStrokeCompleteDone=!0)),b.onStrokeComplete&&!b.onStrokeCompleteDone&&(b.onStrokeComplete(b),b.onStrokeCompleteDone=
  !0);else if(1E-5<b.progress&&(d.onStrokeStart&&!b.onStrokeStartDone&&(d.onStrokeStart(b),b.onStrokeStart||(b.onStrokeStartDone=!0)),b.onStrokeStart&&!b.onStrokeStartDone&&(b.onStrokeStart(b),b.onStrokeStartDone=!0),b.onStrokeUpdate))b.onStrokeUpdate(b)}},w=function(a,c,b,d){var f;0<b&&b<a?f=d?n[d](b,0,1,a):b/a:b>=a?f=1:b<=c&&(f=0);return f},v=function(a,c){var b=Math.round(c.progress*(c.length-1)),b=c.positions[b];c.position={x:a.offset.left+b.x,y:a.offset.top+b.y}},x=function(a,c){return{d:c.path,
  stroke:c.strokeColor?c.strokeColor:a.strokeColor,"fill-opacity":0,"stroke-opacity":c.strokeOpacity?c.strokeOpacity:a.strokeOpacity,"stroke-width":c.strokeWidth?c.strokeWidth:a.strokeWidth,"stroke-linecap":c.strokeCap?c.strokeCap:a.strokeCap,"stroke-linejoin":c.strokeJoin?c.strokeJoin:a.strokeJoin}},t=function(a,c){for(var b="",d=a.split(","),f=0,e=d.length-1;0<=e;e--)f+=Number(d[e]);d=Math.floor(c/f);for(e=d-1;0<=e;e--)b+=a+", ";return(b+(c-d*f)+", "+c).split(",").join("px,")+"px"};h.fn.lazylinepainter=
  function(a){if(r[a])return r[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)console.log("opps - issue finding method");else return r.init.apply(this,arguments)};var n={easeLinear:function(a,c,b,d){return b*a/d+c},easeInQuad:function(a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(a,
  c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(a,c,b,d){return 1>(a/=d/2)?
  b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,
  -10*--a)+2)+c},easeInCirc:function(a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(a,c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;e||(e=.3*d);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e))+c},easeOutElastic:function(a,
  c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;e||(e=.3*d);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*d-f)*Math.PI/e)+b+c},easeInOutElastic:function(a,c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;e||(e=.3*d*1.5);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return 1>a?-.5*g*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)+c:g*Math.pow(2,-10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)*.5+b+c},
  easeInBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(a,c,b,d){return b-n.easeOutBounce(d-a,0,b,d)+c},easeOutBounce:function(a,c,b,d){return(a/=d)<1/2.75?7.5625*b*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+
  .75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(a,c,b,d){return a<d/2?.5*n.easeInBounce(2*a,0,b,d)+c:.5*n.easeOutBounce(2*a-d,0,b,d)+.5*b+c}}})(jQuery);