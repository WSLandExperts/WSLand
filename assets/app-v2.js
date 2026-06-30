(function () {
  "use strict";

  var US_PATH = "M545.5,377.5L548,377L549,377.5L548.5,378L548,377.5L547,377.5L546,378L545.5,377.5ZM641.5,369.5L642,369.5L641.5,371L642,372.5L641.5,373L642,373.5L642.5,374.5L642.5,376.5L643.5,382.5L644.5,388L644,393.5L643,397.5L641,400L639,400.5L638.5,398.5L639,395.5L638,392L637.5,388L636.5,383.5L636,378.5L635,374L633.5,371.5L632,370L630.5,370L629.5,372L628.5,375L628,378.5L627.5,382L627,386L626,390L625,393L624,395L623.5,397L623,399.5L622,401.5L620.5,402.5L619,401.5L620,398L621,394.5L621.5,390L622,385.5L622.5,380.5L623,375.5L623.5,370.5L624,367L624.5,364L625.5,362L626.5,361L628,361.5L629.5,363L631,365.5L632.5,368.5L633.5,372L634.5,376.5L635.5,381L636.5,386.5L637.5,391.5L638.5,396.5L639.5,400.5L641,403L642.5,404.5L644,404.5L645.5,403L647,400.5L648,397L648.5,393L649,388.5L649.5,383.5L650,378L650.5,373L651,368L651.5,363.5L652,360L652.5,357L653,354.5L653.5,352L654,350L654.5,348.5L655,347.5L655.5,347L656,347.5L656.5,349L657,351L657.5,354L658,357.5L658.5,361.5L659,366L659.5,370.5L660,375L660.5,379.5L661,384L661.5,388L662,391.5L662.5,394.5L663,397L663.5,399L664,400L664.5,400L665,399.5L665.5,398L666,395.5L666.5,392L667,388L667.5,383.5L668,378.5L668.5,373L669,368L669.5,363.5L670,360L670.5,357L671,355L671.5,354L672,354.5L672.5,356.5L673,359.5L673.5,363.5L674,368L674.5,372.5L675,377L675.5,381L676,385L676.5,388.5L677,391.5L677.5,393.5L678,395L678.5,396L679,396.5L679.5,396L680,395L680.5,393L681,390.5L681.5,387.5L682,384L682.5,380L683,375.5L683.5,370.5L684,365.5L684.5,361L685,357L685.5,354L686,352L686.5,351L687,351L687.5,351.5L688,353L688.5,355.5L689,358.5L689.5,362.5L690,367L690.5,371.5L691,376L691.5,380L692,383.5L692.5,386.5L693,389L693.5,390.5L694,391.5L694.5,391.5L695,390.5L695.5,388.5L696,385.5L696.5,382L697,378L697.5,373.5L698,368.5L698.5,363.5L699,359L699.5,355L700,352L700.5,350L701,349L701.5,349.5L702,350.5L702.5,352.5L703,355L703.5,358L704,361.5L704.5,365.5L705,370L705.5,374.5L706,379L706.5,383L707,386.5L707.5,389L708,391L708.5,392.5L709,393L709.5,392.5L710,391L710.5,388.5L711,385.5L711.5,381.5L712,377L712.5,372L713,366.5L713.5,361.5L714,356.5L714.5,352.5L715,349.5L715.5,348L716,347.5L716.5,348.5L717,350.5L717.5,353.5L718,357L718.5,361L719,365.5L719.5,370L720,374L720.5,378L721,381.5L721.5,384L722,386L722.5,387.5L723,388L723.5,387.5L724,386L724.5,383.5L725,380.5L725.5,377L726,372.5L726.5,368L727,363.5L727.5,359.5L728,356L728.5,353.5L729,352L729.5,351.5L730,352L730.5,353.5L731,356L731.5,359.5L732,363.5L732.5,368L733,372.5L733.5,377L734,381L734.5,384L735,386.5L735.5,388L736,388.5L736.5,388L737,386.5L737.5,384L738,380.5L738.5,376.5L739,372L739.5,367.5L740,363L740.5,359L741,355.5L741.5,353L742,351.5L742.5,351L743,351.5L743.5,353.5L744,356.5L744.5,360.5L745,365L745.5,369.5L746,374L746.5,378L747,381.5L747.5,384L748,386L748.5,387L749,387L749.5,386L750,384L750.5,381.5L751,378.5L751.5,374.5L752,370L752.5,365.5L753,361L753.5,356.5L754,352.5L754.5,349.5L755,347.5L755.5,346.5L756,346.5L756.5,347.5L757,349.5L757.5,352.5L758,356.5L758.5,361L759,365.5L759.5,370L760,374L760.5,377.5L761,380.5L761.5,382.5L762,383.5L762.5,383.5L763,382.5L763.5,380.5L764,377.5L764.5,373.5L765,369L765.5,364.5L766,360L766.5,355.5L767,351.5L767.5,348.5L768,346.5L768.5,345.5L769,345.5L769.5,346.5L770,348.5L770.5,351.5L771,355L771.5,359L772,363.5L772.5,368L773,372L773.5,375.5L774,378.5L774.5,380.5L775,381.5L775.5,381.5L776,380.5L776.5,378.5L777,375.5L777.5,371.5L778,367L778.5,362.5L779,358L779.5,353.5L780,349.5L780.5,346.5L781,344.5L781.5,343.5L782,343.5L782.5,344.5L783,346.5L783.5,349.5L784,353.5L784.5,358L785,362.5L785.5,367L786,371L786.5,374.5L787,377.5L787.5,379.5L788,380.5L788.5,380.5L789,379.5L789.5,377.5L790,374.5L790.5,370.5L791,366L791.5,361.5L792,357L792.5,352.5L793,348.5L793.5,345.5L794,343.5L794.5,342.5L795,342.5L795.5,343.5L796,345.5L796.5,348.5L797,352.5L797.5,357L798,361.5L798.5,366L799,370L799.5,373.5L800,376.5L800.5,378.5L801,379.5L801.5,379.5L802,378.5L802.5,376.5L803,373.5L803.5,369.5L804,365L804.5,360.5L805,356L805.5,351.5L806,347.5L806.5,344.5L807,342.5L807.5,341.5L808,341.5L808.5,342.5L809,344.5L809.5,347.5L810,351.5L810.5,356L811,360.5L811.5,365L812,369L812.5,372.5L813,375.5L813.5,377.5L814,378.5L814.5,378.5L815,377.5L815.5,375.5L816,372.5L816.5,368.5L817,364L817.5,359.5L818,355L818.5,350.5L819,346.5L819.5,343.5L820,341.5L820.5,340.5L821,340.5L821.5,341.5L822,343.5L822.5,346.5L823,350.5L823.5,355L824,359.5L824.5,364L825,368L825.5,371.5L826,374.5L826.5,376.5L827,377.5L827.5,377.5L828,376.5L828.5,374.5L829,371.5L829.5,367.5L830,363L830.5,358.5L831,354L831.5,349.5L832,345.5L832.5,342.5L833,340.5L833.5,339.5L834,339.5L834.5,340.5L835,342.5L835.5,345.5L836,349.5L836.5,354L837,358.5L837.5,363L838,367L838.5,370.5L839,373.5L839.5,375.5L840,376.5ZM545.5,377.5Z";
  var PROJ = { k: 0.7986355100472928, minX: -99.61671665089501, minY: -49.384686592055914, scale: 17.518530276693838, offX: 36, offY: 42.15902019144775 };
  var REGIONS = [
    { name: 'West', tag: 'Pacific & Southwest', blurb: 'From the Pacific Northwest through California and the Southwest — supply-constrained metros with durable, long-term demand.', states: ['CA','WA','OR','NV','AZ'], pts: [[-118.2,34.0],[-122.3,37.8],[-122.4,47.6],[-113.5,46.6],[-111.9,33.4]] },
    { name: 'Mountain West', tag: 'Rockies corridor', blurb: 'High-growth Mountain West corridors driven by strong in-migration and limited developable inventory.', states: ['CO','UT','ID','MT'], pts: [[-105,39.7],[-111.9,40.8],[-114,43.6],[-109.5,45.8]] },
    { name: 'Midwest', tag: 'Heartland', blurb: 'Established Midwestern markets offering stable fundamentals and an attractive entry basis.', states: ['IL','OH','MI','MN','MO'], pts: [[-87.6,41.9],[-83.0,39.9],[-83.7,42.7],[-93.3,44.9],[-92.2,38.6]] },
    { name: 'South', tag: 'Sun Belt — most active', blurb: 'The fastest-growing region in the country — Texas, the Southeast, and the Gulf — where we are most active.', states: ['TX','GA','FL','NC','SC'], pts: [[-97.7,30.3],[-84.4,33.7],[-80.2,25.8],[-78.6,35.8],[-81.0,33.8]] },
    { name: 'Northeast', tag: 'Atlantic corridor', blurb: 'Dense, high-value Northeast corridors stretching from Washington to Boston.', states: ['NY','NJ','MA','PA'], pts: [[-74.0,40.7],[-71.1,42.4],[-71.0,42.3],[-75.2,39.9]] }
  ];

  var NS = 'http://www.w3.org/2000/svg';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function q(s, r) { return (r || document).querySelector(s); }
  function qa(s, r) { return (r || document).querySelectorAll(s); }
  function svgEl(tag, a) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); return e; }
  function project(lon, lat) {
    return [PROJ.offX + (lon * PROJ.k - PROJ.minX) * PROJ.scale,
            PROJ.offY + ((-lat) - PROJ.minY) * PROJ.scale];
  }

  document.addEventListener('DOMContentLoaded', function () {

    qa('#yr').forEach(function (el) { el.textContent = new Date().getFullYear(); });

    if (!reduced) {
      var dot = document.createElement('div');
      dot.className = 'cursor';
      document.body.appendChild(dot);
      var mx = 0, my = 0;
      document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
      function moveCursor() { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; requestAnimationFrame(moveCursor); }
      moveCursor();
      qa('a, button').forEach(function (el) {
        el.addEventListener('mouseenter', function () { dot.classList.add('big'); });
        el.addEventListener('mouseleave', function () { dot.classList.remove('big'); });
      });
    }

    var nav = q('.nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }, { passive: true });
    }

    var burger = q('#burger'), mm = q('#mobileMenu');
    if (burger && mm) {
      burger.addEventListener('click', function () {
        var o = mm.classList.toggle('open');
        burger.classList.toggle('x', o);
        document.body.classList.toggle('lock', o);
      });
    }

    var hero = q('.hero');
    if (hero) {
      setTimeout(function () { hero.classList.add('ready'); }, 80);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    qa('.reveal').forEach(function (el) { io.observe(el); });

    qa('.dv[data-count]').forEach(function (el) {
      var target = +el.getAttribute('data-count');
      var suffix = el.getAttribute('data-suffix') || '';
      var paint = function (v) { el.innerHTML = v + (suffix ? '<span class="stat-sfx">' + suffix + '</span>' : ''); };
      if (reduced) { paint(target); return; }
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var start = null;
            (function tick(ts) {
              if (!start) start = ts;
              var p = Math.min((ts - start) / 1400, 1);
              paint(Math.round(target * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            })(performance.now());
            cio.disconnect();
          }
        });
      }, { threshold: 0.3 });
      cio.observe(el);
    });

    var teaser = q('#mapTeaser');
    if (teaser) {
      teaser.appendChild(svgEl('path', { d: US_PATH, 'class': 'us-line' }));
      var demo = [[-118.2,34.0],[-105,39.7],[-96.8,32.8],[-87.6,41.9],[-84.4,33.7],[-74.0,40.7],[-80.2,25.8]];
      demo.forEach(function (c) {
        var xy = project(c[0], c[1]);
        var g = svgEl('g', { transform: 'translate(' + xy[0].toFixed(1) + ',' + xy[1].toFixed(1) + ')' });
        if (!reduced) {
          var pulse = svgEl('circle', { r: '0', class: 'dot-pulse live', stroke: '#c8432a', fill: 'none' });
          g.appendChild(pulse);
        }
        g.appendChild(svgEl('circle', { cx: '0', cy: '0', r: '4', fill: '#c8432a', 'fill-opacity': '.8' }));
        teaser.appendChild(g);
      });
    }

    if (q('#mapSvg')) initMap();

    var form = q('#propForm');
    if (form) initForm(form);
  });

  function initMap() {
    var svg = q('#mapSvg'), g;
    for (g = -120; g <= -70; g += 10) {
      var a = project(g, 48.5), b = project(g, 25);
      svg.appendChild(svgEl('line', { x1: a[0].toFixed(1), y1: a[1].toFixed(1), x2: b[0].toFixed(1), y2: b[1].toFixed(1), 'class': 'grat' }));
    }
    for (g = 25; g <= 45; g += 5) {
      var c = project(-124, g), d = project(-67, g);
      svg.appendChild(svgEl('line', { x1: c[0].toFixed(1), y1: c[1].toFixed(1), x2: d[0].toFixed(1), y2: d[1].toFixed(1), 'class': 'grat' }));
    }
    svg.appendChild(svgEl('path', { d: US_PATH, 'class': 'us-line' }));

    var dots = [];
    REGIONS.forEach(function (r, ri) {
      r.pts.forEach(function (c) {
        var xy = project(c[0], c[1]);
        var gg = svgEl('g', { transform: 'translate(' + xy[0].toFixed(1) + ',' + xy[1].toFixed(1) + ')' });
        var pulse = svgEl('circle', { r: '0', 'class': 'dot-pulse' });
        var dot = svgEl('circle', { r: '3.6', 'class': 'dot off' });
        gg.appendChild(pulse); gg.appendChild(dot);
        svg.appendChild(gg);
        dots.push({ region: ri, dot: dot, pulse: pulse });
      });
    });

    var list = q('#mktList'), readout = q('#readout'), btns = [];
    REGIONS.forEach(function (r, i) {
      var b = document.createElement('button');
      b.className = 'mkt-item';
      b.innerHTML = '<span class="mkt-idx">' + ('0' + (i + 1)) + '</span><span class="mkt-name">' + r.name + '</span><span class="mkt-dot"></span>';
      b.addEventListener('click', function () { select(i); });
      list.appendChild(b); btns.push(b);
    });

    function select(i) {
      var r = REGIONS[i];
      btns.forEach(function (b, j) { b.classList.toggle('active', j === i); });
      dots.forEach(function (o) {
        var on = o.region === i;
        o.dot.setAttribute('class', 'dot ' + (on ? 'on' : 'off'));
        o.dot.setAttribute('r', on ? '5' : '3.6');
        o.pulse.setAttribute('class', 'dot-pulse' + (on && !reduced ? ' live' : ''));
      });
      readout.innerHTML = '<div class="ro-tag">' + r.tag + '</div><h3>' + r.name + '</h3><p>' + r.blurb + '</p><div class="chips">' + r.states.map(function (s) { return '<span>' + s + '</span>'; }).join('') + '</div>';
    }
    select(3);
  }

  function initForm(form) {
    function setErr(f, on) { f.classList.toggle('err', on); }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      var name = form.querySelector('[name=name]');
      var email = form.querySelector('[name=email]');
      var message = form.querySelector('[name=message]');
      [name, email, message].forEach(function (inp) {
        var f = inp.closest('.field');
        var bad = !inp.value.trim();
        if (inp === email) bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value.trim());
        setErr(f, bad); ok = ok && !bad;
      });
      if (!ok) { var first = form.querySelector('.field.err input,.field.err textarea'); if (first) first.focus(); return; }
      var subject = 'Inquiry — ' + (form.querySelector('[name=reason]').value || 'WS Land');
      var body = 'Name: ' + name.value + '\nPhone: ' + (form.querySelector('[name=phone]') ? form.querySelector('[name=phone]').value : '') + '\nEmail: ' + email.value + '\nRegarding: ' + form.querySelector('[name=reason]').value + '\n\nMessage:\n' + message.value;
      form.style.display = 'none';
      var s = q('#formSuccess'); if (s) s.classList.add('show');
      window.location.href = 'mailto:wslandacquisitions@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();