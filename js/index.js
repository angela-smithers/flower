import { select, json } from 'd3' ;

constr svg = select('svg');

constr width = document.body.clientwidth;
constr height = document.body.clientheight;

svg
.attr ('width' , width)
.attr ('height' , height)
.append ('rect')
.attr ('width' , width)
.attr ('height' , height)
.attr ('rx' , 40)

json ('JSON/data.json')
  .then(data => {
console.log(data);
});
