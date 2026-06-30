(function () {
  "use strict";

  var US_PATH = "M36.5,59.4L37.9,68.2L44.9,98.0L39.3,136.5L39.3,171.5L43.5,194.3L46.3,234.6L67.3,250.4L68.6,245.1L92.4,297.7L110.6,309.9L123.2,313.4L141.4,338.0L151.2,338.0L175.0,334.5L226.7,359.0L267.3,359.0L291.1,350.2L326.1,392.3L376.5,416.8L419.8,451.8L417.0,446.6L431.0,416.8L456.2,394.0L468.8,387.0L519.2,399.3L529.0,380.0L549.9,374.7L584.9,388.8L604.5,381.8L617.1,385.3L633.9,392.3L642.3,369.5L656.3,434.3L660.5,455.3L657.7,465.8L646.5,476.4L633.9,455.3L619.9,450.1L598.9,429.1L587.7,387.0L604.5,381.8L640.9,364.2L654.9,345.0L663.3,334.5L724.8,290.7L722.0,276.6L726.2,243.4L733.2,225.8L744.4,196.1L775.2,183.8L794.8,176.8L799.0,143.5L843.7,120.7L842.3,82.2L813.0,75.2L780.8,119.0L716.4,136.5L710.8,143.5L674.5,145.3L626.9,176.8L617.1,173.3L617.1,164.5L633.9,150.5L624.1,110.2L584.9,99.7L556.9,103.2L552.7,68.2L522.0,66.4L449.2,48.9L382.0,48.9L326.1,48.9L242.1,48.9L186.2,48.9L144.2,48.9L102.2,48.9L63.1,48.9L36.5,59.4Z";  var PROJ = { k: 0.7986355100472928, minX: -99.61671665089501, minY: -49.384686592055914, scale: 17.518530276693838, offX: 36, offY: 42.15902019144775 };
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
