const Node = require('./067 - Breadth-first Search')

describe('Test the Breadth-first Search algoritm', () =>{

    xtest('returns abcd', () =>{
        const graph = new Node('A');
        graph.addChild('B')
        graph.addChild('C')
        graph.addChild('D')

        const result = graph.breadthFirstSearch([]);
        const expected = ['A','B','C','D'];
        expect(result).toStrictEqual(expected);

    })

    xtest('returns abcdefgh', () =>{
        const graph = new Node('A');
        graph.addChild('B')
        graph.addChild('C')
        graph.addChild('D')
        graph.children[0].addChild('E')
        graph.children[0].addChild('F')
        graph.children[2].addChild('G')
        graph.children[2].addChild('H')
        const result = graph.breadthFirstSearch([]);
        const expected = ['A','B','C','D','E','F','G','H'];
        expect(result).toStrictEqual(expected)

    })


    xtest('returns abcdefghijk', () =>{
        const graph = new Node('A');
        graph.addChild('B')
        graph.addChild('C')
        graph.addChild('D')
        graph.children[0].addChild('E')
        graph.children[0].addChild('F')
        graph.children[2].addChild('G')
        graph.children[2].addChild('H')
        graph.children[0].children[1].addChild('I')
        graph.children[0].children[1].addChild('J')
        graph.children[2].children[0].addChild('K')

        const result = graph.breadthFirstSearch([]);
        const expected = ['A','B','C','D','E','F','G','H','I','J','K'];
        expect(result).toStrictEqual(expected)

    })
});