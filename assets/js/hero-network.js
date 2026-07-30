(function () {
  var canvas = document.querySelector('.hero-network');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var config = {
    nodeColor: '#8FB8EE',
    pulseColor: '#F5A623',
    nodeCount: 32,
    linkDistance: 110,
    speed: 0.3,
    pulseRate: 0.05,
  };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var dpr = window.devicePixelRatio || 1;
  var W = 0, H = 0;

  function resize() {
    var newW = canvas.clientWidth;
    var newH = canvas.clientHeight;
    if (!newW || !newH) return;
    W = newW;
    H = newH;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes = createNodes();
  }

  function parseColor(c) {
    if (c.charAt(0) === '#' && c.length === 7) {
      var r = parseInt(c.slice(1, 3), 16);
      var g = parseInt(c.slice(3, 5), 16);
      var b = parseInt(c.slice(5, 7), 16);
      return r + ', ' + g + ', ' + b;
    }
    return null;
  }
  var nodeRGB = parseColor(config.nodeColor);
  var pulseRGB = parseColor(config.pulseColor);

  function createNodes() {
    return Array.from({ length: config.nodeCount }, function () {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        pulse: Math.random() * Math.PI * 2,
      };
    });
  }

  var nodes = [];
  var pulses = [];
  resize();

  function drawLinks() {
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        var d = Math.hypot(dx, dy);
        if (d < config.linkDistance) {
          var alpha = 0.28 * (1 - d / config.linkDistance);
          ctx.strokeStyle = nodeRGB ? 'rgba(' + nodeRGB + ', ' + alpha + ')' : config.nodeColor;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function drawNodes() {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var r = 2 + Math.sin(n.pulse) * 0.5;
      ctx.fillStyle = config.nodeColor;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (reduceMotion) {
    // sem movimento: um frame estático da rede, sem loop de animação
    ctx.clearRect(0, 0, W, H);
    drawLinks();
    drawNodes();
    window.addEventListener('resize', function () {
      resize();
      ctx.clearRect(0, 0, W, H);
      drawLinks();
      drawNodes();
    });
    return;
  }

  var raf = 0;
  var running = false;

  function loop() {
    if (!running) return;
    try {
      frame();
    } catch (e) {
      // uma exceção aqui pararia o requestAnimationFrame pra sempre;
      // segue agendando o próximo frame mesmo se algo der errado.
    }
    raf = requestAnimationFrame(loop);
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      n.pulse += 0.04;
    }

    drawLinks();

    if (Math.random() < config.pulseRate && pulses.length < 10) {
      var from = Math.floor(Math.random() * nodes.length);
      var neighbors = [];
      for (var k = 0; k < nodes.length; k++) {
        if (k === from) continue;
        var ndx = nodes[from].x - nodes[k].x;
        var ndy = nodes[from].y - nodes[k].y;
        if (Math.hypot(ndx, ndy) < config.linkDistance) neighbors.push(k);
      }
      if (neighbors.length) {
        var to = neighbors[Math.floor(Math.random() * neighbors.length)];
        pulses.push({ from: from, to: to, t: 0 });
      }
    }

    for (var p = pulses.length - 1; p >= 0; p--) {
      var pulse = pulses[p];
      var a = nodes[pulse.from];
      var b = nodes[pulse.to];
      pulse.t += 0.018;
      if (pulse.t >= 1) {
        pulses.splice(p, 1);
        continue;
      }
      var x = a.x + (b.x - a.x) * pulse.t;
      var y = a.y + (b.y - a.y) * pulse.t;
      var grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
      grad.addColorStop(0, config.pulseColor);
      grad.addColorStop(1, pulseRGB ? 'rgba(' + pulseRGB + ', 0)' : 'rgba(245,166,35,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = config.pulseColor;
      ctx.beginPath();
      ctx.arc(x, y, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }

    drawNodes();
  }

  function start() {
    if (running) return;
    running = true;
    loop();
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  window.addEventListener('resize', resize);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(resize);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) start();
      else stop();
    });
  });
  io.observe(canvas);
})();
