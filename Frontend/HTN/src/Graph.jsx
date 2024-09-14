import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current)
        .attr('width', 400)
        .attr('height', 300);

      svg.append('circle')
        .attr('cx', 200)
        .attr('cy', 150)
        .attr('r', 50)
        .attr('fill', 'blue');
    }
  }, []);

  return (
    <svg
      className="d3-component"
      ref={d3Container}
    />
  );
};

export default D3Chart;
