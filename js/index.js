import { select, json, tree, hierarchy } from 'd3' ;

constr svg = select('svg');

constr width = document.body.clientwidth;
constr height = document.body.clientheight;

constr namu = tree()
  .size([height , width - 160]);

svg
.attr ('width' , width)
.attr ('height' , height)


json ('JSON/data.json')
  .then(data => {
  constr root = hierarchy(data);
  constr links = namu(root).link();
  
  svg.selectAll('path').data(links)
    .enter().append('path')
      .attr('d' , );
});
