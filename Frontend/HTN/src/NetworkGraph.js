import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const NetworkGraph = () => {
    const svgRef = useRef();

    useEffect(() => {
        const graph = {
            nodes: [
                { id: 'A' }, { id: 'B' }, { id: 'C' }, { id: 'D' }, { id: 'E' }
            ],
            links: [
                { source: 'A', target: 'B' },
                { source: 'A', target: 'C' },
                { source: 'B', target: 'D' },
                { source: 'C', target: 'E' }
            ]
        };

        const svg = d3.select(svgRef.current)
            .attr('width', 800)
            .attr('height', 600);

        const width = 800;
        const height = 600;

        const simulation = d3.forceSimulation(graph.nodes)
            .force('link', d3.forceLink(graph.links).id(d => d.id).distance(200))
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2));

        svg.selectAll('*').remove(); // Clear previous render

        // Draw links
        const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(graph.links)
            .enter().append('line')
            .attr('class', 'link')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6);

        // Draw nodes
        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(graph.nodes)
            .enter().append('circle')
            .attr('r', 10)
            .attr('fill', 'steelblue')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        // Add labels to nodes
        const labels = svg.append('g')
            .attr('class', 'labels')
            .selectAll('text')
            .data(graph.nodes)
            .enter().append('text')
            .attr('dy', 4)
            .attr('x', 12)
            .attr('fill', '#555')
            .text(d => d.id);

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            labels
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        });

        // Dragging functions
        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

    }, []);

    return (
        <svg ref={svgRef}></svg>
    );
};

export default NetworkGraph;
