var shared_parent = { text: { name: "shared parent" }, children: [] };

var chart_config = {
    chart: {
        container: "#tree-diagram",
        // animateOnInit: true,
        node: {
            collapsable: false
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        },
        rootOrientation: "WEST"
    },
    nodeStructure: {
        text: { name: "root" },
        children: [
            {
                text: { name: "child", title: "1" },
                children: [
                    shared_parent
                ]
            },
            {
                text: { name: "child", title: "2" },
                children: [
                    shared_parent
                ]
            }
        ]
    }
};
new Treant(chart_config);

console.log("Hello world from the tree");