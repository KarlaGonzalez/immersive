/* function test2() {
    console.log('TEST DECISION TREE!!!')
} */

const links = {
    _altoura: 'http://www.studio216.com/', //Altoura
    _d365_guides: 'https://dynamics.microsoft.com/en-us/mixed-reality/guides/', //Dynamics 365 Guides
    _d365_remote: 'https://dynamics.microsoft.com/en-us/mixed-reality/remote-assist/', //Dynamics 365 Remote Assist
    _iec: '', //IEC
    _immersive: '', //Immersive Video
    _insta: '', //InstaLOD
    _kaon: '', //Kaon
    _lmir_lens: '', //Log Me In Rescue Lens
    _lmir_remote: 'https://www.logmeinrescue.com/', //Log Me In Rescue Remote Desktop
    _matterport: '', //Matterport
    _ohmni: '', //Ohmnilabs
    _thermo_u: '', //ThermoFisher U
}

const strings = {
    instructions: 'Click circle to navigate',

    root: 'I need help with',

    branch1: 'Performing processes or operating equipment',
    branch2: '3D Modelling',
    branch3: 'Selling products',
    branch4: 'Customers or colleagues',
    
    _live: 'I need help live',
    _perform: 'I want someone to show me how to perform my process',
    _video: 'I want a video chat',
    _lmir_remote: 'Log Me In Rescue Remote Desktop',
    _holo_tools: 'I want holographic tools',
    _d365_remote: 'Dynamics 365 Remote Assist',
    _lmir_lens: 'Log Me In Rescue Lens',
    _holo_procedure: 'I want to follow a holographic procedure',
    _d365_guides: 'Dynamics 365 Guides',
    _simulation: 'I need help via a simulation',
    _training: 'I want training',
    _virtually: 'I want to experience a process virtually',
    _altoura: 'Altoura',
    _learn_web: 'I want to learn via web',
    _thermo_u: 'ThermoFisher U',
    _cad: 'CAD to 3D Automation',
    _insta: 'InstaLOD',
    _tradeshow: 'At a Tradeshow',
    _walkthrough: 'Virtual Walkthrough',
    _matterport: 'Matterport',
    _showroom: 'Virtual Showroom',
    _overview: 'Virtual Product Overview',
    _kaon: 'Kaon',
    _iec: 'IEC',
    _on_web: 'On the Web',
    _photoreal: '3D Photorealistic Model',
    _product_sim: 'Full Product Simulation',
    _infographic: 'Smart Infographic',
    _immersive: 'Immersive Video',
    _customer: 'To A Customer',
    _static: 'Static View',
    _facility: 'I want to walk through the facility',
    _realtime: 'In Real Time',
    _conference: 'Virtual Conference Room',
    _stream: 'Live Video Stream',
    _robot: 'Remotely control a robot to demonstrate a process',
    _ohmni: 'Ohmnilabs',
    _teams: 'Teams',
    _webex: 'Webex',
    _face: 'FaceTime',
    _zoom: 'Zoom',
}

const data = [
	{name: 'root', parent: '', title: strings.root, children: [
        {name: 'branch1', parent: 'root', title: strings.branch1, children: [
            {name: '_live', parent: 'branch1', title: strings._live, children: [
                {name: '_perform', parent: '_live', title: strings._perform, children: [
                    {name: '_video', parent: '_perform', title: strings._video, children: [
                        {name: '_teams', parent: '_video', title: strings._teams},
                        {name: '_webex', parent: '_video', title: strings._webex},
                        {name: '_face', parent: '_video', title: strings._face},
                        {name: '_zoom', parent: '_video', title: strings._zoom},
                        {name: '_lmir_remote', parent: '_video', title: strings._lmir_remote, link: links._lmir_remote}
                    ]},
                    {name: '_holo_tools', parent: '_perform', title: strings._holo_tools, children: [
                        {name: '_d365_remote', parent: '_holo_tools', title: strings._d365_remote, link: links._d365_remote},
                        {name: '_lmir_lens', parent: '_holo_tools', title: strings._lmir_lens, link: links._lmir_lens}
                    ]}
                ]},
                {name: '_robot', parent: '_live', title: strings._robot, children: [
                    {name: '_ohmni', parent: '_robot', title: strings._ohmni, link: links._ohmni}
                ]},
                {name: '_holo_procedure', parent: '_live', title: strings._holo_procedure, children: [
                    {name: '_d365_guides', parent: '_holo_procedure', title: strings._d365_guides, link: links._d365_guides}
                ]}
            ]},
            {name: '_simulation', parent: 'branch1', title: strings._simulation, children: [
                {name: '_training', parent: '_simulation', title: strings._training, children: [
                    {name: '_virtually', parent: '_training', title: strings._virtually, children: [
                        {name: '_altoura', parent: '_virtually', title: strings._altoura, link: links._altoura}
                    ]},
                    {name: '_learn_web', parent: '_training', title: strings._learn_web, children: [
                        {name: '_thermo_u', parent: '_learn_web', title: strings._thermo_u, link: links._thermo_u}
                    ]}
                ]}
            ]}
        ]},
        {name: 'branch2', parent: 'root', title: strings.branch2, children: [
            {name: '_cad', parent: 'branch2', title: strings._cad, children: [
                {name: '_insta', parent: '_cad', title: strings._insta, link: links._insta}
            ]}
        ]},
        {name: 'branch3', parent: 'root', title: strings.branch3, children: [
            {name: '_tradeshow', parent: 'branch3', title: strings._tradeshow, children: [
                {name: '_walkthrough', parent: '_tradeshow', title: strings._walkthrough, children: [
                    {name: '_matterport', parent: '_walkthrough', title: strings._matterport, link: links._matterport}
                ]},
                {name: '_showroom', parent: '_tradeshow', title: strings._showroom, children: [
                    {name: '_altoura', parent: '_showroom', title: strings._altoura, link: links._altoura}
                ]},
                {name: '_overview', parent: '_tradeshow', title: strings._overview, children: [
                    {name: '_altoura', parent: '_overview', title: strings._altoura, link: links._altoura},
                    {name: '_kaon', parent: '_overview', title: strings._kaon, link: links._kaon},
                    {name: '_iec', parent: '_overview', title: strings._iec, link: links._iec}
                ]}
            ]},
            {name: '_on_web', parent: 'branch3', title: strings._on_web, children: [
                {name: '_photoreal', parent: '_on_web', title: strings._photoreal, children: [
                    {name: '_cad', parent: '_photoreal', title: strings._cad, children: [
                        {name: '_insta', parent: '_cad', title: strings._insta, link: links._insta},
                    ]},
                ]},
                {name: '_product_sim', parent: '_on_web', title: strings._product_sim, children: [
                    {name: '_altoura', parent: '_product_sim', title: strings._altoura, link: links._altoura},
                    {name: '_kaon', parent: '_product_sim', title: strings._kaon, link: links._kaon},
                    {name: '_iec', parent: '_product_sim', title: strings._iec, link: links._iec}
                ]},
                {name: '_infographic', parent: '_on_web', title: strings._infographic, children: [
                    {name: '_immersive', parent: '_infographic', title: strings._immersive, link: links._immersive},
                    {name: '_altoura', parent: '_infographic', title: strings._altoura, link: links._altoura},
                    {name: '_kaon', parent: '_infographic', title: strings._kaon, link: links._kaon},
                    {name: '_iec', parent: '_infographic', title: strings._iec, link: links._iec}
                ]}
            ]},
            {name: '_customer', parent: 'branch3', title: strings._customer, children: [
                {name: '_static', parent: '_customer', title: strings._static, children: [
                    {name: '_facility', parent: '_static', title: strings._facility, children: [
                        {name: '_showroom', parent: '_facility', title: strings._showroom, children: [
                            {name: '_altoura', parent: '_showroom', title: strings._altoura, link: links._altoura}
                        ]},
                    ]},
                ]},
                {name: '_realtime', parent: '_customer', title: strings._realtime, children: [
                    {name: '_conference', parent: '_realtime', title: strings._conference, children: [
                        {name: '_altoura', parent: '_conference', title: strings._altoura, link: links._altoura}
                    ]},
                    {name: '_stream', parent: '_realtime', title: strings._stream, children: [
                        {name: '_video', parent: '_stream', title: strings._video, children: [
                            {name: '_lmir_remote', parent: '_video', title: strings._lmir_remote, link: links._lmir_remote}
                        ]},
                        {name: '_holo_tools', parent: '_stream', title: strings._holo_tools, children: [
                            {name: '_d365_remote', parent: '_holo_tools', title: strings._d365_remote, link: links._d365_remote},
                            {name: '_lmir_lens', parent: '_holo_tools', title: strings._lmir_lens, link: links._lmir_lens}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {name: 'branch4', parent: 'root', title: strings.branch4, children: [
            {name: '_static', parent: 'branch4', title: strings._static, children: [
                {name: '_facility', parent: '_static', title: strings._facility, children: [
                    {name: '_showroom', parent: '_facility', title: strings._showroom, children: [
                        {name: '_altoura', parent: '_showroom', title: strings._altoura, link: links._altoura}
                    ]},
                ]},
            ]},
            {name: '_realtime', parent: 'branch4', title: strings._realtime, children: [
                {name: '_conference', parent: '_realtime', title: strings._conference, children: [
                    {name: '_altoura', parent: '_conference', title: strings._altoura, link: links._altoura}
                ]},
                {name: '_stream', parent: '_realtime', title: strings._stream, children: [
                    {name: '_video', parent: '_stream', title: strings._video, children: [
                        {name: '_lmir_remote', parent: '_video', title: strings._lmir_remote, link: links._lmir_remote}
                    ]},
                    {name: '_holo_tools', parent: '_stream', title: strings._holo_tools, children: [
                        {name: '_d365_remote', parent: '_holo_tools', title: strings._d365_remote, link: links._d365_remote},
                        {name: '_lmir_lens', parent: '_holo_tools', title: strings._lmir_lens, link: links._lmir_lens}
                    ]}
                ]}
            ]}
        ]}
    ]}
]  


  // ************** Generate the tree diagram	 *****************
  var margin = {top: 20, right: 120, bottom: 20, left: 120},
	  width = 1500,//window.innerWidth - margin.right - margin.left,
	  height = 600//window.innerHeight - margin.top - margin.bottom;

	const breadcrumb = [],
		b = document.createElement('div');
		b.className = 'breadcrumb';
		b.innerText = strings.instructions;
		document.body.appendChild(b);
	  
  var i = 0,
	  duration = 750,
	  root,
	  switchedNode;
  
  var tree = d3.layout.tree()
	  .size([height, width]);
  
  var diagonal = d3.svg.diagonal()
	  .projection(function(d) { return [ d.y, d.x]; }); //curved lines
  
  var svg = d3.select("body").append("svg")
	  .attr("width", width + margin.right + margin.left)
	  .attr("height", height + margin.top + margin.bottom)
	.append("g")
	  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  root = data[0];
  root.x0 = height / 2; //point everything sprouts from
  root.y0 = 0;

  childrenSwitch(root, false);
	
  update(root);
  
  d3.select(self.frameElement).style("height", "500px");
  
  function update(source) {

	const sourceNode = switchedNode || source;
  
	// Compute the new tree layout.
	var nodes = tree.nodes(root).reverse(),
		links = tree.links(nodes);
  
	// Normalize for fixed-depth.
	nodes.forEach(function(d) { d.y = d.depth * 180; }); //spacing along x axis
  
	// Update the nodes…
	var node = svg.selectAll("g.node")
		.data(nodes, function(d) { return d.id || (d.id = ++i); })
		.style("cursor", function(d) { return d._children || d.children || d.link ? "pointer" : "default" });
  
	// Enter any new nodes at the parent's previous position.
	var nodeEnter = node.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
		.on("click", click)
		.style("cursor", function(d) { return d._children || d.children || d.link ? "pointer" : "default" });
  
	nodeEnter.append("circle")
		.attr("r", 1e-6)
		.style("fill", function(d) { return d._children ? "lightsteelblue" : (d.link !== '' ? "MediumSpringGreen" : "white") })
		.style("fill", function(d) { return d._children ? "lightsteelblue" : (d.link !== '' ? "MediumSpringGreen" : "white") });
  
	nodeEnter.append("text")
		.attr("x", function(d) { return d.children || !d.depth ? -13 : 13; })
		.attr("dy", ".35em")
		.attr("text-anchor", function(d) { return d.children || !d.depth ? "end" : "start"; })
		.text(function(d) { return d.title; })
		.style("fill-opacity", 1e-6);
  
	// Transition nodes to their new position.
	var nodeUpdate = node.transition()
		.duration(duration)
		.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; }); //flip these for orientation
  
	nodeUpdate.select("circle")
		.attr("r", 10)
		.style("fill", function(d) { return d._children ? "lightsteelblue" : d.link ? "MediumSpringGreen" : "white" });
  
	nodeUpdate.select("text")
		.style("fill-opacity", function(d) { return d._children || !d.depth || (!d.children && !d._children)? 1 : 0 });
  
	// Transition exiting nodes to the parent's new position.
	var nodeExit = node.exit().transition()
		.duration(duration)
		.attr("transform", function(d) { return "translate(" + sourceNode.y + "," + sourceNode.x + ")"; })
		.remove();
  
	nodeExit.select("circle")
		.attr("r", 1e-6);
  
	nodeExit.select("text")
		.style("fill-opacity", 1e-6);
  
	// Update the links…
	var link = svg.selectAll("path.link")
		.data(links, function(d) { return d.target.id; });
  
	// Enter any new links at the parent's previous position.
	link.enter().insert("path", "g")
		.attr("class", "link")
		.attr("d", function(d) {
		  var o = {x: source.x0, y: source.y0};
		  return diagonal({source: o, target: o});
		});
  
	// Transition links to their new position.
	link.transition()
		.duration(duration)
		.attr("d", diagonal);
  
	// Transition exiting nodes to the parent's new position.
	link.exit().transition()
		.duration(duration)
		.attr("d", function(d) {
		  var o = {x: sourceNode.x, y: sourceNode.y};
		  return diagonal({source: o, target: o});
		})
		.remove();
  
	// Stash the old positions for transition.
	nodes.forEach(function(d) {
	  d.x0 = d.x;
	  d.y0 = d.y;
	});
  }
  
  // Toggle children on click.
  function click(d) {
	if (d.link) {window.open(d.link)}
	else if (d.children || d._children) {
		if (breadcrumb.length > d.depth) breadcrumb.splice(d.depth);
		if (d._children) breadcrumb.push({ d: d, title: d.title });

		if (breadcrumb.length) {
			b.innerHTML = '';
			for (var i in breadcrumb) {
				const p = document.createElement('p'),
					s = document.createElement('span');
				p.innerHTML = breadcrumb[i].title;
				s.innerHTML = '>';
				p.appendChild(s);
				b.appendChild(p);

				p.onclick = (e) => {
					for (var i in breadcrumb) {
						if (breadcrumb[i].title + '>' === e.target.innerText) { //this.innerText
							click(breadcrumb[i].d);
                        }
					}
				}
			}
		} else b.innerHTML = strings.instructions;

		childrenSwitch(d, false);
		update(d);
	}
  }

	function childrenSwitch(d, disable) {
		switchedNode = null;
		if (d.children) {
			d._children = d.children;
			d.children = null;
	  	} else if (!disable) {
			d.children = d._children;
			d._children = null;
			for (let i in d.children) childrenSwitch(d.children[i], true);
			const nodes = tree.nodes(root).reverse()
			nodes.forEach(function(_d) {
				if (_d !== d && _d.depth === d.depth && _d.children) {
					childrenSwitch(_d, true);
					switchedNode = _d;
				}
		  	});
	    }
    }
