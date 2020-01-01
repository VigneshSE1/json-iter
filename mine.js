const treeData = [{
        "jssType": "fieldset",
        "children": [{
            "jssType": "list-ol",
            "children": [{
                    "jssType": "list-li",
                    "children": [{
                        "jssType": "text",
                    }]
                },
                {
                    "jssType": "list-li",
                    "children": [{
                        "jssType": "email",
                    }]
                },
                {
                    "jssType": "list-li",
                    "children": [{
                        "jssType": "textarea",
                    }]
                }
            ]
        }]

    },
    {
        "jssType": "submit",
    },
    {
        "jssType": "fieldset2",
        "children": [{
            "jssType": "list-ol2",
            "children": [{
                    "jssType": "list-li2",
                    "children": [{
                        "jssType": "text2",
                    }]
                },
                {
                    "jssType": "list-li2",
                    "children": [{
                        "jssType": "email2",
                    }]
                },
                {
                    "jssType": "list-li2",
                    "children": [{
                        "jssType": "textarea2",
                    }]
                }
            ]
        }]

    }

];




function findObjectByLabel(obj, label) {
    for (var elements in obj) {
        if (elements === label) {
            console.log(obj[elements]);
        }
        if (typeof obj[elements] === 'object') {
            findObjectByLabel(obj[elements], 'jssType');
        }

    }
};

findObjectByLabel(treeData, 'jssType');